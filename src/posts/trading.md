---
title: trading
---

# Terminologies

Instrument risk = Standard deviation of returns. Minimum 25 data points.


## Position scaling with non-binary trading

`Notional exposure = [(forecast / 10) * risk target * capital] / instrument risk %`

**Forecast** is a range between -20 to +20.

```
Forecast = Risk-adjusted forecast * scaling factor
Forecast_long = Max(+20, Forecast)
Forecast_short = Min(-20, Forecast)
```
where:

```
Risk adjusted forecast
= Raw forecast / instrument risk in price units
= Raw forecast / (current price * annual standard deviation of returns)
```

Scaling factor is calculated from averaging backtest across multiple instruments.

Example of forecast:
```
MA forecast = MA_fast - MA_slow
```

```
Breakout forecast with risk adjusted = (P_t - Ravg_N) / (Rmax_N - Rmin_N)

where Ravg_N = (Rmax_N + Rmin_N) / 2
```

To combine multiple trading strategy forecast, e.g. 40% in MA crossover and 60% in breakout:
```
Combined forecast = 0.4 * MA forecast + 0.6 * Breakout forecast
```

Adjust position size if deviation from ideal exposure > 10%
```
Deviation % = (ideal exposure - current exposure) / average exposure

where Average Exposure = (target risk % * capital) / instrument risk %
```
