import * as React from 'react'
import BigNumber from 'bignumber.js'

var EndTask = 0
export { EndTask }
console.log('TEST', EndTask)

const timestamp = Math.floor(Date.now() / 1000)
const TopActiveDare = `
{
  tasks(where: { endTask_gt:"${timestamp}", finished: false }, orderBy:amount, orderDirection:desc, first: 1) 
  {
      endTask
  }
}
`

export default function ActiveDareEndTask() {
  const tad = useTAD()
  console.log('TAD', tad)

  tad.map(tad => (EndTask = tad.endTask))

  return (
    <div>
      <ul>
        {tad.map(tad => (
          <li key={tad.endTask}>{tad.endTask}</li>
        ))}
      </ul>
    </div>
  )
}

function useTAD() {
  const [tad, setTAD] = React.useState([])

  React.useEffect(() => {
    fetch('https://api.thegraph.com/subgraphs/name/nerveglobal/nerveglobal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: TopActiveDare })
    })
      .then(response => response.json())
      .then(data => setTAD(data.data.tasks))
  }, [])

  return tad
}

function usePrice() {
  const [maticPrice, setPrice] = React.useState([])

  React.useEffect(async () => {
    const maticPrice = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=usd`)
    const priceUst = await maticPrice.json()
    const matic = new BigNumber(priceUst['matic-network'].usd)
    setPrice(new BigNumber(matic))
  }, [])

  return maticPrice
}
