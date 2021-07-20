import styled from 'styled-components'
import { Header } from './components/Header'
import { ContentBody } from './components/ContentBody'

const Container = styled.div`
  max-width: 560px;
  margin: auto;
  padding: 1.2rem 0;
`

const App: React.FC = () => {
  return (
    <div className="App">
      <Container>
        <Header />
        <ContentBody />
      </Container>
    </div>
  )
}

export default App
