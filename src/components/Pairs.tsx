import { useQuery } from '@apollo/client'
import styled from 'styled-components'
import { Pair } from './Pair'
import { PairData, GET_PAIRS } from '../queries'

const PairsWrapper = styled.div``

const Loader = styled.div`
  font-size: 1.6rem;
  padding-top: 2rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
  color: #a2a2a2;
`

export const Pairs: React.FC = () => {
  const { loading, data } = useQuery<PairData>(GET_PAIRS)

  return (
    <PairsWrapper>
      {loading ? (
        <Loader>Loading...</Loader>
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
    </PairsWrapper>
  )
}
