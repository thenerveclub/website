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

  margin-left: -15rem;
  width: 20px;
  height: 20px;

  :hover {
    transform: rotate(-10deg);
  }

  @media (max-width: 960px) {
    margin-left: 2.75rem;
    width: 15px;
    height: 15px;
  }
`

const StyledInstagramHidden = styled(Instagram)`
  visibility: hidden;

  margin-left: -15rem;
  width: 20px;
  height: 20px;

  :hover {
    transform: rotate(-10deg);
  }

  @media (max-width: 960px) {
    visibility: hidden;
    margin-left: 2.75rem;
    width: 15px;
    height: 15px;
  }
`

const StyledTwitter = styled(Twitter)`
  path {
  fill: ${({ theme }) => theme.textColor};
  }

  margin-left: 1.5rem;
  width: 20px;
  height: 20px;

  :hover {
    transform: rotate(-10deg);
  }

  @media (max-width: 960px) {
    margin-left:  1rem;
    width: 15px;
    height: 15px;
  }
`

const StyledTikTok = styled(TikTok)`
  path {
  fill: ${({ theme }) => theme.textColor};
  }

  margin-left: 1.5rem;
  width: 20px;
  height: 20px;

  :hover {
    transform: rotate(-10deg);
  }

  @media (max-width: 960px) {
    margin-left:  1rem;
    width: 15px;
    height: 15px;
  }
`

const StyledYoutube = styled(Youtube)`
  path {
  fill: ${({ theme }) => theme.textColor};
  }

  margin-left: 1.5rem;
  width: 20px;
  height: 20px;

  :hover {
    transform: rotate(-10deg);
  }

  @media (max-width: 960px) {
    margin-left:  1rem;
    width: 15px;
    height: 15px;
  }
`

const StyledTwitch = styled(Twitch)`
  path {
  fill: ${({ theme }) => theme.textColor};
  }

  margin-left: 1.5rem;
  width: 20px;
  height: 20px;

  :hover {
    transform: rotate(-10deg);
  }

  @media (max-width: 960px) {
    margin-left: 1rem;
    margin-right: 0.5rem;
    width: 15px;
    height: 15px;
  }
`

const StyledTwitchHidden = styled(Twitch)`
  visibility: hidden;

  margin-left: -15rem;
  width: 20px;
  height: 20px;

  :hover {
    transform: rotate(-10deg);
  }

  @media (max-width: 960px) {
    visibility: hidden;
    margin-left:  1rem;
    margin-right: 0.5rem;
    width: 15px;
    height: 15px;
  }
`

const TopSpenderSocials = `
{
  userDashStats (orderBy:spent, orderDirection: desc, first: 10)
   {
    id
    userSocialStat {
      youtube
      twitter
      instagram
      tiktok
      twitch
    }
   }
}
`;

export default function useTopEarnerSocials() {
  const tss = useTSS();

  tss.forEach((player) => {
    if(player.userSocialStat == null){
      player.userSocialStat = {};
      player.userSocialStat.instagram = "";
      player.userSocialStat.twitter = "";
      player.userSocialStat.tiktok = "";
      player.userSocialStat.youtube = "";
      player.userSocialStat.twitch = "";
    }
  })
  
 
  return (
    <div>
      <ul>
        {tss.map((tss) => (
          <li key={tss.id}>
            
          <a target="_blank" rel="noreferrer" href={tss.userSocialStat.instagram}>
          {tss.userSocialStat.instagram.includes("instagram") ? (<StyledInstagram />) : (<StyledInstagramHidden />)}</a>

          <a target="_blank" rel="noreferrer" href={tss.userSocialStat.twitter}>
          {tss.userSocialStat.twitter.includes("twitter") ? (<StyledTwitter />) :  (<a></a>)}</a>

          <a target="_blank" rel="noreferrer" href={tss.userSocialStat.tiktok}>
          {tss.userSocialStat.tiktok.includes("tiktok") ? (<StyledTikTok />) : (<a></a>)}</a>

          <a target="_blank" rel="noreferrer" href={tss.userSocialStat.youtube}>
          {tss.userSocialStat.youtube.includes("youtube") ? (<StyledYoutube />) : (<a></a>)}</a>

          <a target="_blank" rel="noreferrer" href={tss.userSocialStat.twitch}>
          {tss.userSocialStat.twitch.includes("twitch") ? (<StyledTwitch />) : (<StyledTwitchHidden />)}</a>
          
          </li>
        ))}
      </ul>
    </div>
  );
}

function useTSS() {
  const [tss, setTSS] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.thegraph.com/subgraphs/name/nerveglobal/nerveglobal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: TopSpenderSocials })
    })
      .then((response) => response.json())
      .then((data) => setTSS(data.data.userDashStats));
  }, []);

  return tss;
}