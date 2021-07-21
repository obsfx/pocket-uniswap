import { gql } from '@apollo/client'

export interface Token {
  id: string
  name: string
  symbol: string
  totalValueLockedUSD?: string
  totalSupply?: string
  volumeUSD?: string
  tokenDayData?: { priceUSD: string }[]
}

export interface TokenData {
  tokens: Token[]
}

export const GET_TOKENS = gql`
  query GetTokens {
    tokens(orderBy: totalValueLockedUSD, orderDirection: desc) {
      id
      name
      symbol
      totalValueLockedUSD
      totalSupply
      volumeUSD
      tokenDayData(first: 1, orderBy: date, orderDirection: desc) {
        priceUSD
      }
    }
  }
`

export interface Pool {
  id: string
  token0: Token
  token1: Token
  totalValueLockedUSD: string
  volumeUSD: string
}

export interface PoolData {
  pools: Pool[]
}

export const GET_POOL_DATA = gql`
  query GetPoolData($orderBy: String) {
    pools(orderBy: $orderBy, orderDirection: desc) {
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
      totalValueLockedUSD
      volumeUSD
    }
  }
`

export interface Transaction {
  id: string
  blockNumber: string
  gasPrice: string
  gasUsed: string
}

export interface Swap {
  id: string
  timestamp: string
  sender: string
  token0: Token
  token1: Token
  amount0: string
  amount1: string
  origin: string
}

export interface SwapData {
  swaps: Swap[]
}

export const GET_SWAPS = gql`
  query GetSwaps {
    swaps(orderBy: timestamp, orderDirection: desc) {
      id
      timestamp
      sender
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
      amount0
      amount1
      origin
    }
  }
`
