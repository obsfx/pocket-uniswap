import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'
// @ts-expect-error
import abbreviate from 'number-abbreviate'
import { Token } from '../queries'

const PoolWrapper = styled.div`
  border-radius: 6px;
  display: flex;
  background-color: #ececec;
  overflow: hidden;

  @media (max-width: 425px) {
    align-items: center;
  }

  &:not(:last-child) {
    margin-bottom: 0.6rem;
  }

  .token-info-wrapper {
    width: 33%;
    display: flex;
    justify-content: center;

    @media (max-width: 425px) {
      flex-direction: column;
      align-items: start;
      justify-content: center;
    }

    .token-symbol {
      font-size: 1.1rem;
      font-weight: 400;
      color: #0a0a0a;
      display: flex;
      background-color: #e3e3e3;
      padding: 8px 12px;
      text-align: center;
      justify-content: center;
      align-items: center;
      width: 100%;

      .token-name {
        cursor: pointer;

        @media (max-width: 425px) {
          width: 100%;
          text-align: center;
        }
      }

      .token-seperator {
        color: #c2c2c2;
        font-size: 0.7rem;
        padding: 0px 4px;

        @media (max-width: 425px) {
          display: none;
        }
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

  .info-section {
    width: 66%;
    display: flex;

    .info-wrapper {
      width: 50%;
      padding: 10px;
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
  }
`

export const Pool: React.FC<{
  token0: Token
  token1: Token
  totalValueLockedUSD: string
  volumeUSD: string
}> = ({ token0, token1, totalValueLockedUSD, volumeUSD }) => {
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

      <div className="info-section">
        <div className="info-wrapper">
          <div className="info-title">TVL</div>
          <div className="info-value">
            {'$'}
            {abbreviate(totalValueLockedUSD, 4)}
          </div>
        </div>

        <div className="info-wrapper">
          <div className="info-title">Volume</div>
          <div className="info-value">
            {'$'}
            {abbreviate(volumeUSD, 4)}
          </div>
        </div>
      </div>
    </PoolWrapper>
  )
}
