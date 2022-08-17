import * as React from 'react'

const TopSpenderName = `
{
  userDashStats(orderBy:spent, orderDirection:desc, first: 10) {
    id
    userName
    spent
  }

}
`

export default function EarnerName() {
  const tsn = useTSN()

  return (
    <div>
      <ul style={{ listStyle: 'decimal' }}>
        {tsn.map(tsn => (
          <li key={tsn.id}>
            <a key={tsn.userName} target="_blank" rel="noreferrer" href={'https://app.nerveglobal.com/#' + tsn.userName}>
              {tsn.userName}↗
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function useTSN() {
  const [tsn, setTSN] = React.useState([])

  React.useEffect(() => {
    fetch('https://api.thegraph.com/subgraphs/name/nerveglobal/nerveglobal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: TopSpenderName })
    })
      .then(response => response.json())
      .then(data => setTSN(data.data.userDashStats))
  }, [])

  return tsn
}
