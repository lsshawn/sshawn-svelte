---
title: 'Learning notes - Web3'
date: 2022-01-26
tags:
  - web3
  - learning-notes
isPrivate: true
---

# Upgradable vs non-upgradable smart contracts (SC)

Q: What's the downside of using upgradable contract?
Q: Is the majority of live SC upgradable?

# Application Binary Interface (ABI)

A JSON of SC contract.

In Etherscan:

Non-upgradable:

- contract > contract ABI

Upgradable:

- contract > click into implementation contract > contract ABI
- don't use the ABI in 'contract > code' because it may not contain all fields like `pricePerFullShare`.

The actual balance is `balanceOf / 10 ^ decimals`.

# Learning path

- Solidity
- Javascript. Frontend framework: web.js/ether.js
- Smart contract framework: Truffle/Hardhat, remix, infura
- Rust for Solana

# Terra specific

https://docs.terra.money/

Terra Academy: https://academy.terra.money/courses/cosmwasm-smart-contracts-i

# Rust

- Rust book via Let's Get Rusty
- https://github.com/rust-lang/rustlings

# Test Smart Contract

- https://www.youtube.com/watch?v=hU5HWCL7WWc

# Learn about Ignite consensus algorithm

https://docs.tendermint.com/

- Terra developer sessions
- https://www.youtube.com/playlist?list=PL-1j57N4qfImu5SDm2E7c3cP7_WBvzBcL
- https://www.youtube.com/watch?v=d0iiUkviMaU
