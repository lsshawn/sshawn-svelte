# Smart Portfolio - Robert Carver
:portfolio-construction:investing:



Use geometric mean for averaging return.

`Geometric mean ≈ arithmetic mean - (variance of return / 2)`

Avoid currency hedging because it's costly with little benefit.

Portfolio optimization is dangerous and should only be for academics.

# ETF

Avoid leveraged ETF. It's only good for short-term tactical bets. 

Avoid low-risk assets like short term bonds because they have lower returns and it's a poor use of cash. Choose bonds with minimum 5-years of maturity.

Stick to market-weighted ETF.

Only consider
- equal-weighted ETF if it's 0.3% cheaper
- capped ETF if it's 0.1% cheaper 

```
Minimum investment per fund to avoid brokerage fee eating into profit
= $300 * (brokerage fee in dollar)
```
Focus on buying the most diversified portfolio because it's impossible to predict risk-adjusted return from historical prices.

Work out cash weights after estimating volatility.

Risk tolerance:
1. Low
2. Medium
3. Brave
4. Leveraged

# Handcraft portfolio

![Image overview handcraft portfolio](../assets/images/handcraft-portfolio-overview.jpg)

Bonds weight for risk tolerance
1. No limit
2. Max 30%
3. Max 10%
4. No limit

Recommended:
1. Global equities: VT, VWRL. Avoid HSBC because it doesn't have emerging markets.
2. Global bonds: IGOV, IGOV, CORP. XBAG excludes high yield. Consider active funds like RIGS.

# Alternatives

Alternatives weight should be below 25% because:
1. Risk are less well-behaved.
2. ETFs are expensive.

3 groups of alts:
1. Genuine alts
2. Equity-like alts
3. Bond-like alts

## Genuine alts

Two groups:
1. Insurance-like alts
- Negatively correlated with bonds and equities.
- Normally has negative expected returns.
- Gold, precious metals, long volatility (VXX), long puts, short biased funds, insurance currencies like CHF, JPY, and USD.

2. Standalone
- CTA
- Macro hedge funds

Suggested weights:
![Image suggested alt weights](../assets/handcraft-alts-weights.jpg)

## Equity-like alts

- Private equity and venture capital
- Real estate
- Commodities excluding precious metals
- Most hedge fund strategies (any funds that lost money in 2008)

You'll lose money buying commodity ETFs that are in contango, e.g. USO. You can be have a strategy to switch between futures and ETF based on level of contango (refer Carry strategy in Systematic Trading).

Avoid inverse ETF like IVOP.

Suggested weights:
![Image of suggested weights for equity-like alt](../assets/images/handcraft-equity-alts-weights.jpg)

## Bond-like alts

- Private debt
- P2P lending
- ABS, infrastructure bond (toll road)
- Hedge funds with long bias in bonds

![Image of suggested weights for bond-like alt](../assets/images/handcraft-bond-alts-weights.jpg)

## Alt allocation

Total Portfolio size:
- less than $5000: No alts
- $5000 to $22000: Genuine alts only
- above $22000: All alts

These assumes $1 commission to trade.

Genuine alts
- Min $9000: Portfolio 25
- Min $2400: Portfolio 26
- Min $1700: Portfolio 27
- Less than $1700: XAU

Equity-like alts
- Min $6000: Portfolio 28
- Min $2000: Portfolio 29
- Less than $2000: GQRE

Bond-like alts
- Min $1600: Portfolio 32
- Less than $1600: IGF

# Equity

Country concentration is more dangerous than industry concentration.

To track MSCI All Country Index, cap 25% risk weighted in EM (17% cash weighted)

## Region

Small investors:
- Min $1750: Portfolio 35
- Less than $1750: VT

Developed markets:
- Min $900: Portfolio 37
- Min $4500: Portfolio 38
- Min $27000: Portfolio 39

Emerging markets:
- Min $1000: Portfolio 40

## Country

Developed:
- North America: 80% US, 20% Canada
- EU: Portfolio 41 (Min $11000)
- Asia: Portfolio 43 (Min $3400)

Emerging:
- Asia: Portfolio 44 (Min $6000)
- LATAM: Portfolio 45 (Min $3000)
- EMEA: Portfolio 47 (Min $1800)

## Sector

GICS 11 sectors: energy, materials, industrials, consumer discretionary, consumer staples, health care, financials, information technology

## Forecasting model

Use relative momentum. Avoid yield model.

Momentum model:
1. Get past 12 months return
2. Calculate trailing Sharpe ratio
3. Get Sharpe Adjustment Factor (SAF) and multiply with handcrafted weights
4. Normalize weights if sum of adjusted weights is above 100%

```
sharpeAdjustmentFactor = {
  -1.0: 0.6,
  -0.8: 0.66,
  -0.6: 0.77,
  -0.4: 0.85,
  -0.2: 0.94,
  0: 1,
  0.2: 1.11,
  0.4: 1.19,
  0.6: 1.30,
  0.8: 1.37,
  1.0: 1.48
}
```

For n forecast models the SAF becomes:
```
SAF_n = n√(SAF_1 * SAF_2 * ... SAF_n)
```

To apply forecast models on different levels, we first find the Aggregate Sharpe Ratio (SGR) 
```
SGR_n = SR_1 * RW_1 + SR_2 * RW_2 + ...

Where:
SR: Sharpe ratio
RW: Risk weighting
```

To adjust equity sector and country weights, you can use relative momentum and dividend yield.

Don't use the same forecasting model for weighting and stock selection. 

You may use dividend yield to select stocks in a sector. Dividend yield works best if the assets are similar.


You may use dividend yield to select 

# Rebalance

`No-trade-zone (NTZ) =  (100% * number of assets) / 2`

If NTZ is 5% and your asset target weight is 12%, you'll not rebalance if current weight is between 9.5% to 14.5%.

`Minimum trade-size = min($150 * trading commission, 0.1% of portfolio value)`

# Portfolio maintenance

Annual review:
- Check for cheaper or more diversifying ETF
- Check active fund performance
- Check if you still have high yielding stocks

# Glossary

## Risk weights

Weight in portfolio normalised by amount of risk it has.

![Image on risk weighting](../assets/images/risk-weighting.jpg)
![Image on cash weighting](../assets/images/cash-weighting.jpg)
