import ReactDOM from 'react-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import App from './App'
import { GlobalStyle } from './GlobalStyle'

const UNISWAP_GRAPHQL_ENDPOINT = process.env.REACT_APP_UNISWAP_GRAPHQL_API_V2

if (!UNISWAP_GRAPHQL_ENDPOINT) {
  throw new Error(`Undefined ENV_VARIABLE: REACT_APP_UNISWAP_GRAPHQL_API_V2`)
}

const client = new ApolloClient({
  uri: UNISWAP_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyle />
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
