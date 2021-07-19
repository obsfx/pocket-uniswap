import { useQuery } from '@apollo/client'
import { PairData, GET_PAIRS } from '../queries'
import { Pair } from './Pair'
import { Spinner } from './Spinner'

export const Pairs: React.FC = () => {
  const { loading, data } = useQuery<PairData>(GET_PAIRS, {
    pollInterval: 1000 * 120,
  })

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        data &&
        data.pairs.map(({ id, token0, token1, reserveUSD, volumeUSD }) => (
          <Pair
            key={id}
            token0={token0}
            token1={token1}
            reserveUSD={reserveUSD}
            volumeUSD={volumeUSD}
          />
        ))
      )}
    </>
  )
}
