import styled from 'styled-components'
import { BsArrowRight } from 'react-icons/bs'
import { SiEthereum } from 'react-icons/si'
// @ts-expect-error
import timestampToDate from 'timestamp-to-date'
// @ts-expect-error
import abbreviate from 'number-abbreviate'
import { Token } from '../queries'

const SwapWrapper = styled.div`
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  background-color: #ececec;
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 0.6rem;
  }

  .hash-transaction-info {
    padding: 10px;
    background-color: #e3e3e3;
    color: #0a0a0a;
    font-weight: 500;

    .hash-date {
      margin-bottom: 0.4rem;
      color: #6e6e6e;
      display: flex;
      justify-content: space-between;
      font-size: 0.875rem;

      span {
        &:not(:last-child) {
          margin-right: 0.8rem;
        }
      }

      .hash-wrapper {
        width: 60%;
        display: flex;

        .hash {
          width: 100%;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          color: #6060ff;
          text-decoration: none;
          padding-left: 6px;

          &:hover {
            color: #0e0e67;
            text-decoration: underline;
          }

          span {
            color: #6e6e6e;
            font-size: 0.8rem;
          }
        }
      }

      .date {
        width: 40%;
        text-align: right;
      }
    }

    .transaction {
      display: flex;
      align-items: center;

      .origin,
      .to {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        padding: 2px 4px;
        border-radius: 4px;
        font-size: 0.875rem;
      }

      .origin {
        width: calc(50%);
        background-color: #fafafa;
      }

      .transaction-seperator {
        display: flex;
        font-size: 1.1rem;
        padding: 0px 6px;
      }

      .to {
        width: calc(50%);
        background-color: #fff74c;
      }
    }
  }

  .swap-info {
    padding: 10px;
    font-size: 0.875rem;

    span {
      padding-right: 4px;
    }

    .label {
      color: #7c7c7c;
    }

    .value {
      color: #0a0a0a;
      font-weight: 500;
    }
  }
`

export const Swap: React.FC<{
  id: string
  timestamp: string
  sender: string
  token0: Token
  token1: Token
  amount0: string
  amount1: string
  origin: string
}> = ({ id, timestamp, sender, token0, token1, amount0, amount1, origin }) => {
  const formatAmount = (amount: string): string => {
    return abbreviate(Math.abs(parseFloat(amount)).toFixed(4), 4)
  }

  return (
    <SwapWrapper>
      <div className="hash-transaction-info">
        <div className="hash-date">
          <div className="hash-wrapper">
            <SiEthereum />
            <a
              href={`https://etherscan.io/tx/${id}`}
              target="_blank"
              rel="noreferrer"
              className="hash"
            >
              <span>Ether Scan:</span> {id}
            </a>
          </div>
          <div className="date">
            {timestampToDate(parseInt(timestamp, 10) * 1000, 'yyyy-MM-dd HH:mm:ss')}
          </div>
        </div>

        <div className="transaction">
          <div className="origin">{origin}</div>
          <div className="transaction-seperator">
            <BsArrowRight />
          </div>
          <div className="to">{sender}</div>
        </div>
      </div>

      <div className="swap-info">
        <span className="label">Swap</span>
        <span className="value">
          {amount0[0] === '-'
            ? `${formatAmount(amount1)} ${token1.symbol}`
            : `${formatAmount(amount0)} ${token0.symbol}`}
        </span>
        <span className="label">For</span>
        <span className="value">
          {amount0[0] === '-'
            ? `${formatAmount(amount0)} ${token0.symbol}`
            : `${formatAmount(amount1)} ${token1.symbol}`}
        </span>
      </div>
    </SwapWrapper>
  )
}
