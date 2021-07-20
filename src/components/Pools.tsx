import { useQuery } from '@apollo/client'
import { PoolData, GET_POOL_DATA } from '../queries'
import { Pool } from './Pool'
import { Spinner } from './Spinner'

export const Pools: React.FC = () => {
  const { loading, data } = useQuery<PoolData>(GET_POOL_DATA, {
    pollInterval: 1000 * 20,
    variables: { orderBy: 'totalValueLockedUSD' },
    nextFetchPolicy: 'cache-and-network',
  })

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        data &&
        data.pools
          .slice(0, 10)
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
