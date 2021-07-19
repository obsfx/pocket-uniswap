import styled from 'styled-components'

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    border-radius: 12px;
    font-weight: 300;
    text-align: center;
    padding: 12px;
    font-size: 1.66rem;
    margin: 0;
    color: #0a0a0a;
    background: linear-gradient(
      140deg,
      rgb(235 235 235) 16%,
      rgb(244 244 244) 50%,
      rgb(224 224 224) 100%
    );
    user-select: none;

    span {
      font-weight: 500;
    }
  }
`

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <h1>
        Pocket <span>Uniswap</span>
      </h1>
    </HeaderWrapper>
  )
}
