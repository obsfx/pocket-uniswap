import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { SwapData, GET_SWAPS } from '../queries'
import { Swap } from './Swap'
import { Spinner } from './Spinner'
import { Pagination } from './Pagination'

export const Swaps: React.FC = () => {
  const PAGE_SIZE = 10
  const [current, setCurrent] = useState(0)

  const { loading, data } = useQuery<SwapData>(GET_SWAPS, {
    pollInterval: 1000 * 2,
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
              total={Math.ceil(data.swaps.length / PAGE_SIZE)}
              onChange={handlePaginationChange}
            />
            {data.swaps
              .slice(current * PAGE_SIZE, (current + 1) * PAGE_SIZE)
              .map(({ id, timestamp, sender, token0, token1, amount0, amount1, origin }) => (
                <Swap
                  key={id}
                  id={id}
                  timestamp={timestamp}
                  sender={sender}
                  token0={token0}
                  token1={token1}
                  amount0={amount0}
                  amount1={amount1}
                  origin={origin}
                />
              ))}
          </>
        )
      )}
    </>
  )
}
