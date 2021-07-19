import styled from 'styled-components'
import { Tabs, Tab, Content } from './Tabs'
import { Pairs } from './Pairs'

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
  return (
    <ContentBodyWrapper>
      <Tabs>
        <TabsWrapper>
          <Tab id={0}>Pairs</Tab>
          <Tab id={1}>Mint Txns</Tab>
          <Tab id={2}>Burn Txns</Tab>
          <Tab id={3}>Swap Txns</Tab>
        </TabsWrapper>

        <ContentsWrapper>
          <Content id={0}>
            <Pairs />
          </Content>
          <Content id={1}>KEKW 2</Content>
        </ContentsWrapper>
      </Tabs>
    </ContentBodyWrapper>
  )
}
