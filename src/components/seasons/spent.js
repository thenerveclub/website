import * as React from 'react'

const TopPlayerSpent = `
{
  userDashStats(orderBy:spent, orderDirection:desc, first: 10) {
    id
    userName
    spent
  }
}
`

export default function TopSpent() {
  const tps = useTPS()
  const matic = usePrice()

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        {tps.map(tps => (
          <li key={tps.spent}>${((tps.spent / 1e18) * matic).toFixed(2)}</li>
        ))}
      </ul>
    </div>
  )
}

function useTPS() {
  const [tps, setTPS] = React.useState([])

  React.useEffect(() => {
    fetch('https://api.thegraph.com/subgraphs/name/nerveglobal/nerveglobal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: TopPlayerSpent })
    })
      .then(response => response.json())
      .then(data => setTPS(data.data.userDashStats))
  }, [])

  return tps
}

function usePrice() {
  const [maticPrice, setPrice] = React.useState([])

  React.useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=usd', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify()
    })
      .then(response => response.json())
      .then(data => setPrice(data['matic-network'].usd))
  }, [])

  return maticPrice
}
