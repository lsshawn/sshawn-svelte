---
title: 'Learning notes - firebase'
date: 2019-03-11
tags:
  - learning-notes
  - firebase
---

<!-- vim-markdown-toc GFM -->

  * [Quickstart](#quickstart)
  * [Read multi documents](#read-multi-documents)
  * [Querying](#querying)
  * [Data modelling](#data-modelling)
  * [Bucketing](#bucketing)
  * [One-to-many](#one-to-many)
  * [Many-to-many](#many-to-many)
  * [Cloud for data aggregation](#cloud-for-data-aggregation)
  * [Data model for votes and likes](#data-model-for-votes-and-likes)
  * [Access Control](#access-control)
  * [Role based](#role-based)
  * [Access Control List](#access-control-list)
  * [Tree, threaded comments](#tree-threaded-comments)
  * [Social Follows](#social-follows)
  * [Security](#security)
    * [Match](#match)
    * [Allow](#allow)
    * [Condition](#condition)
    * [Check user is logged in](#check-user-is-logged-in)
    * [User with many Todos](#user-with-many-todos)
    * [Functions](#functions)
    * [Get/exists](#getexists)
    * [Chat example](#chat-example)
    * [Roles](#roles)
    * [Unit testing](#unit-testing)
    * [Coverage](#coverage)
  * [Cloud Functions](#cloud-functions)
    * [Auth background functions](#auth-background-functions)
    * [Firestore functions](#firestore-functions)
  * [Storage functions](#storage-functions)
  * [Callable functions](#callable-functions)
* [References](#references)

<!-- vim-markdown-toc -->

Firestore is just like MongoDB.

Document limit is 1MB or 20,000 entries.

## Quickstart

```
npm i -g firebase-tools
firebase login

// cd into project
firebase init
```

https://github.com/lsshawn/firebase-quickstart

## Read multi documents

Firebase will run an array of promises concurrently.

```
const readIds = async (collection, ids) => {
  const reads = ids.map(id => collection.doc(id).get())
  const result = await Promise.all(reads)
  return results.map(v => v.data())
}
```

## Querying

```
const query = db.collection('posts')
  .orderBy('date')
  .limit(20)
  .startAfter(lastWeek) // pagination. Also: startAt, endAt, endBefore
  .where('date', '==', today)
  .where('name', '', 'jeff') // AND. Requires composite index. Only 1 range operator per query.
```

There's no 'not equal' operator. So you need 2 queries: `>` and `<`.

`where(array, 'array-contains', value)` only accepts 1 value.

## Data modelling

How many items in this set?

One-to-few: Embed in document.
One-to-hundreds: Bucketing.
One-to-billions: Collection of individual arthur and books.

## Bucketing

A document in 2 collections: author and tags.

Both documents have the same id.

This is better than 'object reference' in mongoose because you don't need to first query author to get the tag document id.

It's also useful to use bucketing to move out sensitive data in a document.

## One-to-many

You can't query 'published' in an array of maps.

Change books into a subcollection inside author document.

```
// author document
{
  name: '',
  books: [
    {
      title: "Harry",
      published: 1991
    },
    ...
  ]
}
```

If you need to query across multiple parents, e.g. all books published on 1991 from all authors, create a new books collection with 'author' value as the author document id.

Or you can also use collection group query

```
db.collectionGroup('books').where('published', '==', '1974')
```

## Many-to-many

Firestore automatically index keys of a map.

```
// books
{
  review: {
    'shawn-lim': {
      text: 'Loved it'
    }
  }
}

// query
db.collection('books').doc('books').orderBy('reviews.shawn-lim')
```

## Cloud for data aggregation

Use cases:

- Use 'onCreate' to keep track of total sales so you don't have to perform calculation each time.
- Add 'total likes count' in post when a new like document is added.

## Data model for votes and likes

```
// users
{
  _id: 'shawn-lim',
  upvotes: 2208 // cloud function aggregation
}
```

```
// posts
{
  _id: 'cool-post',
  upvotes: 15 // cloud function aggregation
}
```

```
// votes
{
  _id: 'shawn-lim_cool-post',
  value: 1,
  userId: 'shawn-lim',
  postId: 'cool-post'
}
```

## Access Control

## Role based

Good for simple CMS.

The downside is it needs to query user document to get roles each time. 'Custom claim' control access solves this, but you need to use the SDK backend.

```
// user

{
  _id: 'shawn-lim',
  roles: ['admin', 'editor']
}
```

```
// firestore rule

match /posts/{document} {
  function getRoles() {
    return get(/databases/$(database)/documents/users/$(request.auth.uid)).data.roles
  }
  allow read;
  allow update: if getRoles().hasAny(['admin', 'editor']) == true
  allow write: if getRoles().hasAny(['admin']) == true
}

```

## Access Control List

Good for membership, digital products, or Udemy.

```
// posts

{
  _id: 'paid-post',
  members: [
    'shawn-lim',
    'jeff-delaney'
  ]
}
```

```
// firestore

match /posts/{document} {
  allow read;
  allow write: if resource.data.members.hasAny(request.auth.uid);
}
```

You can mix role based and access control.

## Tree, threaded comments

Create composite key to reference parent key.

```
// comments
{
  _id: 'A'
  parent: ''
}

{
  _id: 'B',
  parent: 'A'
  level: 2
}

{
  _id: 'C',
  parent: 'AB',
  level: 3
}
```

```
// js
const topLevel = db.collection('comments').where('parent', '==', '')

const traverseHorizontal = (level) => db.collection('comments').where('level', '==', level)

const traverseDepth = (id) => {
  return db.collection('comments')
    .where('parent', '>=', id)
    .where('parent', '<=', `${id}~`)
}
```

## Social Follows

3 collections: users, posts, and followers.

Followers contains duplicated data to reduce queries.

```
//followers

{
  _id: 'mark-zuckerberg',
  followers: ['shawn-lim'],
  lastPost: ,// timestamp of last post
  recentPosts: [
    {
      postId: , // all duplicated from post collection
      published: ,
      title: ''
    }
  ]
}
```

```
// js
getFeed = async() => {
  const followedUsers = await db.collection('followers')
    .where('users', 'array-contains', 'shawn-lim')
    .orderBy('lastPost', 'desc')
    .limit(10)
    .get()

  const data = followedUsers.docs.map(doc => doc.data())

  const posts = data.reduce((acc, curr) => arr.concat(curr.recentPosts), [])

  const sortedPosts = posts.sort((a, b) => b.published)

  return sortedPosts
}
```

## Security

Course: https://send.cm/s/4MN/Firebase_Security_Course

Git: https://github.com/fireship-io/firebase-security-course

After making changes to local `firestore.rules`, you can push live with `firestore deploy --only firestore:rules`

### Match

Adding `=**` will apply condition to all subcollections. Or else it'll only apply to parent.

```
match /users/{docId=**} {
```

### Allow

Syntax: `allow read, write: if docId == 'something';`

Rarely use 'write' because it's too broad. Use `allow create, update, delete`.

Write minimum allows. Rules look for the **first** allow and you can't disallow it anywhere else.

### Condition

Default condition is `allow <what>: if false;`

`request.auth`: current user info
`request.resource`: data payload when writing to DB.
`request.time`: timestamp
`request.method`: read, create,...
`request.path`: path to database

The `resource` is DB document.

A common practice is to check document username is same with incoming changes.

```
allow write: if request.resource.data.username == resource.data.username;
```

### Check user is logged in

Best for one-to-one relationship.

```
match /users/{userId} {
  allow read: if request.auth.uid != null;
  // only write to own user document
  allow write: if request.auth.uid == userId;
}
```

### User with many Todos

```
match /todos/{docId} {
  // only published todos are readable
  allow read: if resource.data.status == 'published';

  // only can write to own todos
  // and ensure timestamp is not spoofed.
  allow create: if request.auth.uid == resource.data.uid
                && request.time == request.resource.data.createAt;

  // allow update of certain fields
  allow update: if request.auth.uid == resource.data.uid
                && request.resource.data.keys().hasOnly(['text', 'status'])
}
```

### Functions

Limited to 10 function calls in a function.

```
function isLoggedIn() {
  return request.auth.uid != null;
}

function belongsTo(userId) {
  return request.auth.uid == userId || request.auth.uid == resource.data.uid
}

function canCreateTodo() {
  let uid = request.auth.uid;
  let hasValidTimestamp = request.time == request.resource.data.createAt;

  return belongsTo(uid) && hasValidTimestamp;
}

match /users/{userId} {
  allow read: if isLoggedIn()
  // only write to own user document
  allow write: if belongsTo(userId)
}

match /todos/{docId} {
  allow update: if belongsTo(docId)
                && request.resource.data.keys().hasOnly(['text', 'status'])
}
```

### Get/exists

`exists(path)` and `get(path)` lets you check for condition in another document.

These will query your database, so use them sparingly and short-circuit them.

Example:

Read: must have profile.
Write: must be admin.

```
function hasProfile(uid) {
  return exists(/databases/$(database)/documents/users/$(request.auth.uid))
}

function isAdmin(uid) {
  const profile = get()/databases/$(database)/documents/users/$(uid))
  return profile.data.admin == true
}

match /todos/{docId} {
  allow create: if isLoggedIn()
                && hasProfile(request.auth.uid)

  allow delete: if isLoggedIn()
                && isAdmin(request.auth.uid)
}
```

### Chat example

Model

```
// users

{
  _id: firebase auth id
  msgCount: number
}

// messages
{
  createAt
  photoURL
  text
  uid: user._id
}

// banned
{
  _id: user._id
}
```

Rules

```
match /databases/{database}/documents {
  // ensure entire database is locked down first
  match /{document=**} {
    allow read, write: if false;
  }

  match /messages/{docId} {
    allow read: if isLoggedIn();
    allow create: if canCreateMessage();
  }

  function canCreateMessage() {
    let isOwner = request.auth.uid === request.resource.data.uid;
    let isNotTooLong = request.resource.data.text.size() < 255;
    let isNow = request.time == request.resource.data.createAt;
    let isNotBanned = exists(/databases/$(database)/documents/banned/$(request.auth.uid)) == false

    return isSignedIn && isOwner && isNotTooLong && isNow && isNotBanned;
  }
}
```

### Roles

Model

```
// ensure user is not able to modify this
users {
  roles: [string]
}

posts {
  content: string
  createdAt
  published: boolean
  uid: user._id
}
```

Roles

```
match /users/{userId} {
  allow read: if isSignedIn();
  allow update, delete: if hasAnyRole(['admin']);

  // don't need create because we're using Cloud Function
}

match /posts/{postId} {
  allow read: if (isSignedIn() && resource.data.published == 'true') || hasAnyRole(['admin']);
  allow create: if isValidNewPost() && hasAnyRole(['admin']);
  allow update: if isValidUpdatedPost() && hasAnyRole(['author', 'editor', 'admin']);
  allow delete: if hasAnyRole(['admin'])
}

function isSignedIn() {
  return request.auth != null;
}

function hasAnyRole(roles) {
  return isSignedIn() && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.roles.hasAny(roles)
}

function isValidNewPost() {
  let post = request.resource.data;
  let isOwner = post.uid == request.auth.uid;
  let isNow = request.time == request.resource.data.createdAt;
  // validate in front-end too
  let hasRequiredFields = post.keys().hasAll(['content', 'uid', 'createAt', 'published']);

  return isOwner && hasRequiredFields && isNow;
}

function isValidUpdatedPost() {
    let post = rquest.resource.data;
    let hasRequiredFields = post.keys().hasAny(['content', 'updatedAt', 'published']);
    let isValidContent = post.content is string && post.content.size() < 5000;

    return hasRequiredFields && isValidContent;
}
```

### Unit testing

Write your test description with 'deny' or 'allow'.

2 files:

- tests/rules.test.js
- tests/helpers.js

Install `npm i -D jest @firebase/rules-unit-testing`.

Add this to your `package.json`:

```
"scripts": {
  ...
  "test": "jest --env=node"
}
```

```
// helpers.js

const { loadFirestoreRules, initializeTestApp, clearFirestoreData, initializeAdminApp } = require('@firebase/rules-unit-testing');
const { readFileSync } = require('fs');

// create database instance, load rules and populate mock data

module.exports.setup = async(auth, data) => {
  const projectId = 'fireship-dev-17429';
  const app = initializeTestApp({
    projectId,
    auth
  })

  const db = app.firestore();

  // mock data before rules
  if (data) {
    const admin = initializeAdminApp({
      projectId
    })

    for (const key in data) {
      const ref = admin.firestore().doc(key);
      await ref.set(data[key]);
    }
  }

  // apply rules
  await loadFirestoreRules({
    projectId,
    rules: readFileSync('firestore.rules', 'utf8')
  })

  return db
}

// delete the app after test is finished

module.exports.teardown = async() => {
  Promise.all(firebase.apps().map(app => app.delete()));
  await clearFirestoreData()
}
```

Run `firebase emulators:start`.

```
// rules.test.js

const { assertFails, assertSucceds } = require('@firebase/rules-unit-testing');
const { setup, teardown } = require('./helpers');

const mockUser = {
  uid: 'bob'
}

const mockData = {
  'users/bob': {
    roles: ['admin']
  },
  'posts/abc': {
    content: 'hello world',
    uid: 'alice', // belongs to another user
    createdAt: null,
    published: false
  }
}

describe('Database rules', () => {
  let db;

  // applies only to test in this describe block
  beforeAll(async () => {
    db = await setup(mockUser, mockData);
  })

  afterAll(() => {
    await teardown()
  })

  test('deny when reading an unauthorized collection', async () => {
    const ref = db.collection('secret-collection');

    expect(await assertFails(ref.get()));
  });

  test('allow admin to read unpublished post', async() => {
    const ref = db.doc('posts/abc');

    expect(await assertSucceeds(ref.get()));
  });

  test('allow admin to update posts of other users', async() => {
    const ref = db.doc('posts/abc');

    // this will change published to 'true',
    // so ensure it'll not affect tests below
    expect(
      await assertSucceeds(ref.update({ published: true }))
    )
  });
})
```

### Coverage

Isolate problematic test by running the test only with `test.only`.

Then access the coverage report at `localhost:8080/emulator/v1/projects/<project-ID>:ruleCoverage.html`.

## Cloud Functions

- 540 seconds limit
- background functions are turned off after 30 days of inactivity
- refactor invocation of database outside of functions to reduce running time.

You'll need to enable billing to connect to non-Google APIs.

You can use Google Cloud Platform (GCP) to view code and send test requests.

Cloud functions is based on 'express.js'

Use `firebase init` and add `functions and hosting`.

Git: https://github.com/lsshawn/cloud-functions-master-course
Course: https://fireship.io/courses/cloud-functions/storage-resizer/

Debug locally with `npm run serve` in /functions folder.

To use 'express.js', run `npm install express cors` inside /functions folder. Remember to import cors

```
import * as cors from 'cors';
const app = express();
app.use(cors({ origin: true }));
```

Then to run Hosting and Functions, run 'firebase serve' in /functions folder.

### Auth background functions

Test locally with `npm run shell`.

Remember to get service account json in Firebase 'Settings > Service Account'.

### Firestore functions

Functions: onCreate, onDelete, onUpdate, onWrite

Be aware of `onUpdate` infinite loop.

## Storage functions

You can't scope functions to a specific folder. Solve this by creating a separate bucket.

Install GCP service:

```
npm i @google-cloud/storage

import * as Storage from '@google-cloud/storage'
const gcs = Storage()
```

Make everything promise based. Use `fs-extra`.
Use `sharp` instead of built-in image-magick.

Check for filename to prevent infinite loop.

## Callable functions

Able to authenticate user before sending to external API.

# References

Data modeling: https://send.cm/s/17O/Firestore_Queries_and_Data_Modeling
Cloud functions: https://send.cm/s/17N/Cloud_Functions_Master_Course

Security: https://send.cm/s/4MN/Firebase_Security_Course
