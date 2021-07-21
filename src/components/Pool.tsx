import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'
import { BsDot } from 'react-icons/bs'
// @ts-expect-error
import abbreviate from 'number-abbreviate'
import { Token } from '../queries'

const PoolWrapper = styled.div`
  border-radius: 6px;
  display: flex;
  background-color: #ececec;
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 0.6rem;
  }

  .pair-symbol-wrapper {
    width: 36%;
    display: flex;
    justify-content: center;
    background-color: #e3e3e3;

    .pair-symbols {
      font-size: 1.1rem;
      font-weight: 400;
      color: #0a0a0a;
      display: flex;
      padding: 8px 12px;
      text-align: center;
      justify-content: center;
      align-items: center;
      width: 100%;

      .token-name {
        cursor: pointer;
      }

      .pair-seperator {
        color: #c2c2c2;
        font-size: 1.2rem;
        display: flex;
      }

      &:not(:last-child) {
        margin-right: 0.4rem;
      }
    }
  }

  .info-section {
    width: 64%;
    display: flex;

    .info-wrapper {
      width: 50%;
      padding: 0.7rem;
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

  @media (max-width: 425px) {
    align-items: center;

    .pair-symbol-wrapper {
      flex-direction: column;
      align-items: start;
      justify-content: center;
    }

    .pair-symbols {
      flex-wrap: wrap;

      &:not(:last-child) {
        margin-right: 0;
        margin-bottom: 0.4rem;
      }

      .token-name {
        width: 100%;
        text-align: center;
      }

      .pair-seperator {
        svg {
          display: none;
        }
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
      <div className="pair-symbol-wrapper">
        <div className="pair-symbols">
          <span data-tip data-for={token0.id} className="token-name">
            <ReactTooltip effect="solid" place="top" id={token0.id}>
              {token0.name}
            </ReactTooltip>
            {token0.symbol}
          </span>{' '}
          <span className="pair-seperator">
            <BsDot />
          </span>{' '}
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
            {abbreviate(parseFloat(totalValueLockedUSD).toFixed(4), 4)}
          </div>
        </div>

        <div className="info-wrapper">
          <div className="info-title">Volume</div>
          <div className="info-value">
            {'$'}
            {abbreviate(parseFloat(volumeUSD).toFixed(4), 4)}
          </div>
        </div>
      </div>
    </PoolWrapper>
  )
}
