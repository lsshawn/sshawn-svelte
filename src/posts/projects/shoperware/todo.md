---
title: Shoperware TODO
---

<!-- vim-markdown-toc GFM -->

* [doing](#doing)
* [todo](#todo)
* [done](#done)

<!-- vim-markdown-toc -->

# doing
- create coupon for clients
- write content on keyword recommender and opportunity score
- contact ws poon to see what she thinks on the tracker. And how is she using the tracker.
- write ideas on making data actionable

# todo

- for each document check the description at the start of the week. If has changes, only add to document. This saves memory.
- delete itemid and shopid from each product date
- hot sales items on shop (https://shopee.com.my/api/v2/shop/get_hot_sales?limit=8&offset=0&shopid=23083279)
- 9pm shopee search volume updates. Cron job without crashing server.
- cron tracker.py keeps shutting down splash in production server
- clean up DB for Keywords.data that doesnt' have date
- exclude [Not for Sale] in trend
- listing quality score.
- A 'health monitor' for user shop. Monitors:
- rank of each item keyword, sorted by 'popularity'.
- below or above average price
- 'shop search' feature to quickly get sales summary and top products of a shop
- Save product research and let user combine multiple saved searches to view in a table
- sourcing information from taobao/1688.
- use like count as a leading indicator of trend?
- if product is missing date, it'll show negative in daily sold.
- find 10 pages in product research
- brand tracker
- stream data with socket
- [UI: product research] sales by variation
- [UI: product research] sales by weight
- what's causing the long load time when going to tracker page?
- [Stripe backend] cancel yearly will refund unused months.

# done

- 2021-01-25 opportunity score
- 2021-01-21 keyword recommender
- 2021-01-21 keyword tracker. Tracks search volume and price changes daily
- 2021-01-20 [search trend] crontab schedule update Shopee cookie every 8 hours.
- 2021-01-20 [search trend] crontab schedule get keyword search volume every day
- 2021-01-20 [search trend] UI add chart for trend
- 2021-01-14 Export as CSV for product research
- 2021-01-16 [Product research] price slider filter
- 2021-01-15 [Tracker] top 10 selling products and store stats
- 2021-01-15 Individual tracker in a child page
- 2021-01-15 Tracker shows shop sales and top 10 products
- 2021-01-15 resets product research filters on new search
- 2021-01-15 beta sourcing in product research
- alert when prod server is down
- facebook and google event on purchase
- stripe testing:
  - [x] cancel will change DB user.tier to 'free'
  - [] 30 days money back guarantee
  - [x] upgrade plan will prorate
  - [x] upgrade plan to yearly will prorate
- add new user to sendfox email list
- test auto-login to app if logged in
- fix `i is undefined` in product research UI
- 2020-11-27 share feature in landing page
  - Need work on SVG
- load test on server with 10 simultaneous product research
  - Fails on 20 requests. Returns empty array in items
- load test on server with 10 simultaneous product research and cron running
- 2020-11-27 cron in server. Cron seems to crash splash and not getting the correct number of items.
  - Set max concurrent to 3. Was due exceeding 1.5 GB memory and it auto quits.
- 2020-11-27 move demo.json to server and create an API
- app.shoperware for app, shoperware for landing page and blog maybe?
- blog site with cms
- [UI] card view to replace table in mobile
- [UI] use breakpoint to set card view on mobile by default
- [UI: product research] sort variation.
- set production to use prod db
- scrape_tracker works for shop
- category filter works in tracker
- category filter only for product keyword
- fix demo price max and min / 1e5
- top 10/bottom 10 of each view
- fix footer floating in mobile
