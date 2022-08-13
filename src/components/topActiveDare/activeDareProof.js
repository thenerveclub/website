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


const timestamp = Math.floor(Date.now() / 1000);
const TopActiveDare = `
{
  tasks(where: { endTask_gt:"${timestamp}", finished: false }, orderBy:amount, orderDirection:desc, first: 1) 
  {
    proofLink
  }
}
`;


export default function ActiveDareProof() {
  const tad = useTAD();

  return (
    <div>
      <ul>
        {tad.map((tad) => (
          <li key={tad.id}>
            
            <a target="_blank" rel="noreferrer" href={tad.proofLink}>
            {tad.proofLink.includes("instagram") ? (<StyledInstagram />) : (<a></a>)}</a>

            <a target="_blank" rel="noreferrer" href={tad.proofLink}>
            {tad.proofLink.includes("twitter") ? (<StyledTwitter />) :  (<a></a>)}</a>

            <a target="_blank" rel="noreferrer" href={tad.proofLink}>
            {tad.proofLink.includes("tiktok") ? (<StyledTikTok />) : (<a></a>)}</a>

            <a target="_blank" rel="noreferrer" href={tad.proofLink}>
            {tad.proofLink.includes("youtube") ? (<StyledYoutube />) : (<a></a>)}</a>

            <a target="_blank" rel="noreferrer" href={tad.proofLink}>
            {tad.proofLink.includes("twitch") ? (<StyledTwitch />) : (<a></a>)}</a>

            <a>{tad.proofLink.includes('') ? (<a style={{ color: "#FFFFFF"}}>Outstanding</a>) : (<a></a>)}</a>

          </li>
        ))}
      </ul>
    </div>
  );
}

function useTAD() {
  const [tad, setTAD] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.thegraph.com/subgraphs/name/nerveglobal/nerveglobal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: TopActiveDare })
    })
      .then((response) => response.json())
      .then((data) => setTAD(data.data.tasks));
  }, []);

  return tad;
}