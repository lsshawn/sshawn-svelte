---
title: 'Learning notes - flashloan'
date: '2019-10-03'
tags:
  - learning-notes
  - web3
---

## Types of arbitrage

Flashloan works in one contract. There's no need to wait.

1. Simple arbitrage

2. Triangular arbitrage (3 tokens)

3. Mean reverting (Stablecoins)

- Doesn't work with flashloan because you need to wait.

## Assets

**Liquidity** is important because you want to reduce slippage.

Price discrepancy at most 0.5%. We can trade larger with flashloan, but there's slippage.

The highest liquidity assets are stablecoins: DAI, USDC, UST.

Price discrepancy happens during **volatile** period.

## DEX

Check defipulse.com for exchanges. Start with Uniswap and Kyber.

## Simple Arbitrage

Pseudocode for Nodejs script:

1. Listen to new block in ETH - every 15 seconds.
2. Fetch price in Uniswap and Kyber.
3. Determine if there's arbitrage.

Use Ethersan or documentation to find address of DEFI protocols.

Use web3 to connect to ETH.

Use Infura so that we don't need to run our own ETH node.

Endpoint: wss://mainnet.infura.io/ws/v3/c90d139cc92142ddb2a978212f70711d

Create new ETH wallet and send $20 to the wallet. Use https://vanity-eth.tk/.
