import React, { useState } from 'react'
import styled from 'styled-components'

import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'

import TopEarnerName from '../components/seasons/topEarnerName'
import TopEarnerSocials from '../components/seasons/topEarnerSocials'
import Earned from '../components/seasons/earned'

import TopSpenderName from '../components/seasons/topSpenderName'
import TopSpenderSocials from '../components/seasons/topSpenderSocials'
import Spent from '../components/seasons/spent'



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
    padding: 1rem;
    padding-bottom: 8rem;
  }

  @media (max-width: 640px) {
    padding: 1rem;
    padding-bottom: 8rem;
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

const SectionHeaderMobile = styled.h1`
  width: 100%;

  @media (max-width: 960px) {
    margin: 2rem 0 0 0;
    font-size: 2rem;
    color: white;
    a {
      color: white;
  }

  @media (max-width: 640px) {
    margin: 2rem 0 0 0;
    font-size: 2rem;
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

const GrantsCard = styled(StyledCard)`
  width: 1200px;
  align-items: center;
  justify-content: center;
  margin: 0 auto 5rem auto;
  
  @media (max-width: 960px) {
    width: 100%;
  }
`

const Seasons = props => {
  const [active, setActive] = useState([]);
  
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
            <a>Top Earners</a>
        </SectionHeaderMobile>
          <TopEarners props={props} />

          <SectionHeaderMobile style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',}}>
            <a>Top Spenders</a>
        </SectionHeaderMobile>
          <TopSpenders props={props} />
      </StyledBody>
      <BG />
  </Layout>
  )
}

export default Seasons



const TopEarners = () => {
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


const TopSpenders = () => {
  return (
  <StyledSection>
    <StyledItemRow>
      <GrantsCard>
        <StyledItemRowIntern>
          <TopSpenderName/>
          <TopSpenderSocials/>
          <Spent/>
        </StyledItemRowIntern>
      </GrantsCard>
    </StyledItemRow>
  </StyledSection>
  )
}