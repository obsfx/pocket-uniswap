import { useQuery } from '@apollo/client'
import { PoolDayDatas, GET_POOL_DAY_DATA } from '../queries'
import { Pool } from './Pool'
import { Spinner } from './Spinner'

export const Pools: React.FC = () => {
  const { loading, data } = useQuery<PoolDayDatas>(GET_POOL_DAY_DATA, {
    pollInterval: 1000 * 120,
    nextFetchPolicy: 'cache-and-network',
  })

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        data &&
        data.poolDayDatas
          .slice(0, 10)
          .map(({ id, pool, tvlUSD, volumeUSD }) => (
            <Pool key={id} pool={pool} tvlUSD={tvlUSD} volumeUSD={volumeUSD} />
          ))
      )}
    </>
  )
}
