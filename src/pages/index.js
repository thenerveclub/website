import React, { useState } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'
import { Butt } from '../components/butt'
import { Tab } from '../components/tab'
import { TabRight } from '../components/tabRight'
import ProtocolData from '../components/protocolData'
import { Button } from '../components/button'
import True from '../styles/fontTrue.css'

import { useDarkMode } from '../contexts/Application'

import PinkGlimmer from '../images/pink_glimmer.inline.svg'
import Twitter from '../images/twitter.inline.svg'
import Github from '../images/github.inline.svg'
import Discord from '../images/discord.inline.svg'
import Linkedin from '../images/linkedin.inline.svg'
import AppsImage from '../images/apps.jpg'
import appstore from '../images/appstore.svg'
import google from '../images/google.svg'
import kitty from '../images/kitty.gif'
import Mockup from '../images/Mockup.png'
import Mockup1 from '../images/Mockup1.png'

import ZTask from '../ZTask'
import ZBet from '../ZBet'
import TEarn from '../TEarn'
import BEarn from '../BEarn'
import BEarnTotal from '../BEarnTotal'
import ZTopspent from '../ZTopspent'
import ZTopspent1 from '../ZTopspent1'
import ZTopearn from '../ZTopearn'
import ZTopearn1 from '../ZTopearn1'

import Countdown from '../components/countdown'
import TMoney from '../TMoney'


const StyledAbout = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px;
  justify-content: space-between;
  padding: 0 2rem;
  padding-bottom: 4rem;
  margin-bottom: 4rem;
  padding-top: 2rem;


  @media (max-width: 960px) {
    flex-direction: column;
    grid-template-columns: 1fr;
    margin-top: 0rem;
    padding-top: 1rem;
  }
`

const Title = styled.h1`
  /* font-size: 3rem; */
  margin-bottom: 4rem;
  font-size: 65px;
  text-transform: uppercase;
  background: -webkit-linear-gradient(to right, #DE0CCF 0%, #00F2FC 100%);
  background: -moz-linear-gradient(to right, #DE0CCF 0%, #00F2FC 100%);
	background: linear-gradient(to right, #DE0CCF 0%, #00F2FC 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 1200px;
  /* text-align: center; */
  @media (max-width: 960px) {
    font-size: 2rem;
  }
`

const BGCard = styled.span`
  width: 100vw;
  height: 100vh;
  max-height: 1220px;
  user-select: none;
  background-repeat: no-repeat;
  background: ${({ theme }) => theme.heroBG};
  background-size: contain;
  mix-blend-mode: overlay;

  @media (max-width: 960px) {
    width: 100vw;
    height: 100vh;
  }
`

const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.buttonBorder};
  border-bottom: 1px solid;
  border-image: linear-gradient(var(--angle), aqua, aqua, magenta, magenta) 1;
	
	animation: 15s rotate linear infinite;
}

@keyframes rotate {
	to {
		--angle: 360deg;
	}
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

  @media (max-width: 960px) {
    margin-bottom: 0;
    padding: 1rem;
    padding-bottom: 8rem;
  }
`

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  will-change: transform;
  align-items: flex-start;
  height: 15vh;

  @media (max-width: 1024px) {
    height: 60vh;
  }

  @media (max-width: 640px) {
    height: 60vh;
    margin-bottom: 5rem;
  }

  @media (max-width: 440px) {
    height: 60vh;
  }
`

const StyledBodyTitle = styled.h1`
  font-size: 48px;
  white-space: wrap;
  overflow-wrap: normal;
  
  @media (max-width: 1024px) {
    margin: 2rem 0 0 0;
  }

  @media (max-width: 960px) {
    width: 100%;
    margin: 2rem auto 0 auto;
    font-weight: 500;
    text-align: center;
    font-size: 32px;
  }

  @media (max-width: 640px) {
    width: 100%;
    margin: 2rem auto 0 auto;
    font-weight: 500;
    text-align: center;
    font-size: 32px;
  }

  @media (max-width: 440px) {
    font-weight: 500;
    text-align: center;
    font-size: 37px;
  }
`

const StyledBodySubTitle = styled.h2`
  max-width: 720px;
  line-height: 150%;
  font-weight: 400;
  text-align: left;

  @media (max-width: 640px) {
    text-align: left;
  }
`

const SubTitle = styled.div`
  max-width: 930px;
  font-size: 20px;
  font-weight: 400;
  text-align: left;
  margin-right: 48px;

  @media (max-width: 960px) {
    font-size: 14px;
    text-align: center;
    margin-right: 0;
  }

  @media (max-width: 640px) {
    font-size: 14px;
    text-align: center;
    margin-right: 0;
  }
`

const StyledBodySubM = styled.h2`
  display: none;
  visibility: hidden;
  text-transform: uppercase;
  background: -webkit-linear-gradient(to right, #DE0CCF 0%, #00F2FC 100%);
  background: -moz-linear-gradient(to right, #DE0CCF 0%, #00F2FC 100%);
	background: linear-gradient(to right, #DE0CCF 0%, #00F2FC 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

  @media (max-width: 960px) {
    display: block;
    visibility: visible;
    width: 100%;
    margin: 4rem auto 2rem auto;
    font-weight: 500;
    text-align: center;
    font-size: 32px;
  }

  @media (max-width: 640px) {
    display: block;
    visibility: visible;
    width: 100%;
    margin: 4rem auto 2rem auto;
    font-weight: 500;
    text-align: center;
    font-size: 32px;
  }

  @media (max-width: 440px) {
    display: block;
    visibility: visible;
    font-weight: 500;
    text-align: center;
    font-size: 37px;
  }
`

const StyledBodySubT = styled.h2`
  display: block;
  visibility: visible;
  width: 800px;
  font-size: 20px;
  white-space: pre-line

  @media (max-width: 960px) {
    display: none;
    visibility: hidden;
  }

  @media (max-width: 640px) {
    display: none;
    visibility: hidden;
  }
`

const StyledBodySubText = styled.h3`
  max-width: 960px;
  line-height: 150%;
  opacity: 0.8;
  @media (max-width: 640px) {
    text-align: left;
  }
`

const StyledSectionTitle = styled.h3`
  max-width: 900px;
  line-height: 140%;
  font-size: 28px;

  @media (max-width: 960px) {
    width: vw;
    margin: 0 auto 0 auto;
    font-size: 20px;
    text-align: center;
  }

  @media (max-width: 640px) {
    max-width: vw;
    margin: 0 auto 0 auto;
    font-size: 20px;
    text-align: center;
  }
`

const StyledSocialRow = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  & > *:not(:first-of-type) {
    margin-top: 0;
    margin-left: 16px;
  }
  
  @media (max-width: 960px) {
    margin: 2rem auto 2rem auto;
    font-weight: 500;
    align-items: center;
    font-size: 32px;
  }

  @media (max-width: 640px) {
    margin: 2rem auto 2rem auto;
    font-weight: 500;
    align-items: center;
    font-size: 32px;
  }

  @media (max-width: 440px) {
    font-weight: 500;
    align-items: center;
    font-size: 37px;
  }
`

const StyledSocialRowL = styled.nav`
  display: none;

  @media (max-width: 960px) {
      display: flex;
      flex-direction: row;
      margin: 2rem auto 2rem auto;
      
      & > *:not(:first-of-type) {
        margin-top: 0;
        margin-left: 16px;
      }
  }
`

const StyledItemRow = styled.nav`
  display: flex;
  flex-direction: column;

  margin: 0rem;
  & > *:not(:first-of-type) {
    margin-top: 12px;
  }
  @media (min-width: 960px) {
    flex-direction: row;
    & > * {
      margin-top: 1px;
      margin-bottom: 1px;
    }
    & > *:not(:first-of-type) {
      margin-top: 0;
      margin-left: 12px;
    }
  }
`

const StyledItemColumn = styled.nav`
  display: flex;
  flex-direction: column;
  & > *:not(:last-of-type) {
    margin-bottom: 12px;
  }
`

const StyledPinkGlimmer = styled(PinkGlimmer)`
  margin: 0;
  width: 48px;
  height: 48px;
  position: relative;
  top: -24px;
  right: -32px;
  margin-left: -50px;
  margin-right: 2px;
  transition: transform 0.2s linear;
  :hover {
    transform: rotate(-10deg);
  }
`

const StyledTwitter = styled(Twitter)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  width: 24px;
  height: 24px;
`

const StyledDiscord = styled(Discord)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  width: 24px;
  height: 24px;
`

const StyledGithub = styled(Github)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  width: 24px;
  height: 24px;
`

const StyledLinkedIn = styled(Linkedin)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  width: 24px;
  height: 24px;
`

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.cardBG};
  border: 1px solid ${({ theme }) => theme.buttonBorder};
  padding: 2rem;
  border-radius: 24px;
  box-shadow: ${({ theme }) => theme.shadows.huge};
`

const StyledC = styled.div`
  border-radius: 24px;
`

const HideSmall = styled.span`
  @media (max-width: 960px) {
    display: none;
  }
`

const StyledTradeLink = styled.a`
padding: 0 3rem 0 0;
text-decoration: none;
display: inline-block;
width: 100%
alignSelf: center;
white-space: nowrap;

}
@media (max-width: 960px) {
  display: inline-block;
}
`

const StyledButton = styled.a`
  padding: 0.25rem 0.75rem;
  background-color: ${({ theme }) => theme.textColor};
  text-decoration: none;
  color: ${({ theme }) => theme.invertedTextColor};
  display: inline-block;
  font-weight: 500;
  font-size: 18px;
  width: 100%;
  margin: 3rem 1rem 0 1rem;
  width: min-content;
  white-space: nowrap;
  border: 1px solid transparent;
  box-shadow: ${({ theme }) => theme.shadows.small};
  background: ${({ theme, open, showBG }) => (showBG && !open ? theme.backgroundColor : 'none')};
	border-bottom: 1px solid ${({ theme }) => theme.buttonBorder};
  border-image: linear-gradient(var(--angle), aqua, aqua, magenta, magenta) 1;
	
	animation: 15s rotate linear infinite;
  cursor: pointer;
}

@keyframes rotate {
	to {
		--angle: 360deg;
	}
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

  transition: background-color 0.25s ease;
  }
  @media (max-width: 960px) {
    margin: 3rem 1rem 3rem 1rem;
  }
  @media (max-width: 640px) {
    margin: 3rem 1rem 3rem 1rem;
  }
`

const StyledButtonTop = styled.a`
  padding: 0.25rem 0.75rem;
  background-color: ${({ theme }) => theme.textColor};
  text-decoration: none;
  color: white;
  display: inline-block;
  font-weight: 500;
  font-size: 18px;
  width: 100%;
  width: min-content;
  white-space: nowrap;
  border: 1px solid transparent;
  box-shadow: ${({ theme }) => theme.shadows.small};
  background: ${({ theme, open, showBG }) => (showBG && !open ? theme.backgroundColor : 'none')};
	border-bottom: 1px solid ${({ theme }) => theme.buttonBorder};
  border-image: linear-gradient(var(--angle), aqua, aqua, magenta, magenta) 1;
	
	animation: 15s rotate linear infinite;
  cursor: pointer;
}

@keyframes rotate {
	to {
		--angle: 360deg;
	}
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

  transition: background-color 0.25s ease;
  }
  @media (max-width: 960px) {

  @media (max-width: 640px) {

  }
`

const IndexPage = props => {
  const isDark = useDarkMode()
  const [active, setActive] = useState("Creator");

  return (
    <Layout path={props.location.pathname}>
      <BGCard>
        {/* <CardNoise /> */}
        
        {/* <CardFade /> */}
      </BGCard>
      <SEO
        title="Home"
        path={props.location.pathname}
        description={'Crowdfunding for content chosen by the people.'}
      />
      
      <StyledAbout>
        <span style={{ marginTop: '5rem' }}>
        <HideSmall>
          <Title style={{ fontWeight: "600", paddingBottom: '4rem' }}>
          Crowdfunding for content chosen by the people.
          </Title>
        </HideSmall>
        </span> 
      </StyledAbout>
          
      <StyledBody>
        <StyledTitle>
          <StyledBodyTitle>
            <span style={{ fontFamily: "True", fontWeight: 200 }}>NERVE GLOBAL</span>
          </StyledBodyTitle>
          <StyledBodySubT>
            {'A bolt on solution that runs on top of existing social media platforms &'} <br />
            {'assists content creators to find their niche while entering the crypto ecosystem.'}
          </StyledBodySubT>
          <StyledBodySubM>
            {'Crowdfunding for content chosen by the people.'}
          </StyledBodySubM>
          <StyledSocialRow>
          <StyledTradeLink
            target="_blank"
            href="https://apps.apple.com/de/app/nerve-global/id1500517863"
          >
            <img style={{ maxWidth: "20rem" }} src={appstore} width="143%" />
          </StyledTradeLink>
          <StyledTradeLink
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.academy.nerve&hl=en&gl=US"
          >
            <img style={{ maxWidth: "20rem" }} src={google} width="140%" />
          </StyledTradeLink>
          </StyledSocialRow>
          <StyledSocialRow style={{ marginTop: "3rem"}}>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/nerveglobal_">
              <StyledTwitter />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/nerveglobal">
              <StyledGithub />
            </a>
            <a target="_blank" rel="noreferrer" href="https://discord.gg/Xuh5enTNB6">
              <StyledDiscord />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/nerveglobal/">
              <StyledLinkedIn />
            </a>
          </StyledSocialRow>
          
        </StyledTitle>
        
        <HideSmall>
        <GrantCard>
            <img style={{ minWidth: "20rem", margin: "-7rem 0 0 0" }} src={kitty} width="100%" />
        </GrantCard>
        </HideSmall>
        {/*
        <StyledSectionHeaderr style={{ display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              padding: '2rem 0 2rem 0',
              fontFamily: "True"}}>
          <a>{'POLYGON LAUNCH'}</a>
          </StyledSectionHeaderr>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              padding: '2rem 0 8rem 0'
            }}
          >
            <Countdown />
            </div>
            */}

          <SectionHeader style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              padding: '3.5rem 0 2rem 0',
              fontFamily: "True"}}>
          <a>{'Platform Stats'}</a>
          </SectionHeader>
          
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              padding: '2rem 0 6rem 0'
            }}
          >
            <ProtocolData />
          </div>
          

          <SectionHeader style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              padding: '2rem 0 2rem 0',
              fontFamily: "True"}}>
          <a>{'How to Play'}</a>
          </SectionHeader>

          <SectionHeaderMobile style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              marginTop: "0"}}>
          <nav>
            <StyledButton style={{
              textAlign: "center",
              minWidth: "8rem",
              color: 'white'
            }} onClick={() => setActive("Creator")}>Creator</StyledButton>
            <StyledButton style={{
              textAlign: "center",
              minWidth: "8rem",
              color: 'white'
            }} onClick={() => setActive("Supporter")}>Supporter</StyledButton>
          </nav>
          </SectionHeaderMobile>
          <div>
            {active === "Creator" && <TaskCreator props={props} />}
            {active === "Supporter" && <TaskSupporter props={props} />}
          </div>
          

          <SectionHeader style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              padding: '2rem 0 2rem 0',
              fontFamily: "True"}}>
          <a>{'Decentralized Wallet'}</a>
          </SectionHeader>
          <EcosystemSection props={props} />


          <SectionHeader style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              padding: '0 0 2rem 0',
              fontFamily: "True"}}>
          <a>{'Governance & More'}</a>
          </SectionHeader>
          <DeveloperSection props={props} />

          
        {/*
        <KeyAdvantagesBet data={data} props={props} />
        */}

        {/*
        <Ranking data={data} props={props} />
        <Spotlight data={data} props={props} />
        */}

        <StyledSection>
        <StyledItemRow style={{ alignItems: 'center', justifyContent: 'center'}}>
        <StyledSectionTitle>Discover a new form of crowdfunding, live streaming and community interaction - download now!</StyledSectionTitle>
        <HideSmall>
        <StyledSocialRow>
          <StyledTradeLink
            target="_blank"
            href="https://apps.apple.com/de/app/nerve-global/id1500517863"
          >
            <img style={{ marginTop: '2rem', maxWidth: "20rem" }} src={appstore} width="143%" />
          </StyledTradeLink>
          <StyledTradeLink
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.academy.nerve&hl=en&gl=US"
          >
            <img style={{ marginTop: '2rem', maxWidth: "20rem" }} src={google} width="140%" />
          </StyledTradeLink>
          </StyledSocialRow>   
          </HideSmall>   
        </StyledItemRow>
      </StyledSection>

      <StyledSocialRowL>
          <StyledTradeLink
            target="_blank"
            href="https://apps.apple.com/de/app/nerve-global/id1500517863"
          >
            <img style={{ maxWidth: "20rem" }} src={appstore} width="143%" />
          </StyledTradeLink>
          <StyledTradeLink
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.academy.nerve&hl=en&gl=US"
          >
            <img style={{ maxWidth: "20rem" }} src={google} width="140%" />
          </StyledTradeLink>
          </StyledSocialRowL>

      </StyledBody>
      <BG />
    </Layout>
  )
}

export default IndexPage

const StyledSectionHeader = styled.h1`
  font-size: 30px;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  font-weight: 500;
  margin-top: 6rem;

  a {
    color: ${({ theme }) => theme.textColor};
  }

  @media (max-width: 960px) {
    width: 100%;
    /* font-size: 2rem; */
    line-height: 2.5rem;
    max-width: 600px;
    margin-top: 2rem;
    text-align: center;
  }
  @media (max-width: 640px) {
    width: 100%;
    font-weight: 400;
    margin-top: 2rem;
    text-align: center;
  }
`

const StyledSectionHeaderr = styled.h1`
  font-size: 5em;
  white-space: wrap;
  overflow-wrap: normal;
  font-weight: 500;
  margin-top: 10rem;
  margin-bottom: -2rem;

  background: -webkit-linear-gradient(to right, #DE0CCF 30%, #00F2FC 70%);
  background: -moz-linear-gradient(to right, #DE0CCF 30%, #00F2FC 70%);
	background: linear-gradient(to right, #DE0CCF 30%, #00F2FC 70%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;

  a {
    color: ${({ theme }) => theme.textColor};
  }

  @media (max-width: 960px) {
    font-size: 2rem;
    margin-top: -5rem;
    color: white;
    a {
      color: white;
  }
  @media (max-width: 640px) {
    font-size: 2rem;
    margin-top: -5rem;
    color: white;
    a {
      color: white;
  }
`

const SectionHeader = styled.h1`
  font-size: 5em;
  white-space: wrap;
  overflow-wrap: normal;
  font-weight: 500;
  margin-top: 7.5rem;
  margin-bottom: -2rem;
  color: white;
    a {
      color: white;
  }

  @media (max-width: 960px) {
    font-size: 2rem;
    margin-top: 0rem;
    color: white;
    a {
      color: white;
  }
  @media (max-width: 640px) {
    font-size: 2rem;
    margin-top: 0rem;
    color: white;
    a {
      color: white;
  }
`

const SectionHeaderMobile = styled.h1`
  max-width: 500px;
  margin: 0 0 0 7.5rem;

  @media (max-width: 960px) {
    margin: 0 0 0 0;
    font-size: 2rem;
    margin-top: -5rem;
    color: white;
    a {
      color: white;
  }
  @media (max-width: 640px) {
    margin: 0 0 0 0;
    font-size: 2rem;
    margin-top: -5rem;
    color: white;
    a {
      color: white;
  }
`

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 5rem 0;

  @media (max-width: 960px) {
    margin-top: 1rem;
  }

  @media (max-width: 640px) {
    margin-top: 1rem;
  }
`

const StyledSectionr = styled.section`
  display: flex;
  flex-direction: right;
  margin: 5rem 40rem;

  @media (max-width: 960px) {
  display: flex;
  flex-direction: column;
  margin: 5rem 0;
  }

  @media (max-width: 640px) {
  display: flex;
  flex-direction: column;
  margin: 5rem 0;
  }
`

export const DeveloperCard = styled(StyledCard)`
  mix-blend-mode: ${({ isDark }) => (isDark ? 'overlay' : 'lighten')};
  color: white;
  background-size: cover;
  background-repeat: no-repeat;
`

export const GovernanceCard = styled(StyledCard)`
  mix-blend-mode: ${({ isDark }) => (isDark ? 'overlay' : 'lighten')};
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 12px;

  @media (max-width: 960px) {
    padding: 1rem 1.25rem;
    height: ${({ open }) => (open ? '100vh' : '100%')};
  }

  @media (max-width: 960px) {
    margin-bottom: 10px;
    margin-right: 0px;
  }
`

export const AppsCard = styled(StyledCard)`
  background: url(${AppsImage});
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 12px;
  width: 100%;
  min-height: 290px;
  max-width: 590px;

  h1 {
    font-size: 48px;
    font-weight: 700;
    margin: 0;
    margin-bottom: 0.25rem;
  }

  p {
    opacity: 0.6;
    font-size: 20px;
    font-weight: 300;
  }

  @media (max-width: 960px) {
    display: none;
    visibility: hidden;
  }
`

export const GrantsCard = styled(StyledCard)`
  width: 600px;
  alignItems: center;
  justifyContent: center;
  
  @media (max-width: 960px) {
    width: 325px;
  }
`

export const GrantCard = styled(StyledC)`
  width: 250px;
  position: absolute; 
  top: -1rem;
  right: 10rem;
  
  @media (max-width: 960px) {
    width: 250px;
    top: 23rem;
    right: 5rem;
  }
`


const EcosystemSection = () => {
  return (
    <StyledSection>
      <StyledItemRow>
        <span style={{ marginTop: '2rem' }}>
          <StyledSectionTitle>Your Keys, Your Coins - Secure</StyledSectionTitle>
          <SubTitle style={{ opacity: '0.6', marginBottom: '48px' }}>
          The Nerve Global wallet is a non-custodial hot wallet built in C++ that is run on the user’s device. 
          Nerve Global has no access to a user’s private keys. 
          The wallet performs ideal gas price discovery for transaction and gives access to the native gas and NERVE token.
          </SubTitle>
        </span>
        <AppsCard>
        </AppsCard>
      </StyledItemRow>
    </StyledSection>
  )
}


const TaskCreator = () => {
  return (
    <StyledSection>
      <StyledItemRow>
        <span>
          <StyledItemColumn style={{ marginTop: "-3rem", display: 'flex', flexDirection: 'column' }}>
            <Tab style={{ zIndex: "1", borderRadius: '20px' }} outlined>
              <div style={{ padding: '1rem' }}>
                <StyledBodySubTitle style={{ marginBottom: '0.25rem' }}>
                1. Receive a task
                </StyledBodySubTitle>
                <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
                Link your social media accounts to Nerve Global and receive personalized tasks directly from your community.
                </p>
              </div>
            </Tab>
          </StyledItemColumn>

          <StyledItemColumn style={{ display: 'flex', flexDirection: 'column' }}>
            <Tab style={{ zIndex: "1", borderRadius: '20px' }} outlined>
              <div style={{ padding: '1rem' }}>
                <StyledBodySubTitle style={{ marginBottom: '0.25rem' }}>
                2. Submit a proof
                </StyledBodySubTitle>
                <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
                Perform your task and upload a proof to your favorite social media platform.
                </p>
              </div>
            </Tab>
          </StyledItemColumn>

          <StyledItemColumn style={{ display: 'flex', flexDirection: 'column' }}>
            <Tab style={{ zIndex: "1", borderRadius: '20px' }} outlined>
              <div style={{ padding: '1rem' }}>
                <StyledBodySubTitle style={{ marginBottom: '0.25rem' }}>
                3. Get approved
                </StyledBodySubTitle>
                <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
                Every contributor is eligible to cast a vote on the completion of your task and decides on the disbursement of attached funds.
                </p>
              </div>
            </Tab>
          </StyledItemColumn>

          <StyledItemColumn style={{ display: 'flex', flexDirection: 'column' }}>
            <Tab style={{ zIndex: "1", borderRadius: '20px' }} outlined>
              <div style={{ padding: '1rem' }}>
                <StyledBodySubTitle style={{ marginBottom: '0.25rem' }}>
                4. Claim your funds
                </StyledBodySubTitle>
                <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
                All collected funds will be directly disbursed to your account - fully decentralized and routed through the blockchain.
                </p>
              </div>
            </Tab>
          </StyledItemColumn>

        </span>
        <HideSmall>
        <img style={{ position: "absolute", margin: "0 0 0 5rem", maxWidth: "35%" }} src={Mockup} />
        </HideSmall>
        </StyledItemRow>
    </StyledSection>
  )
}


const TaskSupporter = () => {
  return (
    <StyledSection>
      <StyledItemRow>
        <span>
          <StyledItemColumn style={{ marginTop: "-3rem", display: 'flex', flexDirection: 'column' }}>
            <Tab style={{ zIndex: "1", borderRadius: '20px' }} outlined>
              <div style={{ padding: '1rem' }}>
                <StyledBodySubTitle style={{ marginBottom: '0.25rem' }}>
                1. Create or join a task
                </StyledBodySubTitle>
                <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
                Search for family, friends or influencers to create personalized tasks. Set a time limit and attach an arbitrary value to it. Other users can join the task and attach further value to it.
                </p>
              </div>
            </Tab>
          </StyledItemColumn>

          <StyledItemColumn style={{ display: 'flex', flexDirection: 'column' }}>
            <Tab style={{ zIndex: "1", borderRadius: '20px' }} outlined>
              <div style={{ padding: '1rem' }}>
                <StyledBodySubTitle style={{ marginBottom: '0.25rem' }}>
                2. Wait for proof
                </StyledBodySubTitle>
                <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
                Wait for proof that the task has been completed.
                </p>
              </div>
            </Tab>
          </StyledItemColumn>

          <StyledItemColumn style={{ display: 'flex', flexDirection: 'column' }}>
            <Tab style={{ zIndex: "1", borderRadius: '20px' }} outlined>
              <div style={{ padding: '1rem' }}>
                <StyledBodySubTitle style={{ marginBottom: '0.25rem' }}>
                3. Approve
                </StyledBodySubTitle>
                <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
                Vote on a task and decide, if it has been completed. On a positive vote result, all funds are distributed to the task performer.
                </p>
              </div>
            </Tab>
          </StyledItemColumn>

          <StyledItemColumn style={{ display: 'flex', flexDirection: 'column' }}>
            <Tab style={{ zIndex: "1", borderRadius: '20px' }} outlined>
              <div style={{ padding: '1rem' }}>
                <StyledBodySubTitle style={{ marginBottom: '0.25rem' }}>
                4. Claim your refund (optional)
                </StyledBodySubTitle>
                <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
                If a task is rated negative, all participants will get their stake back (the previously collected fee is not returned).
                </p>
              </div>
            </Tab>
          </StyledItemColumn>

        </span>
        <HideSmall>
        <img style={{ position: "absolute", margin: "0 0 0 5rem", maxWidth: "35%" }} src={Mockup} />
        </HideSmall>
        </StyledItemRow>
    </StyledSection>
  )
}


const KeyAdvantagesBet = () => {
  return (
    <StyledSectionr>
            <HideSmall>
        <img style={{ position: "absolute", margin: "8rem 0 0 -40rem", maxWidth: "38%" }} src={Mockup1} />
        </HideSmall>
      <StyledItemRow>
        <span>
          <StyledSectionHeader style={{ fontFamily: "True"}}>{'BETS'}</StyledSectionHeader>

          <StyledItemColumn style={{ display: 'flex', flexDirection: 'column' }}>
            <TabRight style={{ zIndex: "1", borderRadius: '20px' }} outlined>
              <div style={{ padding: '1rem' }}>
                <StyledBodySubTitle style={{ marginBottom: '0.25rem' }}>
                1. Host a bet
                </StyledBodySubTitle>
                <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
                Enter a description and define two possible outcomes. You will receive a share of the total winnings as a remuneration for your betting service.
                </p>
              </div>
            </TabRight>
          </StyledItemColumn>

          <StyledItemColumn style={{ display: 'flex', flexDirection: 'column' }}>
            <TabRight style={{ zIndex: "1", borderRadius: '20px' }} outlined>
              <div style={{ padding: '1rem' }}>
                <StyledBodySubTitle style={{ marginBottom: '0.25rem' }}>
                2. Raise the stakes
                </StyledBodySubTitle>
                <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
                Anyone can join your bet with no limits. 
                </p>
              </div>
            </TabRight>
          </StyledItemColumn>

          <StyledItemColumn style={{ display: 'flex', flexDirection: 'column' }}>
            <TabRight style={{ zIndex: "1", borderRadius: '20px' }} outlined>
              <div style={{ padding: '1rem' }}>
                <StyledBodySubTitle style={{ marginBottom: '0.25rem' }}>
                3. Present the result
                </StyledBodySubTitle>
                <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
                You are in total control of your bet. Present the correct result and build up your reputation. All funds are automatically transferred to the winning party.
                </p>
              </div>
            </TabRight>
          </StyledItemColumn>

          <StyledItemColumn style={{ display: 'flex', flexDirection: 'column' }}>
            <TabRight style={{ zIndex: "1", borderRadius: '20px' }} outlined>
              <div style={{ padding: '1rem' }}>
                <StyledBodySubTitle style={{ marginBottom: '0.25rem' }}>
                4. Submit a proof
                </StyledBodySubTitle>
                <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
                Underpin your result with a proof uploaded to your favorite social media platform.
                </p>
              </div>
            </TabRight>
          </StyledItemColumn>
        </span>
        </StyledItemRow>
    </StyledSectionr>
  )
}


{/*const Spotlight = () => {
  return (
    <>
      <StyledSection>
        <StyledSectionHeader>{'SPOTLIGHT →'}</StyledSectionHeader>
        <StyledItemRow style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem 10rem 2rem 10rem'
            }}>
        <GrantsCard style={{ minHeight: "16rem", maxWidth: "50rem" }}>
            <StyledBodySubTitle style={{ fontSize: '1.125rem' }}>Latest Task</StyledBodySubTitle>
            <p style={{ fontSize: '20px', fontWeight: "600" }}>
            <ZTask />
            </p>
            <StyledItemRow>
            <Butt outlined>
              <p style={{ fontSize: '1.125rem' }}>For<TEarn /></p>
            </Butt>
            <p style={{ fontSize: '1.125rem', textAlign: "right", flex: "1" }}>USD</p>
            <Butt outlined>
              <p style={{ fontSize: '1.125rem' }}><TMoney/></p>
            </Butt>
            </StyledItemRow>
            
            
          </GrantsCard>

          <GrantsCard style={{ minHeight: "16rem", maxWidth: "50rem" }}>
            <StyledBodySubTitle style={{ fontSize: '1.125rem' }}>Latest Bet</StyledBodySubTitle>
            <p style={{ fontSize: '20px', fontWeight: "600" }}>
            <ZBet />
            </p>
            <StyledItemRow>
            <Butt outlined>
              <p style={{ fontSize: '1.125rem' }}>By<BEarn /></p>
            </Butt>
            <Butt outlined>
              <p style={{ fontSize: '1.125rem', textAlign: "right", flex: "1" }}>
                <BEarnTotal/>
                </p>
            </Butt>
            </StyledItemRow>
          </GrantsCard>
          
        </StyledItemRow>
      </StyledSection>
    </>
  )
}

const Ranking = () => {
  return (
    <>
      <StyledSection>
        <StyledSectionHeader>{'RANKING →'}</StyledSectionHeader>
        <StyledItemRow style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem 10rem 2rem 10rem'
            }}>

          <GrantsCard style={{ minHeight: "16rem", maxWidth: "50rem" }}>
            <StyledBodySubTitle style={{ fontSize: '1.125rem' }}>TOP EARNERS</StyledBodySubTitle>
            <p style={{ marginLeft: "2rem", fontSize: '18px', fontWeight: "600" }}>
            <StyledItemRow>
            <ZTopearn />
            <p style={{ textAlign: "right", flex: "1" }}>
            <ZTopearn1 />
            </p>
            </StyledItemRow>
            </p>
          </GrantsCard>

          <GrantsCard style={{ minHeight: "16rem", maxWidth: "50rem" }}>
            <StyledBodySubTitle style={{ fontSize: '1.125rem' }}>TOP SPENDERS</StyledBodySubTitle>
            <p style={{ marginLeft: "2rem", fontSize: '18px', fontWeight: "600" }}>
            <StyledItemRow>
              <ZTopspent />
              <p style={{ textAlign: "right", flex: "1" }}>
            <ZTopspent1 />
            </p>
            </StyledItemRow>
            </p>
          </GrantsCard>
          
        </StyledItemRow>
      </StyledSection>
    </>
  )
}
*/}

const DeveloperSection = props => {
  return (
    <>
      <StyledSection>
        <StyledItemRow style={{ marginTop: '2rem' }}>
          <GovernanceCard style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <span>
              <StyledSectionTitle style={{ fontSize: "35px", fontWeight: 600 }}>Governed By The Community</StyledSectionTitle>
              <StyledBodySubTitle style={{ fontSize: '20px' }}>
              <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
              The Nerve Global DAO is the central decision-making organ of the protocol. All proposals and executions are handled on chain.
                </p>
              </StyledBodySubTitle>
              <StyledBodySubTitle style={{ fontSize: '20px' }}>
              <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
              Voting rights in the DAO are granted exclusively to core community and team members in form of NFTs. 
              New voting rights are delegated every 3 months to the topmost participants in the protocol.
                </p>
              </StyledBodySubTitle>
            </span>

            <StyledButtonTop target="_blank"
            href="https://docs.nerveglobal.com/protocol/dao/overview" outlined>
              <p style={{ margin: 0 }}>Learn more </p>
            </StyledButtonTop>
          </GovernanceCard>
          <StyledItemColumn style={{ display: 'flex', flexDirection: 'column' }}>
            <Button style={{ borderRadius: '20px' }} target="_blank"
            href="https://docs.nerveglobal.com/sdk/automated-market-maker" outlined>
              <div style={{ padding: '1rem' }}>
                <StyledBodySubTitle style={{ marginBottom: '0.25rem' }}>
                Automated Market Maker <span style={{ fontSize: '16px' }}>↗</span>
                </StyledBodySubTitle>
                <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
                The Nerve Global AMM has a special feature where NERVE tokens can only be sold through the AMM, not purchased.
                </p>
              </div>
            </Button>
            <Button style={{ borderRadius: '20px' }} target="_blank"
            href="https://www.nerveglobal.com/token/" outlined>
              <div style={{ padding: '1rem' }}>
                <StyledBodySubTitle style={{ marginBottom: '0.25rem' }}>
                  Token Economy <span style={{ fontSize: '16px' }}>↗</span>
                </StyledBodySubTitle>
                <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400, maxWidth: "850px" }}>
                Nerve is a decentralized system operating on EVM based blockchains. The entire system is composed of independent smart contracts that operate independently and decentrally with mathematical security.
                </p>
              </div>
            </Button>
            <Button style={{ width: '100%', borderRadius: '20px' }} outlined>
              <div style={{ padding: '1rem' }}>
                <StyledBodySubTitle style={{ marginBottom: '0.25rem' }}>
                  Seasons <span style={{ fontSize: '16px' }}>(coming soon)</span>
                </StyledBodySubTitle>
                <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400, maxWidth: "850px" }}>
                The Nerve Global DAO awards unique NFTs to the top three users in both ranking categories (value spent, value earned), granting exclusive voting rights within the DAO.
                </p>
              </div>
            </Button>
          </StyledItemColumn>
        </StyledItemRow>
      </StyledSection>
    </>
  )
}