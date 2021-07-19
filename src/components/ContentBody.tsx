import { useQuery } from '@apollo/client'
import { GET_POOLS_IDs_ORDERED_BY_TVL, GET_POOL_DATA_ORDERED_BY_TVL } from '../queries'
import styled from 'styled-components'
import { FiCircle, FiSquare, FiTriangle } from 'react-icons/fi'
import {} from '../queries'
import { Tabs, Tab, Content } from './Tabs'
import { Pools } from './Pools'

const ContentBodyWrapper = styled.div`
  padding: 1.4rem;
`

const TabsWrapper = styled.div`
  display: flex;
  justify-content: center;

  .tab-wrapper {
    margin: 5px;
    padding: 2px 6px;
    cursor: pointer;
    font-weight: 500;
    color: #a2a2a2;
    font-size: 1rem;
    transition: all 0.1s ease-in-out;
    display: flex;
    align-items: center;

    svg {
      padding-right: 4px;
    }

    &:hover,
    &.active {
      color: #0a0a0a;
    }
  }
`

const ContentsWrapper = styled.div`
  padding-top: 1.4rem;
`

export const ContentBody: React.FC = () => {
  const { data: idData } = useQuery(GET_POOLS_IDs_ORDERED_BY_TVL, {
    pollInterval: 1000 * 120,
    nextFetchPolicy: 'cache-and-network',
  })

  useQuery(GET_POOL_DATA_ORDERED_BY_TVL, {
    variables: { ids: idData && idData.pools.map((pool: { id: string }) => pool.id) },
    pollInterval: 1000 * 120,
    nextFetchPolicy: 'cache-and-network',
    skip: !idData,
  })
  /* * total supply, tradeVolume, tradeVolumeUSD, tx(transaction)Count*/

  return (
    <ContentBodyWrapper>
      <Tabs>
        <TabsWrapper>
          <Tab id={0}>
            <FiCircle /> Tokens
          </Tab>
          <Tab id={1}>
            <FiSquare /> Pools
          </Tab>
          <Tab id={2}>
            <FiTriangle /> Swap Txns
          </Tab>
        </TabsWrapper>

        <ContentsWrapper>
          <Content id={0}>test</Content>
          <Content id={1}>
            <Pools />
          </Content>
          <Content id={2}>test</Content>
        </ContentsWrapper>
      </Tabs>
    </ContentBodyWrapper>
  )
}
