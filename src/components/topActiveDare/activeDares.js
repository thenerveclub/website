import * as React from 'react'
import styled from 'styled-components'
import '../../styles/layout.css'

import Instagram from '../../images/instagram.inline.svg'
import TikTok from '../../images/tiktok.inline.svg'
import Twitch from '../../images/twitch.inline.svg'
import Twitter from '../../images/twitter.inline.svg'
import Youtube from '../../images/youtube.inline.svg'

const StyledInstagram = styled(Instagram)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }

  width: 20px;
  height: 20px;

  :hover {
    transform: rotate(-10deg);
  }
`

const StyledTwitter = styled(Twitter)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }

  width: 20px;
  height: 20px;

  :hover {
    transform: rotate(-10deg);
  }
`

const StyledTikTok = styled(TikTok)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }

  width: 20px;
  height: 20px;

  :hover {
    transform: rotate(-10deg);
  }
`

const StyledYoutube = styled(Youtube)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }

  width: 20px;
  height: 20px;

  :hover {
    transform: rotate(-10deg);
  }
`

const StyledTwitch = styled(Twitch)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }

  width: 20px;
  height: 20px;

  :hover {
    transform: rotate(-10deg);
  }
`

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.cardBG};
  border: 1px solid ${({ theme }) => theme.buttonBorder};
  padding: 2rem;
  border-radius: 24px;
  box-shadow: ${({ theme }) => theme.shadows.huge};
`

const GrantsCard = styled(StyledCard)`
  width: 500px;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0 auto;

  @media (max-width: 960px) {
    width: 100%;
    margin: 0 auto 0 auto;
  }
`

const Positive = styled.div`
  color: green;
  align-items: left;
  text-align: left;
  display: flex;
  margin-left: 5px;
  flex: 1;
`

const Negative = styled.div`
  color: red;
  align-items: left;
  text-align: left;
  display: flex;
  margin-left: 5px;
  flex: 1;
`

const StyledItemRowIntern = styled.nav`
  display: flex;
  flex: 1;
  flex-direction: row;
  font-size: 20px;
  font-weight: 500;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto 0 auto;

  p {
    font-size: 12px;
    justify-content: space-between;
  }

  a {
    font-size: 18px;
  }

  @media (max-width: 960px) {
    font-size: 16px;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto 0 auto;

    p {
      font-size: 12px;
    }

    & > * {
      margin-top: 1px;
      margin-bottom: 1px;
    }
    & > *:not(:first-of-type) {
      margin-top: 0;
      align-items: right;
    }
  }
`

const StyledItemRow = styled.nav`
  display: flex;
  flex-direction: row;
  margin: 0 auto 0 auto;

  & > *:not(:first-of-type) {
    margin-left: 12px;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    & > * {
      margin-top: 1px;
      margin-bottom: 1px;
    }
    & > *:not(:first-of-type) {
      margin-top: 0;
      margin-left: 0;
    }
  }
`

const StyledSection = styled.section`
  display: grid;
  align-items: center;
  margin: 0 auto 0 auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2em;
`

// Countdown
const Text = styled.nav`
  width: 30px;
  font-size: 20px;

  @media (max-width: 960px) {
    width: 25px;
    font-size: 16px;
  }
`

var EndTask = 0
export { EndTask }

//Query
const timestamp = Math.floor(Date.now() / 1000)
const TopActiveDare = `
{
  tasks(where: { endTask_gt:"${timestamp}", finished: false }, orderBy:amount, orderDirection:desc, first: 10) 
  {
   description
   recipientName
   endTask
   proofLink
   positiveVotes
   negativeVotes
   amount
   participants
  }
}
`

export default function ActiveDareAmount() {
  const tad = useTAD()
  const matic = usePrice()

  return (
    <StyledSection>
      {tad.map(tad => (
        <li style={{ listStyle: 'none' }} key={tad.participants}>
          <StyledItemRow>
            <GrantsCard>
              <StyledItemRowIntern style={{ fontSize: '16px' }}>
                <a>{tad.recipientName}</a>
                <a target="_blank" rel="noreferrer" href={tad.proofLink}>
                  {tad.proofLink.includes('instagram') ? <StyledInstagram /> : ''}
                </a>

                <a target="_blank" rel="noreferrer" href={tad.proofLink}>
                  {tad.proofLink.includes('twitter') ? <StyledTwitter /> : ''}
                </a>

                <a target="_blank" rel="noreferrer" href={tad.proofLink}>
                  {tad.proofLink.includes('tiktok') ? <StyledTikTok /> : ''}
                </a>

                <a target="_blank" rel="noreferrer" href={tad.proofLink}>
                  {tad.proofLink.includes('youtube') ? <StyledYoutube /> : ''}
                </a>

                <a target="_blank" rel="noreferrer" href={tad.proofLink}>
                  {tad.proofLink.includes('twitch') ? <StyledTwitch /> : ''}
                </a>
              </StyledItemRowIntern>

              <StyledItemRowIntern>{tad.description}</StyledItemRowIntern>

              <StyledItemRowIntern style={{ marginBottom: '-0.25rem' }}>
                <a>
                  {tad.endTask}
                  {tad.positiveVotes - tad.negativeVotes > 0 ? (
                    <Positive>({tad.positiveVotes - tad.negativeVotes})</Positive>
                  ) : (
                    <Negative>({tad.positiveVotes - tad.negativeVotes})</Negative>
                  )}
                  ({tad.participants}) ${((tad.amount / 1e18) * matic).toFixed(2)}
                </a>
              </StyledItemRowIntern>

              <StyledItemRowIntern>
                <p>Time & Votes</p>
                <p>Participants & Value</p>
              </StyledItemRowIntern>
            </GrantsCard>
          </StyledItemRow>
        </li>
      ))}
    </StyledSection>
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
