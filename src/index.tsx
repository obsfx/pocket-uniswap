import ReactDOM from 'react-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { Scrollbars } from 'react-custom-scrollbars-2'
import App from './App'
import { GlobalStyle } from './GlobalStyle'

const UNISWAP_GRAPHQL_ENDPOINT = process.env.REACT_APP_UNISWAP_GRAPHQL_API

if (!UNISWAP_GRAPHQL_ENDPOINT) {
  throw new Error(`Undefined ENV_VARIABLE: REACT_APP_UNISWAP_GRAPHQL_API`)
}

const client = new ApolloClient({
  uri: UNISWAP_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyle />
    <Scrollbars>
      <App />
    </Scrollbars>
  </ApolloProvider>,
  document.getElementById('root')
)
