import * as React from 'react'
import styled from 'styled-components'

const Positive = styled.div`
  color: green;
`

const Negative = styled.div`
  color: red;
`

const timestamp = Math.floor(Date.now() / 1000)
const TopActiveDare = `
{
  tasks(where: { endTask_gt:"${timestamp}", finished: false }, orderBy:amount, orderDirection:desc, first: 1) 
  {
    positiveVotes
    negativeVotes
  }
}
`

export default function ActiveDareAmount() {
  const tad = useTAD()

  return (
    <div>
      <ul>
        {tad.map(tad => (
          <li key={tad.positiveVotes}>
            <a>
              {tad.positiveVotes - tad.negativeVotes > 0 ? (
                <Positive>({tad.positiveVotes - tad.negativeVotes})</Positive>
              ) : (
                <Negative>({tad.positiveVotes - tad.negativeVotes})</Negative>
              )}
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
