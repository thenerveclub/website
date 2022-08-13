import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'
import True from '../styles/fontTrue.css'

import { useDarkMode } from '../contexts/Application'

import AppsImage from '../images/apps.jpg'


import TopEarnerName from '../components/seasons/topEarnerName'
import TopEarnerSocials from '../components/seasons/topEarnerSocials'
import Earned from '../components/seasons/earned'



const StyledAbout = styled.div`
  display: grid;
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
  text-align: center;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  
  @media (max-width: 960px) {
    margin-top: 2.5rem;
    margin-bottom: 4rem;
    font-size: 2rem;
    text-align: center;
  }
`

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 960px) {

  }
`

const StyledBodySubTitle = styled.h2`
  max-width: 720px;
  line-height: 150%;
  font-weight: 400;
  text-align: left;

  @media (max-width: 640px) {
    text-align: center;
  }
`

const StyledItemRow = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 960px) {
   
  }
`

const StyledItemRowIntern = styled.nav`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  font-weight: 500;
  justify-content: space-between;
  width: 95%;
  margin: 0 auto 0 auto;

  
  @media (max-width: 960px) {
    width: 100%;
    font-size: 12px;

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

const StyledButton = styled.h1`
  padding: 0.25rem 0.75rem;
  background-color: ${({ theme }) => theme.textColor};
  text-decoration: none;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  margin: 3rem 1rem 0 1rem;
  width: 9rem;
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
    margin: 5rem 0.5rem 1rem 0.5rem;
    font-size: 16px;
    width: auto;
  }
  @media (max-width: 640px) {
    margin: 5rem 0.5rem 1rem 0.5rem;
    font-size: 16px;
    width: auto;
  }
`

const IndexPage = props => {
  const isDark = useDarkMode()
  const [active, setActive] = useState("Player");

  return (
    <Layout path={props.location.pathname}>
      <SEO title="SEASONS" path={props.location.pathname} />
      <StyledAbout>
        <span style={{ marginTop: '5rem' }}>
          <Title style={{ fontFamily: "True" }}>
            CLOSED BETA SEASON
          </Title>
        </span>
      </StyledAbout>
      <StyledBody>

      <SectionHeaderMobile style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',}}>
          <nav>
            <StyledButton onClick={() => setActive("Player")}>Top Earners</StyledButton>
            <StyledButton onClick={() => setActive("Watcher")}>Top Spenders</StyledButton>
          </nav>
          </SectionHeaderMobile>
          <div>
          {active === "Player" && <Player props={props} />}
          {active === "Watcher" && <Watcher props={props} />}
          </div>

      </StyledBody>
      <BG />
    </Layout>
  )
}

export default IndexPage



const SectionHeaderMobile = styled.h1`
  width: 100%;

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
  margin-top: 1rem;

  @media (max-width: 960px) {
    margin-top: 1rem;
  }

  @media (max-width: 640px) {
    margin-top: 1rem;
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
  width: 1200px;
  align-items: center;
  justify-content: center;
  margin: 0 auto 5rem auto;
  
  @media (max-width: 960px) {
    width: 100%;
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

const Player = () => {
  return (
      <StyledSection>
        <StyledItemRow>

          <GrantsCard>
            <StyledItemRowIntern>
            <TopEarnerName/>
            <TopEarnerSocials/>
            <Earned/>
            </StyledItemRowIntern>
          </GrantsCard>
          
        </StyledItemRow>
      </StyledSection>
  )
}


const Watcher = () => {
  return (
      <StyledSection>
        <StyledItemRow>

          <GrantsCard>
            <StyledBodySubTitle style={{ fontSize: '1.125rem' }}>TOP SPENDERS</StyledBodySubTitle>

          </GrantsCard>
          
        </StyledItemRow>
      </StyledSection>
  )
}