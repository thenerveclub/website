import * as React from 'react'

const TopCompletedDare = `
{
  tasks(where: { finished: true }, orderBy:amount, orderDirection:desc, first: 1) 
  {
      amount
      participants
  }
}
`

export default function CompletedDareAmount() {
  const tcd = useTCD()
  const matic = usePrice()

  return (
    <div>
      <ul>
        {tcd.map(tcd => (
          <li key={tcd.participants}>
            ({tcd.participants}) ${((tcd.amount / 1e18) * matic).toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  )
}

function useTCD() {
  const [tcd, setTCD] = React.useState([])

  React.useEffect(() => {
    fetch('https://api.thegraph.com/subgraphs/name/nerveglobal/nerveglobal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: TopCompletedDare })
    })
      .then(response => response.json())
      .then(data => setTCD(data.data.tasks))
  }, [])

  return tcd
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
