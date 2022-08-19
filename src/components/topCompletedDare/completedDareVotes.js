import * as React from 'react'
import styled from 'styled-components'

const Positive = styled.div`
  color: green;
`

const Negative = styled.div`
  color: red;
`

const TopCompletedDare = `
{
  tasks(where: { finished: true },orderBy:amount, orderDirection:desc, first: 1) 
  {
    positiveVotes
    negativeVotes
  }
}
`

export default function ActiveDareAmount() {
  const tcd = useTCD()

  return (
    <div>
      <ul>
        {tcd.map(tcd => (
          <li key={tcd.positiveVotes}>
            <a>
              {tcd.positiveVotes - tcd.negativeVotes > 0 ? (
                <Positive>Finished ({tcd.positiveVotes - tcd.negativeVotes})</Positive>
              ) : (
                <Negative>Finished ({tcd.positiveVotes - tcd.negativeVotes})</Negative>
              )}
            </a>
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
