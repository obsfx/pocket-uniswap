import { useQuery } from '@apollo/client'
import {
  PoolIDData,
  PoolData,
  GET_POOLS_IDs_ORDERED_BY_TVL,
  GET_POOL_DATA_ORDERED_BY_TVL,
} from '../queries'
import { Pool } from './Pool'
import { Spinner } from './Spinner'

export const Pools: React.FC = () => {
  const { data: idData } = useQuery<PoolIDData>(GET_POOLS_IDs_ORDERED_BY_TVL, {
    pollInterval: 1000 * 120,
    nextFetchPolicy: 'cache-and-network',
  })

  const { loading, data } = useQuery<PoolData>(GET_POOL_DATA_ORDERED_BY_TVL, {
    variables: { ids: idData && idData.pools.map((pool: { id: string }) => pool.id) },
    pollInterval: 1000 * 120,
    nextFetchPolicy: 'cache-and-network',
    skip: !idData,
  })

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        data &&
        data.pools
          .slice(0, 100)
          .map(({ id, token0, token1, totalValueLockedUSD, volumeUSD }) => (
            <Pool
              key={id}
              token0={token0}
              token1={token1}
              totalValueLockedUSD={totalValueLockedUSD}
              volumeUSD={volumeUSD}
            />
          ))
      )}
    </>
  )
}
