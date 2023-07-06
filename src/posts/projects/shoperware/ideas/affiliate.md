---
title: "Shoperware Affiliate"
---

# Reward system

- 100% commission of the first month cost of any monthly plan.
- 15% commission on all annual plans
- 90 days cookies on your link tracking

Commissions are finalized 14 days after every sale because our refund policy is 14 days.

Monthly payout, after 15th of every month.

# Code

Each 'User' document will have these new objects:

```
User {
  referredBy: String
  dateReferred: Date
  referralPayoutDate: Date
  affiliateId: String // Unique
  affiliateJoinDate: Date
}
```

On Stripe payment, no need to do anything.

On 15th of every month, we need to generate referral payout. Here's the step:

- Get users who:

  - has `subscriptionDate` after 15th of last month. (TOCHECK: Does recurring payment in Stripe updates `subscriptionDate` in DB?)
  - AND has referral

- Referral commission is confirmed if:

  - `dateReferred <= subscriptionDate - 30 days`
  - AND not refunded
  - AND `subscriptionDate + 14 days > today`

- If confirmed, set `referralPayoutDate` to today

# App page

Example link: https://shoperware.com/?refer=alan20

## Affiliate page

1. /affiliate/register/

- affiliate name or business name
- affiliate id (e.g. alan, alan20)
- bank account number
- bank name (dropdown)
- agreement checkbox

2. /affiliate

- url example.
- edit bank account number.
- referred accounts:

# Cookie tracking

In shoperware.com and app.shoperware.com, if URL query parameter has 'refer', set to localStorage and Cookie.

Make sure we pass it to Auth0 and back to app.

When customer sign-up/login, in the server, change `referredBy` and `referredDate` to this cookie.
