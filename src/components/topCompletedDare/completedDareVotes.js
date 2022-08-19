import * as React from 'react'
import styled from 'styled-components'

const Positive = styled.div`
  color: green;
  margin-left: 5px;
`

const Negative = styled.div`
  color: red;
  margin-left: 5px;
`

const StyledItemRowIntern = styled.nav`
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100%;

  p {
    width: 30px;
    font-size: 50px;
  }

  @media (max-width: 960px) {
    font-size: 16px;

    p {
      width: 20px;
      font-size: 20px;
    }
  }
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
            <StyledItemRowIntern>
              {tcd.positiveVotes - tcd.negativeVotes > 0 ? (
                <Positive>({tcd.positiveVotes - tcd.negativeVotes})</Positive>
              ) : (
                <Negative>({tcd.positiveVotes - tcd.negativeVotes})</Negative>
              )}
            </StyledItemRowIntern>
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
