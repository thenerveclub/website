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
    transition: 0.5s;
    path {
      fill: #e1306c;
    }
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
    transition: 0.5s;
    path {
      transition: 0.5s;
      fill: #1da1f2;
    }
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
    transition: 0.5s;
    path {
      transition: 0.5s;
      fill: #00f2ea;
    }
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
    transition: 0.5s;
    path {
      transition: 0.5s;
      fill: #ff0000;
    }
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
    transition: 0.5s;
    path {
      transition: 0.5s;
      fill: #6441a5;
    }
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
  height: 215px;
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

const StyledItemRowSocials = styled.nav`
  display: flex;
  flex: 1;
  flex-direction: row;
  font-size: 16px;
  font-weight: 500;
  justify-content: space-between;
  width: 100%;
  margin: -0.5rem auto 0.75rem auto;

  p {
    font-size: 12px;
    justify-content: space-between;
  }

  a {
    font-size: 16px;

    :hover {
      transition: 0.5s;
      color: #00f2fc;
    }
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

const StyledItemRowDescription = styled.nav`
  display: flex;
  flex: 1;
  flex-direction: row;
  height: 80px;
  font-size: 18px;
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

const StyledItemRowIntern = styled.nav`
  display: flex;
  flex: 1;
  flex-direction: row;
  font-size: 16px;
  font-weight: 500;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto 0 auto;

  p {
    font-size: 12px;
    justify-content: space-between;
  }

  a {
    font-size: 16px;
    color: green;
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

  @media (max-width: 960px) {
    flex-direction: column;
    & > * {
      margin-top: 1px;
      margin-bottom: 1px;
    }
  }
`

const StyledSection = styled.section`
  display: grid;
  align-items: center;
  margin: 0 auto 0 auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2em;

  @media (max-width: 960px) {
    display: grid;
    align-items: center;
    margin: 0 auto 0 auto;
    grid-template-columns: 1fr;
    grid-gap: 2em;
  }
`

//Query
const timestamp = Math.floor(Date.now() / 1000)
const TopCompletedDare = `
{
  tasks(where: {  endTask_lt:"${timestamp}", positiveVotes_gte: "1", negativeVotes_lte: "0", proofLink_contains: "https" }, orderBy:amount, orderDirection:desc, first: 6) 
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
  const tcd = useTCD()
  const matic = usePrice()

  return (
    <StyledSection>
      {tcd.map(tcd => (
        <li style={{ listStyle: 'none' }} key={tcd.participants}>
          <StyledItemRow>
            <GrantsCard>
              <StyledItemRowSocials style={{ fontSize: '16px' }}>
                <a
                  key={tcd.recipientName}
                  target="_blank"
                  rel="noreferrer"
                  href={'https://app.nerveglobal.com/#' + tcd.recipientName}
                >
                  {tcd.recipientName}↗
                </a>

                <a target="_blank" rel="noreferrer" href={tcd.proofLink}>
                  {tcd.proofLink.includes('instagram') ? (
                    <StyledInstagram />
                  ) : tcd.proofLink.includes('tiktok') ? (
                    <StyledTikTok />
                  ) : tcd.proofLink.includes('youtube') ? (
                    <StyledYoutube />
                  ) : tcd.proofLink.includes('twitch') ? (
                    <StyledTwitch />
                  ) : (
                    ''
                  )}
                </a>
              </StyledItemRowSocials>

              <StyledItemRowDescription>{tcd.description}</StyledItemRowDescription>

              <StyledItemRowIntern>
                <a>Success</a>
                {tcd.positiveVotes - tcd.negativeVotes > 0 ? (
                  <Positive>({tcd.positiveVotes - tcd.negativeVotes})</Positive>
                ) : (
                  <Negative>({tcd.positiveVotes - tcd.negativeVotes})</Negative>
                )}
                ({tcd.participants}) ${((tcd.amount / 1e18) * matic).toFixed(2)}
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
