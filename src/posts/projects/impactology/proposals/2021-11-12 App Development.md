<!-- vim-markdown-toc GFM -->

* [Objective](#objective)
* [Architecture Summary](#architecture-summary)
* [Web App](#web-app)
* [User Login and Authentication](#user-login-and-authentication)
* [Database in MongoDB](#database-in-mongodb)
* [Workflow Database in Airtable](#workflow-database-in-airtable)
* [API](#api)
* [Domain and Hosting](#domain-and-hosting)
* [Tech stack summary](#tech-stack-summary)
* [Future Features](#future-features)
  * [Improving search results with Dialog Flow](#improving-search-results-with-dialog-flow)
  * [Analyzing user history](#analyzing-user-history)
  * [Accepting payment](#accepting-payment)
  * [Automated emails](#automated-emails)
  * [Native apps (Android and iOS)](#native-apps-android-and-ios)
  * [Landing page](#landing-page)

<!-- vim-markdown-toc -->

# Objective

The objective is to rebuild Third Idea app into a screen-based interface that provides advice to impact 5 stakeholders.

We can reuse some of the back-end code. But the front-end is a complete rebuild because we're replacing the technology stack for the chatbot.

The workflow for each stakeholder will be a mix of new and old data. We'll restructure it so that it's more intuitive for you to edit.

# Architecture Summary

I will explain the purpose of each feature in your web app. The estimated build time is 2 months.

| Feature                       | Fee (U$) |
|-------------------------------|---------:|
| Web App 9 pages               |    15000 |
| User login                    |      500 |
| Database in MongoDB           |     1000 |
| Workflow database in Airtable |     2000 |
| API                           |      500 |
| Total                         |  19000.0 |
%% tmf: $6,2=Sum(1:-1)

# Web App

Your web app consists of these 9 pages:
1. User login
2. User profile
3. User search history and favourite searches
4. Home page that asks which stakeholder to help.
5. Five workflow questionnaire, one question per screen
6. Search page for 'Yourself and 'Your Team' workflows
7. Company admin page to manage members
8. Reminders
9. FAQs

It'll be a complete redesign for your screen-based interface. This time, we'll give equal emphasis on desktop and mobile layout. I offer unlimited changes to all pages during development.

I'll still use Vue.js framework for your user interface. Vue.js is used by corporations like Facebook to develop modern web-apps that can scale easily.

Tech stack: Javascript, Vue.js

# User Login and Authentication

We can reuse Auth0 to authenticate user logins, but the version in your app in outdated.

I'll need to upgrade it to allow your users to login with:
    - Facebook
    - Google
    - Linked
    - Email with password

Third-party provider: Auth0 ([auth0.com](https://auth0.com))

Third-party fee: Free for 7000 monthly active users (https://auth0.com/pricing/)

# Database in MongoDB

Third Idea will use MongoDB cloud database to store three data:
1. User profile
2. User search history
3. User favourite searches

I'll start a new database because the chat history is different from this screen-based workflow.

Your MongoDB account is still on the free tier. After your web app gain traction, I recommend upgrading to a paid tier because you'll get the backup feature.

Third-party provider: MongoDB ([mongodb.com](https://mongodb.com))

Third-party fee: Free for up to 500MB of storage. ([mongodb.com/pricing](https://mongodb.com/pricing))

Tech stack: NoSQL, Javascript

# Workflow Database in Airtable

We'll continue to use Airtable because it easier to iterate.

I'd prefer to create new tables for this project instead of editing the existing tables.

I'm taking this opportunity to restructure the table linkage so that it's easier for you to maintain.

[Airtable sample](https://i.imgur.com/gB3sUNV.png)

Third-party provider: Airtable (http://airtable.com)

Third-party fee: Jeremy is subscribed to the Plus plan, which is U$10 per user per month. We'll continue to use that account.

# API

We still need an API to control user rights and allow your app to talk to your database.

Third Idea has an existing API hosted on Amazon AWS.

I'll expand the codes to fit the new user profile and store user search history.

Third-party provider: Amazon AWS

Third-party fee: Pay-per-use. Typically less than U$5 per month in your early stage.

Tech stack: Javascript, GraphQL

# Domain and Hosting

Your web app will remain at 'https://app.third-idea.com', hosted on Netlify free tier.

During the development phase, I'll use a temporary URL so that we can use the app and collect feedback.

All source codes will be shared with you via Github repositories.

Third-party provider: Netlify

Third-party fee: Free. U$19 if daily traffic increases to few thousands.

# Tech stack summary

| Service       | Purpose                      | Estimated monthly fee for 100 users (U$) | Estimated monthly fee for 5000 users (U$) |
|---------------|------------------------------|------------------------------------------|-------------------------------------------|
| Auth0         | User authentication          | Free                                     | Free                                      |
| Airtable      | Workflow database            | 10 per user                              | 10 per user                               |
| MongoDB       | Database                     | Free                                     | 9 to 25                                   |
| Amazon AWS    | API                          | 5                                        | 20                                        |
| Digital Ocean | Server to schedule reminders | 5                                        | 10                                        |
| Netlify       | Web app hosting              | Free                                     | Free or $19 if has large daily traffic    |

We can continue to use existing Third Idea accounts on these platforms.

There's no monthly maintenance fee after this project is finished. I'll include a 3 months warranty to fix any bugs.

New features and requirement changes will be charged separately.

# Future Features

There's no monthly maintenance fee after this project is finished. I'll include a 3 months warranty to fix any bugs.

New features and requirement changes will be charged separately. Here are some features that you may want in the future:

## Improving search results with Dialog Flow

The search page is only accessible in the 'Yourself' and 'Your team' workflows.

I see it as a search and discovery search engine. It's powered by Google Dialog Flow to predict users' intent.

To use it on other workflows, we'll need to:
1. Import new intents with their variations.
2. Link intents in DialogFlow and Airtable.
3. Code a way to store user searches and to improve predictability.

There's room to improve the search results when you have more users using this search feature.

## Analyzing user history

There may be cases where users didn't finish a workflow.

Or a large number of users abandoning the workflow at a particular screen.

Analyzing user interaction history will help you to uncover and fix these problems.

It can also help you to:
- uncover possible relationship between user profile and desired impact
- analyze usefulness of suggestions

## Accepting payment

It's possible to accept payment in the future. Subscription, one-time or lifetime. I recommend Stripe to process payment.

## Automated emails

The existing Third Idea email reminders are triggered via chat.

With this screen-based interface, we'll need a new way to trigger the email scheduler.

We'll need to consider edge cases where users return to an earlier screen to change their answer. I suggest to fix this after the workflow interfaces are complete.

## Native apps (Android and iOS)

It requires effort to build native apps and maintain them. We'll need to push updates and test on 3 platforms. It's best to remain as a web app for now because it's faster to iterate.

With Progressive Web App (PWA) technology today, your web app can look and function like a native app without installation. Your app can access GPS, use the phone camera, and push notifications.

[PWA vs Native](https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/1DKtUFjXLJbiiruKA9P1.svg)

## Landing page

Users visiting https://app.third-idea.com will see the login page if they are not logged-in.

If they are logged-in, they'll see the main page asking them to select which stakeholder they want to help.

There's no landing page to promote your app features at the moment.
