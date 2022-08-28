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
  width: 650px;
  align-items: center;
  justify-content: center;
  margin: 0 auto 5rem auto;

  @media (max-width: 960px) {
    width: 100%;
    margin: 0 auto 5rem auto;
  }
`

const timestamp = Math.floor(Date.now() / 1000)
const TopActiveDare = `
{
  tasks(where: { endTask_gt:"${timestamp}", finished: false }, orderBy:amount, orderDirection:desc, first: 3) 
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

const StyledItemRowIntern = styled.nav`
  display: flex;
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
  display: flex;
  margin: 5rem auto 0 auto;

  @media (max-width: 960px) {
    margin-top: 1rem;
  }

  @media (max-width: 640px) {
    margin-top: 1rem;
  }
`

export default function ActiveDareAmount() {
  const tad = useTAD()
  const matic = usePrice()

  return (
    <StyledSection style={{ margin: '2rem auto 0 auto' }}>
      {tad.map(tad => (
        <li style={{ listStyle: 'none' }} key={tad.participants}>
          <StyledItemRow>
            <GrantsCard>
              <StyledItemRowIntern style={{ fontSize: '16px' }}>
                {tad.recipientName}
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

                <a>{tad.proofLink.includes('') ? <a style={{ color: '#FFFFFF' }}>Proof: Outstanding</a> : ''}</a>
              </StyledItemRowIntern>

              <StyledItemRowIntern>{tad.description}</StyledItemRowIntern>

              <StyledItemRowIntern style={{ marginBottom: '-1.5rem' }}>
                ({tad.participants}) ${((tad.amount / 1e18) * matic).toFixed(2)}
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
