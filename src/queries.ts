import { gql } from '@apollo/client'

export interface Token {
  id: string
  name: string
  symbol: string
}

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
  query GetPoolsOrderedByTVL($orderBy: String) {
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
