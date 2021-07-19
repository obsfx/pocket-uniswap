import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'
// @ts-expect-error
import commaNumber from 'comma-number'
import { Pool as PoolType } from '../queries'

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
  pool: PoolType
  tvlUSD: string
  volumeUSD: string
}> = ({ pool, tvlUSD, volumeUSD }) => {
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
          <span data-tip data-for={pool.token0.id} className="token-name">
            <ReactTooltip place="top" id={pool.token0.id}>
              {pool.token0.name}
            </ReactTooltip>
            {pool.token0.symbol}
          </span>{' '}
          <span className="token-seperator">•</span>{' '}
          <span data-tip data-for={pool.token1.id} className="token-name">
            <ReactTooltip place="top" id={pool.token1.id}>
              {pool.token1.name}
            </ReactTooltip>
            {pool.token1.symbol}
          </span>
        </div>
      </div>

      <div className="info-wrapper">
        <div className="info-title">TVL</div>
        <div className="info-value">
          {'$'}
          {formatValue(tvlUSD)}
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
