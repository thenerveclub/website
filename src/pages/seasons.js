import React, { useState } from 'react'
import styled from 'styled-components'

import BG from '../components/bg'
import SEO from '../components/seo'
import Layout from '../layouts'

import TopEarners from '../components/seasons/topEarners'
import TopSpenders from '../components/seasons/topSpenders'

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
  flex-direction: row;
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
    flex-direction: column;
  }

  @media (max-width: 640px) {
    padding: 1rem;
    padding-bottom: 8rem;
    flex-direction: column;
  }
`

const StyledBodyIntern = styled.div`
  position: relative;
  margin: 0 auto 0 auto;
`

const StyledButton = styled.h1`
  padding: 0.25rem 0.75rem;
  background-color: ${({ theme }) => theme.textColor};
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  margin: 0 auto 0 auto;
  width: 10rem;
  border: 1px solid transparent;
  box-shadow: ${({ theme }) => theme.shadows.small};
  background: ${({ theme, open, showBG }) => (showBG && !open ? theme.backgroundColor : 'none')};
	border-bottom: 1px solid ${({ theme }) => theme.buttonBorder};
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

  transition: background-color 0.25s ease;
  }

  @media (max-width: 960px) {
    margin: 0 0.5rem 1rem 0.5rem;
    font-size: 16px;
    width: auto;
  }

  @media (max-width: 640px) {
    margin: 0 0.5rem 1rem 0.5rem;
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

const Seasons = props => {
  const [active, setActive] = useState('TopEarners')

  return (
    <Layout path={props.location.pathname}>
      <SEO title="Seasons" path={props.location.pathname} />
      <StyledAbout>
        <span style={{ marginTop: '5rem' }}>
          <Title style={{ fontFamily: 'True' }}>CLOSED BETA SEASON</Title>
        </span>
      </StyledAbout>
      <StyledBody>
        <SectionHeaderMobile
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
          }}
        >
          <nav>
            <StyledButton onClick={() => setActive('TopEarners')}>Top Earners</StyledButton>
            <StyledButton onClick={() => setActive('TopSpenders')}>Top Spenders</StyledButton>
          </nav>
        </SectionHeaderMobile>
        <div>
          {active === 'TopEarners' && <TopEarners props={props} />}
          {active === 'TopSpenders' && <TopSpenders props={props} />}
        </div>
      </StyledBody>
      <BG />
    </Layout>
  )
}

export default Seasons
