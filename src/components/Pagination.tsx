import styled from 'styled-components'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const PaginationWrapper = styled.div`
  display: flex;
  padding-bottom: 24px;
  justify-content: space-evenly;
  align-items: center;

  .pagination-button {
    padding: 2px 8px;
    cursor: pointer;
    background-color: #ececec;
    color: #0a0a0a;
    font-size: 0.875rem;
    border-radius: 6px;
    user-select: none;

    &.disabled {
      cursor: initial;
      opacity: 0.4;

      &:hover {
        background-color: #ececec;
      }
    }

    &:hover {
      background-color: #e3e3e3;
    }
  }

  .pagination-body {
    font-size: 0.875rem;
    font-weight: 500;
    color: #0a0a0a;
  }
`

export const Pagination: React.FC<{
  current: number
  total: number
  onChange: (newCurrent: number) => void
}> = ({ current, total, onChange }) => {
  const prev = () => {
    if (current > 0) {
      onChange(current - 1)
    }
  }

  const next = () => {
    if (current + 1 < total) {
      onChange(current + 1)
    }
  }

  return (
    <PaginationWrapper>
      <div className={`pagination-button ${current < 1 ? 'disabled' : ''}`} onClick={prev}>
        <FaArrowLeft />
      </div>

      <div className="pagination-body">
        Page {current + 1} / {total}
      </div>

      <div className={`pagination-button ${current + 1 >= total ? 'disabled' : ''}`} onClick={next}>
        <FaArrowRight />
      </div>
    </PaginationWrapper>
  )
}
