import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'
// @ts-expect-error
import commaNumber from 'comma-number'
import { Token } from '../queries'

const PoolWrapper = styled.div`
  border-radius: 6px;
  padding: 10px;
  display: flex;
  background-color: #ececec;

  @media (max-width: 425px) {
    align-items: center;
  }

  &:not(:last-child) {
    margin-bottom: 0.6rem;
  }

  .token-info-wrapper {
    width: 33%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 425px) {
      flex-direction: column;
      align-items: start;
      justify-content: center;
    }

    .token-symbol {
      border-radius: 6px;
      font-size: 1.1rem;
      font-weight: 400;
      color: #0a0a0a;
      display: flex;
      background-color: #e3e3e3;
      padding: 8px 12px;
      align-items: center;

      .token-name {
        cursor: pointer;

        &:hover {
          background-color: yellow;
        }
      }

      .token-seperator {
        color: #c2c2c2;
        font-size: 0.7rem;
        padding: 0px 4px;
      }

      &:not(:last-child) {
        margin-right: 0.4rem;
      }

      @media (max-width: 425px) {
        flex-wrap: wrap;

        &:not(:last-child) {
          margin-right: 0;
          margin-bottom: 0.4rem;
        }
      }
    }

    @media (max-width: 425px) {
      flex-wrap: wrap;
    }
  }

  .info-wrapper {
    width: 33%;
    padding: 0px 6px;
    font-weight: 500;

    .info-title {
      font-size: 0.7rem;
      color: #787878;
      width: 100%;
      display: inline;
      text-transform: uppercase;
    }

    .info-value {
      margin-top: 2px;
      font-size: 0.82rem;
    }
  }
`

export const Pool: React.FC<{
  token0: Token
  token1: Token
  totalValueLockedUSD: string
  volumeUSD: string
}> = ({ token0, token1, totalValueLockedUSD, volumeUSD }) => {
  const formatValue = (value: string): string => {
    return commaNumber(value, ',')
      .split('.')
      .map((piece: string, idx: number) => (idx === 1 ? piece.slice(0, 2) : piece))
      .join('.')
  }

  return (
    <PoolWrapper>
      <div className="token-info-wrapper">
        <div className="token-symbol">
          <span data-tip data-for={token0.id} className="token-name">
            <ReactTooltip effect="solid" place="top" id={token0.id}>
              {token0.name}
            </ReactTooltip>
            {token0.symbol}
          </span>{' '}
          <span className="token-seperator">•</span>{' '}
          <span data-tip data-for={token1.id} className="token-name">
            <ReactTooltip effect="solid" place="top" id={token1.id}>
              {token1.name}
            </ReactTooltip>
            {token1.symbol}
          </span>
        </div>
      </div>

      <div className="info-wrapper">
        <div className="info-title">TVL</div>
        <div className="info-value">
          {'$'}
          {formatValue(totalValueLockedUSD)}
        </div>
      </div>

      <div className="info-wrapper">
        <div className="info-title">Volume</div>
        <div className="info-value">
          {'$'}
          {formatValue(volumeUSD)}
        </div>
      </div>
    </PoolWrapper>
  )
}
