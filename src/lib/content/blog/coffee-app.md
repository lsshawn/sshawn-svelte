---
title: Your first time ordering coffee in Singapore?
subtitle: A minimalist coffee ordering app
date: '2018-07-30'
category: 'One day build'
summary: I created this app to take coffee orders on my last day at work. What's Siu Dai? What's O and C? I thought it'll be a great idea for foreigners to order coffee the local way too.
featuredImage: https://res.cloudinary.com/cupbots/image/upload/c_scale,w_608/v1532872044/coffee-app-cover.webm
veadMore: true
---

_Kopi C Siu Dai Ping_

_Teh O Kosong_

I created this app to take coffee orders on my last day at work.

I thought it'll be a great idea for foreigners to order coffee the local way too.

During my first year in Singapore, taking tea-time orders was confusing.

Instead of importing a foreign word like 'latte', we decided to **mix Hokkien, Chinese, Malay, and English**.

What's Siu Dai?

What's O and C?

Yet, it was music to my ears.

Sit in front of a coffee stall and watch people ordering. Any sign generation gap disappear at that moment.

![App main page](https://res.cloudinary.com/cupbots/image/upload/c_scale,w_608/v1532871634/coffee-app-main.webm)

## All the possible combinations

The process started by writing out all the possibilities. Ice, milk, different type of milk...

To maintain a minimalist design, I've used only buttons to build your coffee.

The animation and color changes are intuitive to show what each button does.

To help foreigners, I've created a button at the bottom which translates all the buttons from Singlish to English.

![Singlish to English](https://res.cloudinary.com/cupbots/image/upload/v1532871634/coffee-app-english.png)

## Where do I store your order? AirTable

![Place your order](https://res.cloudinary.com/cupbots/image/upload/v1532871634/coffee-app-order.gif)

Through my experience of prototyping, AirTable is a joy to use as a database. It's free for up to 1,000 rows and **it looks like Excel**.

You can copy & paste from your Excel. A data entry assistant can work on it without any knowledge of database.

The part I like most is the ability to read or write to the database via API, i.e. developer friendly.

In this coffee app, I've created a 'confirmation screen' that asks for your name. And the 'Place Order' button triggers a POST request via the AirTable API that looks something like this:

`https://api.airtable.com/v0/app_id/sheet_name`

![AirTable database for coffee app](https://res.cloudinary.com/cupbots/image/upload/v1532871634/airtable-coffee.png)

## What would I improve on

A specialized take-away coffee shop would be keen in using this minimalist ordering concept.

This would require a functionality to notify users that their coffee is ready for collection. A chatbot would be a good way to notify users.

The coffee cup could have been drawn to resemble a local coffee cup. I would also love to see the cup change when I select iced coffee.

In production, there would be more drinks on the menu. A separate screen would work for non-coffee or tea orders.

On the database side, we'd log more information e.g. time of order, time completed, and user contact.

## Tech Stack

Front-end: Vue.js

Back-end: AirTable as database
