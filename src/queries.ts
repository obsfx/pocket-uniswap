import { gql } from '@apollo/client'

export interface Token {
  id: string
  name: string
  symbol: string
}

export interface Pair {
  id: string
  token0: Token
  token1: Token
  reserveUSD: string
  volumeUSD: string
  token0Price: string
  token1Price: string
  volumeToken0: string
  volumeToken1: string
  totalSupply: string
}

export interface PairData {
  pairs: Pair[]
}

export const GET_PAIRS = gql`
  query GetPairs($first: Int) {
    pairs(first: $first, orderBy: reserveUSD, orderDirection: desc) {
      id
      token0 {
        id
        name
        symbol
      }
      token1 {
        id
        name
        symbol
      }
      reserveUSD
      volumeUSD
      token0Price
      token1Price
      volumeToken0
      volumeToken1
      totalSupply
    }
  }
`

interface Transaction {
  id: string
  blockNumber: string
  timestamp: string
}

interface Action {
  id: string
  transaction: Transaction
  timestamp: string
  pair: Pair
  to: string
  sender: string
}

export interface Mint extends Action {
  amount0: number
  amount1: number
}

export interface MintData {
  mints: Mint[]
}

export const GET_MINTS = gql`
  query GetMints($first: Int) {
    mints(first: $first, orderBy: timestamp, orderDirection: desc) {
      id
      transaction {
        id
        blockNumber
        timestamp
      }
      timestamp
      pair {
        id
        token0 {
          id
          name
          symbol
        }
        token1 {
          id
          name
          symbol
        }
        reserveUSD
        volumeUSD
        token0Price
        token1Price
      }
      to
      sender
      amount0
      amount1
    }
  }
`

export interface Burn extends Action {
  amount0: number
  amount1: number
}

export interface BurnData {
  burns: Burn[]
}

export const GET_BURNS = gql`
  query GetBurns($first: Int) {
    burns(first: $first, orderBy: timestamp, orderDirection: desc) {
      id
      transaction {
        id
        blockNumber
        timestamp
      }
      timestamp
      pair {
        id
        token0 {
          id
          name
          symbol
        }
        token1 {
          id
          name
          symbol
        }
        reserveUSD
        volumeUSD
        token0Price
        token1Price
      }
      to
      sender
      amount0
      amount1
    }
  }
`

export interface Swap extends Action {
  amount0In: number
  amount0Out: number
  amount1In: number
  amount1Out: number
}

export const GET_SWAPS = gql`
  query GetSwaps($first: Int) {
    swaps(first: $first, orderBy: timestamp, orderDirection: desc) {
      id
      transaction {
        id
        blockNumber
        timestamp
      }
      timestamp
      pair {
        id
        token0 {
          id
          name
          symbol
        }
        token1 {
          id
          name
          symbol
        }
        reserveUSD
        volumeUSD
        token0Price
        token1Price
      }
      to
      sender
      amount0In
      amount0Out
      amount1In
      amount1Out
    }
  }
`

export interface SwapData {
  swaps: Swap[]
}
