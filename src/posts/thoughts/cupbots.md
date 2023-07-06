- fb referral to trigger ecommerce
- ecommerce__{product: productCode}
- branch
- add service to booking confirmation?

Branch

Ideally business should use different gcal for each branch.

Concurrent service needs to check branch too, in addition to checking service name. Add branch id and name into prebooking payload.

Ask branch at the start of every make booking intent.

Operating hour needs to check branch hours.

Add branch to gcal details.




Askservice purpose is to ask services or services.

Don't worry about 

# 2020-06-10 public GUID create conversation?

There's no conversation created for GUID users.

And there's a bug where it loads for wrong company.

Should I create a new conversation for GUID users? 

This will allow:
- company to view chat history
- history load properly

I'll need to set conversation participants as `string` instead of `user` reference type.

It's useless to reply to that conversation because GUID may change.

# 2020-06-03

Calendar booking: If customer book for 3 pets, should I show 3 separate events in Gcal?

Or show 1 event with metadata about the number of pax?

I think the second choice is cleaner because a user looking at the calendar have to count the number of events.

There's less risk of hitting Gcal rate limit when deleting multiple events.

But what about events that has a break in between? You'll still need to create 2 Gcal event for that.


# 2020-05-31 Customer success metric

Mins saved from replying
Conversion from ecom or booking.


# 2020-05-26 ecommerce chatbot for live streamers

What to build:

### front end:
- inventory management data table
- order management to show order receive, processed, shipped and paid. Seller can manually mark orders.
- parameters:
  - payment bank details
  - flow template?

### back end:
- CRUD API for inventory management
- CRUD API for order management

Markdown:

```
// E-commerce chatbot

// Target audience: 

// Individual sellers who sell on Facebook or Instagram live and have to process order manually. They manage their inventory using spreadsheet and have a person to respond to order request via chat.

// What problems are we solving: 

// It's a hassle to repetitively reply each chat, check stock quantity and send bank details. That's why these streamers usually have to hire a person behind the scene to assist them. This chatbot can help sellers to process orders automatically so that they can focus on marketing in the live stream. 

// How to trigger this chatbot:

// When a potential buyer clicks on a link provided by the seller, we'll start this message flow in Facebook Messenger. For live streaming seller, a place to put this link is in the video description. 

// I'll build a simple order management system (OMS) in my app. This will allow the seller to manage stocks and view orders.

# default
- Please type the product code you'd like to buy
-- MZ101
: product

# test - generic
=== generic
title: Limited Edition Japan Starbucks mug
subtitle: Starbucks Daruma mug 2018 edition
image: https://sociorocketnewsen.files.wordpress.com/2018/12/Starbucks-Japan-NYE-New-Year-Years-goods-cups-mugs-drinkware-limited-edition-range-Japanese-traditions-daruma-Mt-Fuji-cute-kawaii-2018-2019-3.png
- Is this the correct product?
[Yes]: yes
[No]: no

-- Yes

- How many would you like to purchase?
-- 10
- Please wait a moment while I check stock availability...
- Yes, we have stock for 10.
- Before we proceed to payment, we need to get shipping details from you.
- What's the name of the recipient?
-- Robert Lyneth
- And your shipping address?
-- 45 Matai Street, 41050
- And your phone number for the courier to contact you in case of delivery problems?
-- 0169301222
- Thanks. Here's our payment detail:
Bank: Maybank
Account name: Cupbots
Account number: 12345678
Amount: $70
Reference: A0103

- Please click the button below once you've transferred
<I've paid>: Paid

// In my backend, this will reduce the quantity available for that company's product. We want to 'block' the quantity to prevent over-purchasing. We can let sellers to set an expiration time, e.g. if payment isn't received 2 days later, the quantity will be added back automatically.

# paid
-- I've paid
- Thanks! We'll let you know once we received the funds.

// Sellers will manually check with their bank. Once payment received, company will go to the OMS to mark an order as 'paid'. Then the bot will auto-reply the below to customers:

- Your payment has been received.
- We'll ship out your order in the next 3 days.

// Future roadmaps can include features like order tracking and asking for product review.
```

#2020-05-11 How can Bravo help?

- What are some common bots your clients ask you to build? FAQ?
- Any specific industry your chatbot prospects are?
- What are some biggest problem you face when developing chatbots?

# 2020-03-10 helpscout html beacon code

<script type = "text/javascript"> ! function(e, t, n) {
    function a() {
        var e = t.getElementsByTagName("script")[0],
            n = t.createElement("script");
        n.type = "text/javascript", n.async = !0, n.src = "https://beacon-v2.helpscout.net", e.parentNode.insertBefore(n, e)
    }
    if (e.Beacon = n = function(t, n, a) {
            e.Beacon.readyQueue.push({
                method: t,
                options: n,
                data: a
            })
        }, n.readyQueue = [], "complete" === t.readyState) return a();
    e.attachEvent ? e.attachEvent("onload", a) : e.addEventListener("load", a, !1)
}(window, document, window.Beacon || function() {}); <
/script>

<script type="text/javascript">window.Beacon('init', 'd873bd7e-adc1-493d-b3dd-151f45810991')</script>

# 2020-03-06 todo
- [] API to find captions with params youtubeId & text to find
- [] UI to display youtube video and found captions
- [] Generic list UI to show found captions

# 2020-03-06 youtuber list captions

If I rely on FB carousel, I can only show 3 captions at a time.

How do I show all captions?

Do I create a Cupbots UI?

[video image]
title
[button: watch video] -> youtube
[button: see all captions] -> cupbots.com 

GET videos without captions on messenger.

GET videos with captions in webpage. Slow?

# focus on youtube chatbot or odit?

Odit will take 3 months to develop. That means a lost of income for the next 3 months.

If i take 1 week to develop my pitch for YouTube skill, I can start marketing to youtubers while working on Odit.

Goal: 10 customers paying RM10 a month.
