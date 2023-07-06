---
title: "Shoperware"
---


# Customer profile

Customers who are not my target market:

- has a
- has a
- example: Spritzer, Fipper

My target market are:

- people who wants to know the market trend to produce or sell (example: furniture factory, glove supplier)
- dropship or white-label products. These customers can act on

# small niche with low competition

- Total monthly sales for top-twenty listings will be in the region of £10k to £30k;
- 90% of the top-twenty listings will have less than 50 to 100 reviews, with many having just 10 or 20 reviews.

Source: https://andrewminalto.com/amazon-fba-success-2020/

# sendfox

User sign up - shoperware free users
User paid - shoperware paid users

# tour model

We need a tour database to store what tours have a user viewed.

Tour model

TourName: String
Viewed Users: [{
userId: ID
date: Date
}]

On every component mounted, we'll pull the list of tours.

If user ID is not in `viewedUsers`, show tour.

Code tour logic in UI.

## UI

Buttons: Previous, Next, Skip and never show me again, Skip for now and show me next time, Finish (on last step)

If user clicked on:

- skip and never show me again
- finish

PUT tour model to add User ID to ViewedUsers array.

# product research

Instead of giving stats, give a narrative:

You can make \$_ monthly, selling _

# articles to write

- how can product research helps you validate opportunities to sell?
- how can tracker helps you stay competitive?

# Duplicate items

A keyword search page will have 50 items.

An item can appear twice in a page because it can be an ads and organic listing.

I've coded the `scraper_traker.py` to process all duplicates but I'll handle the duplicates. I'll return the item page and order to logs but will not create another item document.

# pricing

basic:

- monthly: RM 49
- annually (save 20%): RM 470 (equals to RM 39 a month)
-

Suite

- monthly RM 199
- annually (save 20%): rm1900

pro:

- monthly: RM 590
- annually (save 20%): RM 5700 (equals to RM 475 a month)
-

# find trending products

- weekly rank products by units sold in each category.
  weekly units sold = sold now - sold 7 days ago
- calculate momentum using % change vs a week ago.
  weekly momentum = weekly units sold / sold 7 days ago - 1
- highest momentum to get trending products.

# categorize variation to show total units sold and average price

- ml, variation, brand
- for uncategorised, need to consider if text includes the string. If not create new group.

# Database to frontend

Options:

- send full time series and let UI aggregate
- send only the calculated results.

# demo tracker

### Day summary:

Shop has:

- listed X new product
- changed X product prices
- stock changes in X products

A table of products:

Time series stats: views, stock, price_min, price_max, review_count, item name, listing, images, listed date

- Daily, weekly, monthly and total period changes in \$ and %.

# Roadmap

Now:

- Tracker - competitor, keyword, brand.
- Cron job to get all trackers and run scraper.
- store scraped data into DB.

Future:

- Save product research searches
- Show history of product research
- Save filters and table preferences to User.

# Database model

Entities:

## User

```
email: String
```

## Product

```
name: String
id: String
seller: { ref: Seller }
shopId: String
canUseWholesale: Boolean
location: String
brand: String
material: String
color: String
type: String
size: String
isPreferred: Boolean
isOfficialShop: Boolean

```

## Product Time Series (weekly grouped)

```
productId: Ref Product
timeSeries: [
  bundleDeal: String
  freeShipping: Boolean
  upcomingFlashSale:
  date: Date,
  description: String,
  customizedOverlayImage: String # URL
  category: String
  pictures: [String]
  favorite: Int
  stock: Int
  sold: Int
  sold30Days: Int
  rating: Int # out of 5
  ratingBreakdown: [Object]
  variation: [String] # OR object of 'name' and 'picture'
  shippingFee: [Object] # of company and price
  basePrice:
  discountDollar:
  addOnDeals: [Object of partial product]
  keywordRank: [
    {
      term: String,
      category: String,
      isAd: Boolean,
      rank: Int
      sortBy: [relevance, latest, top sales]
    },
  ]
]
```

## Seller

```
name: String
id: String
avatar: String
```

## Seller Time Series (weekly aggregate)

```
seller: Ref Seller
year: Int
week: Int # 1 to 52
timeSeries: [
  {
    date: Date,
    products: Int
    following: Int
    followers: Int
    chatPerformance: Int
    cancellationRate: Int
    rating: Float
    ratingCount: Float
    vouchers: [
      {
        name: String
        validTill: Date
      }
    ]
  }
]
```

## Keyword Time Series (weekly aggregate)

```
keyword: String
productsCount: Int
adsCount: Int
```
