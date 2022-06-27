import React, { useState } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'
import { Butt } from '../components/butt'
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

import ZTask from '../ZTask'
import TEarn from '../TEarn'
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
  padding-top: 2rem;


  @media (max-width: 960px) {
    flex-direction: column;
    grid-template-columns: 1fr;
    margin-top: 0rem;
    padding-top: 1rem;
  }
`

const Title = styled.h1`
  font-size: 72px;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 1200px;
  
  @media (max-width: 960px) {
    margin-top: 2.5rem;
    margin-bottom: 4rem;
    font-size: 2rem;
    text-align: center;
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
      <SEO title="SEASONS" path={props.location.pathname} />
      <StyledAbout>
        <span style={{ marginTop: '5rem' }}>
          <Title style={{ fontFamily: "True" }}>
            SEASONS SPOTLIGHT
          </Title>
        </span>
      </StyledAbout>
      <StyledBody>

        <Spotlight props={props} />

          <SectionHeader style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              padding: '1rem 0 2rem 0',
              fontFamily: "True"}}>
          <a>{'RANKING'}</a>
          </SectionHeader>
        <Ranking props={props} />

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


const Spotlight = () => {
  return (
    <>
      <StyledSection>
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
            <ZTask />
            </p>
            <StyledItemRow>
            <Butt outlined>
              <p style={{ fontSize: '1.125rem' }}>By<TEarn /></p>
            </Butt>
            <Butt outlined>
              <p style={{ fontSize: '1.125rem', textAlign: "right", flex: "1" }}>
                <hallo/>
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