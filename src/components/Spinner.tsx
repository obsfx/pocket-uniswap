import styled from 'styled-components'
import PulseLoader from 'react-spinners/PulseLoader'

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem 0px;
`

export const Spinner: React.FC = () => {
  return (
    <SpinnerWrapper>
      <PulseLoader color="#d2d2d2" />
    </SpinnerWrapper>
  )
}
