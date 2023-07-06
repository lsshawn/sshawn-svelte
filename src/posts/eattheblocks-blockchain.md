:learning-note:web3:
# EatTheBlocks Blockchain Developer course

- Blockchain vs traditional database:
  - Immutable: Blockchain can be added by can't modify or delete.
  - Blockchain is hosted by anyone, i.e. public node.
  - Decentralized and censorship resistant: Distributed database are database that can run on several node, but all run on private network.
  - Mining secures the database, i.e. Proof of work.
  - Cons:
    - Slower because need to synchronised data across whole network.
    - Less scalable.

- A hash is a fingerprint of data.

# Transaction
- gasPrice: how much you're willing to pay miner
- lifecycle:
  1. build tx
  2. sign tx with wallet private key
  3. send tx
  4. mine tx

# Smart contract
- no need server. Deployed to the blockchain.
- cons:
  - expensive because need pay with gas
  - slow. You need to wait for a miner to pick up your tx.
  - limited capabilities.
  - no cron.
  - cannot call external API.

# Gas
- prevent spamming and reward miner.
- gas cost is a unit to measure transaction fee. It's paid in Ether.
- gas price is the ether per gas. Check average gas price at 'ethgasstation'.

# Dapp architecture
- smart contract on blockchain.
- frontend pass transaction parameter to wallet extension.
- wallet send signed transaction to smart contract.
- after transaction is mined, wallet will provide a tx hash to verify a transaction.
- backend is usually for caching.
- decide what to put in smart contract or server.
- code smart contract and test.
- build frontend.
- deploy to testnet & mainnet.
