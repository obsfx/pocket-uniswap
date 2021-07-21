import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'
// @ts-expect-error
import abbreviate from 'number-abbreviate'

const TokenWrapper = styled.div`
  border-radius: 6px;
  display: flex;
  background-color: #ececec;
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 0.6rem;
  }

  .symbol-wrapper {
    width: 25%;
    display: flex;
    justify-content: center;
    background-color: #e3e3e3;

    .symbol {
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
    }
  }

  .info-section {
    width: 75%;
    display: flex;
    flex-wrap: wrap;
    padding: 0.7rem;

    .info-wrapper {
      width: 50%;
      padding: 2px;
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
    .symbol-wrapper {
      justify-content: center;
    }

    .symbol {
      flex-wrap: wrap;

      &:not(:last-child) {
        margin-right: 0;
        margin-bottom: 0.4rem;
      }

      .token-name {
        width: 100%;
        text-align: center;
      }
    }
  }
`

export const Token: React.FC<{
  id: string
  name: string
  symbol: string
  totalValueLockedUSD: string
  totalSupply: string
  volumeUSD: string
  priceUSD: string
}> = ({ id, name, symbol, totalValueLockedUSD, totalSupply, volumeUSD, priceUSD }) => {
  return (
    <TokenWrapper>
      <div className="symbol-wrapper">
        <div className="symbol">
          <span data-tip data-for={id} className="token-name">
            <ReactTooltip effect="solid" place="top" id={id}>
              {name}
            </ReactTooltip>
            {symbol}
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

        <div className="info-wrapper">
          <div className="info-title">Total Supply</div>
          <div className="info-value">
            {'$'}
            {abbreviate(parseFloat(totalSupply).toFixed(4), 4)}
          </div>
        </div>

        <div className="info-wrapper">
          <div className="info-title">Price</div>
          <div className="info-value">
            {'$'}
            {abbreviate(parseFloat(priceUSD).toFixed(4), 4)}
          </div>
        </div>
      </div>
    </TokenWrapper>
  )
}
