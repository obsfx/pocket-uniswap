import { useQuery } from '@apollo/client'
import { GET_POOL_DAY_DATA } from '../queries'
import styled from 'styled-components'
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
  useQuery(GET_POOL_DAY_DATA)

  return (
    <ContentBodyWrapper>
      <Tabs>
        <TabsWrapper>
          <Tab id={0}>Tokens</Tab>
          <Tab id={1}>Pools</Tab>
          <Tab id={3}>Swap Txns</Tab>
        </TabsWrapper>

        <ContentsWrapper>
          <Content id={0}>
            /* * total supply, tradeVolume, tradeVolumeUSD, tx(transaction)Count*/
          </Content>
          <Content id={1}>
            <Pools />
          </Content>
          <Content id={2}>test</Content>
        </ContentsWrapper>
      </Tabs>
    </ContentBodyWrapper>
  )
}
