import styled from 'styled-components'
// @ts-expect-error
import commaNumber from 'comma-number'
import { Token } from '../queries'

const PairWrapper = styled.div`
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  padding: 6px 10px;
  display: flex;
  background-color: #f1f1f1;

  &:not(:last-child) {
    margin-bottom: 0.6rem;
  }

  .token-info-wrapper {
    width: 33%;
    display: flex;
    align-items: center;

    .token-symbol {
      padding: 4px 9px;
      border-radius: 6px;
      font-size: 0.9rem;
      font-weight: 500;
      background-color: #06003d;
      color: #ffffff;

      &:not(:last-child) {
        margin-right: 0.4rem;
      }
    }
  }

  .info-wrapper {
    width: 33%;
    padding: 0px 6px;
    font-weight: 500;

    .info-title {
      font-size: 0.7rem;
      padding: 1px 4px;
      border-radius: 4px;
      background-color: #e3e3e3;
      width: 100%;
      display: inline;
      color: #0a0a0a;
      text-transform: uppercase;
    }

    .info-value {
      margin-top: 4px;
      font-size: 0.82rem;
    }
  }
`

export const Pair: React.FC<{
  token0: Token
  token1: Token
  reserveUSD: string
  volumeUSD: string
}> = ({ token0, token1, reserveUSD, volumeUSD }) => {
  const formatValue = (value: string): string => {
    return commaNumber(value, ',')
      .split('.')
      .map((piece: string, idx: number) => (idx === 1 ? piece.slice(0, 2) : piece))
      .join('.')
  }

  return (
    <PairWrapper>
      <div className="token-info-wrapper">
        <div className="token-symbol">{token0.symbol}</div>
        <div className="token-symbol">{token1.symbol}</div>
      </div>

      <div className="info-wrapper">
        <div className="info-title">Reserve</div>
        <div className="info-value">
          {'$'}
          {formatValue(reserveUSD)}
        </div>
      </div>

      <div className="info-wrapper">
        <div className="info-title">Volume</div>
        <div className="info-value">
          {'$'}
          {formatValue(volumeUSD)}
        </div>
      </div>
    </PairWrapper>
  )
}
