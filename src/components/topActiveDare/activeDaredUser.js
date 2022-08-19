import * as React from 'react'

const timestamp = Math.floor(Date.now() / 1000)
const TopActiveDare = `
{
  tasks(where: { endTask_gt:"${timestamp}", finished: false }, orderBy:amount, orderDirection:desc, first: 1) 
  {
    recipientName
  }
}
`

export default function ActiveDaredUser() {
  const tad = useTAD()

  return (
    <div>
      <ul>
        {tad.map(tad => (
          <li key={tad.id}>
            <a
              key={tad.target}
              target="_blank"
              rel="noreferrer"
              href={'https://app.nerveglobal.com/#' + tad.recipientName}
            >
              {tad.recipientName}↗
            </a>
          </li>
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
