import * as React from 'react'

const TopEarnerName = `
{
  userDashStats(orderBy:earned, orderDirection:desc, first: 10) {
    id
    userName
    earned
  }

}
`

export default function EarnerName() {
  const ten = useTEN()

  return (
    <div>
      <ul style={{ listStyle: 'decimal' }}>
        {ten.map(ten => (
          <li key={ten.userName}>
            <a target="_blank" rel="noreferrer" href={'https://app.nerveglobal.com/#' + ten.userName}>
              {ten.userName}↗
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function useTEN() {
  const [ten, setTEN] = React.useState([])

  React.useEffect(() => {
    fetch('https://api.thegraph.com/subgraphs/name/nerveglobal/nerveglobal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: TopEarnerName })
    })
      .then(response => response.json())
      .then(data => setTEN(data.data.userDashStats))
  }, [])

  return ten
}
