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

export interface PoolIDData {
  pools: { id: string }[]
}

export interface PoolData {
  pools: Pool[]
}

export const GET_POOLS_IDs_ORDERED_BY_TVL = gql`
  query GetPoolIDsOrderedByTVL {
    pools(first: 50, orderBy: totalValueLockedUSD, orderDirection: desc) {
      id
    }
  }
`

export const GET_POOL_DATA_ORDERED_BY_TVL = gql`
  query GetPoolsOrderedByTVL($ids: [ID!]!) {
    pools(where: { id_in: $ids }, orderBy: totalValueLockedUSD, orderDirection: desc) {
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

interface Transaction {
  id: string
  blockNumber: string
}

interface Action {
  id: string
  transaction: Transaction
  timestamp: string
  owner: string
  sender: string
}

export interface Mint extends Action {
  amountUSD: string
}

export interface MintData {
  mints: Mint[]
}

export const GET_MINTS = gql`
  query GetMints {
    mints(orderBy: timestamp, orderDirection: desc) {
      id
      transaction {
        id
        blockNumber
      }
      timestamp
      owner
      sender
      amountUSD
    }
  }
`

export interface Burn extends Action {
  amountUSD: string
}

export interface BurnData {
  burns: Burn[]
}

export const GET_BURNS = gql`
  query GetBurns {
    burns(orderBy: timestamp, orderDirection: desc) {
      id
      transaction {
        id
        blockNumber
      }
      timestamp
      owner
      sender
      amountUSD
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
      }
      timestamp
      owner
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
