import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { TokenData, GET_TOKENS } from '../queries'
import { Token } from './Token'
import { Spinner } from './Spinner'
import { Pagination } from './Pagination'

export const Tokens: React.FC = () => {
  const PAGE_SIZE = 10
  const [current, setCurrent] = useState(0)

  const { loading, data } = useQuery<TokenData>(GET_TOKENS, {
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
              total={Math.ceil(data.tokens.length / PAGE_SIZE)}
              onChange={handlePaginationChange}
            />
            {data.tokens
              .slice(current * PAGE_SIZE, (current + 1) * PAGE_SIZE)
              .map(
                ({
                  id,
                  name,
                  symbol,
                  totalValueLockedUSD,
                  totalSupply,
                  volumeUSD,
                  tokenDayData,
                }) => (
                  <Token
                    key={id}
                    id={id}
                    name={name}
                    symbol={symbol}
                    totalValueLockedUSD={totalValueLockedUSD || ''}
                    totalSupply={totalSupply || ''}
                    volumeUSD={volumeUSD || ''}
                    priceUSD={(tokenDayData && tokenDayData[0].priceUSD) || ''}
                  />
                )
              )}
          </>
        )
      )}
    </>
  )
}
