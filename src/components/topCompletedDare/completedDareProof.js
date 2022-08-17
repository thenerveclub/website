import React from 'react'
import styled from 'styled-components'

import Instagram from '../../images/instagram.inline.svg'
import Twitter from '../../images/twitter.inline.svg'
import TikTok from '../../images/tiktok.inline.svg'
import Youtube from '../../images/youtube.inline.svg'
import Twitch from '../../images/twitch.inline.svg'

const StyledInstagram = styled(Instagram)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }

  width: 20px;
  height: 20px;

  :hover {
    transform: rotate(-10deg);
  }

  @media (max-width: 960px) {
    width: 15px;
    height: 15px;
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

  @media (max-width: 960px) {
    width: 15px;
    height: 15px;
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

  @media (max-width: 960px) {
    width: 15px;
    height: 15px;
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

  @media (max-width: 960px) {
    width: 15px;
    height: 15px;
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

  @media (max-width: 960px) {
    width: 15px;
    height: 15px;
  }
`

const TopCompletedDare = `
{
  tasks(where: { finished: true },orderBy:amount, orderDirection:desc, first: 1) 
  {
    proofLink
  }
}
`

export default function CompletedDareProof() {
  const tcd = useTCD()

  return (
    <div>
      <ul>
        {tcd.map(tcd => (
          <li key={tcd.proofLink}>
            <a target="_blank" rel="noreferrer" href={tcd.proofLink}>
              {tcd.proofLink.includes('instagram') ? <StyledInstagram /> : <a></a>}
            </a>

            <a target="_blank" rel="noreferrer" href={tcd.proofLink}>
              {tcd.proofLink.includes('twitter') ? <StyledTwitter /> : <a></a>}
            </a>

            <a target="_blank" rel="noreferrer" href={tcd.proofLink}>
              {tcd.proofLink.includes('tiktok') ? <StyledTikTok /> : <a></a>}
            </a>

            <a target="_blank" rel="noreferrer" href={tcd.proofLink}>
              {tcd.proofLink.includes('youtube') ? <StyledYoutube /> : <a></a>}
            </a>

            <a target="_blank" rel="noreferrer" href={tcd.proofLink}>
              {tcd.proofLink.includes('twitch') ? <StyledTwitch /> : <a></a>}
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
