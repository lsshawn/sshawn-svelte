---
title: "Third Idea Tech Stack"
---

## Technology Stack

Chatbot server: DigitalOcean, hosted in Amazon AWS Singapore region.
API: Amazon AWS Serverless in N. Virginia region.
Database: MongoDB Atlas, hosted in Amazon AWS N. Virginia region.
Login authentication: Auth0

Programming language used: Javascript, Vue.js, Node.js, GraphQL, MongoDB Query Language, Botkit

## Simultaneous user capacity

The technology stack was built to scale from day one.

The current tier of all our technologies should support up to 500 concurrent users.

When we reach a user sign-up milestone, we can easily upgrade to the next tiers to accommodate increased usage.

## Security set-up

We use Auth0 for log-in authentication and authorization. We do not store user passwords in our database.

Additionally, our Third Idea API has another layer to check if the logged-in user is authenticated to view or edit information.

## Usage analytics

We capture all log-in attempts and messages in our database.

Currently we don't have a dashboard to view user analytics. But these data can be queried in the database console.
