import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { PoolData, GET_POOL_DATA } from '../queries'
import { Pool } from './Pool'
import { Spinner } from './Spinner'
import { Pagination } from './Pagination'

export const Pools: React.FC = () => {
  const PAGE_SIZE = 10
  const [current, setCurrent] = useState(0)

  const { loading, data } = useQuery<PoolData>(GET_POOL_DATA, {
    pollInterval: 1000 * 20,
    variables: { orderBy: 'totalValueLockedUSD' },
    nextFetchPolicy: 'cache-and-network',
  })

  const handlePaginationChange = (newCurrent: number): void => {
    setCurrent(newCurrent)
  }

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        data && (
          <>
            <Pagination
              current={current}
              total={Math.ceil(data.pools.length / PAGE_SIZE)}
              onChange={handlePaginationChange}
            />
            {data.pools
              .slice(current * PAGE_SIZE, (current + 1) * PAGE_SIZE)
              .map(({ id, token0, token1, totalValueLockedUSD, volumeUSD }) => (
                <Pool
                  key={id}
                  token0={token0}
                  token1={token1}
                  totalValueLockedUSD={totalValueLockedUSD}
                  volumeUSD={volumeUSD}
                />
              ))}
          </>
        )
      )}
    </>
  )
}
