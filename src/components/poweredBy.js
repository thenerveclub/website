import React from 'react'
import styled from 'styled-components'

import GoogleMaps from '../images/googlemaps.inline.svg'
import OpenAI from '../images/openai.inline.svg'
import UnrealEngine from '../images/unrealengine.inline.svg'

import Alchemy from '../images/alchemy.inline.svg'
import Graph from '../images/graph.inline.svg'
import Polygon from '../images/polygon.inline.svg'

const StyledOpenAi = styled(OpenAI)`
  display: flex;
  margin: 0 auto 0.25rem auto;
  align-items: center;

  path {
    fill: ${({ theme }) => theme.textColor};
  }

  width: 40px;
  height: 40px;

  @media (max-width: 960px) {
    width: 35px;
    height: 35px;
  }
`

const StyledUnrealEngine = styled(UnrealEngine)`
  display: flex;
  margin: 0 auto 0.25rem auto;
  align-items: center;

  path {
    fill: ${({ theme }) => theme.textColor};
  }

  width: 40px;
  height: 40px;

  @media (max-width: 960px) {
    width: 35px;
    height: 35px;
  }
`

const StyledGoogleMaps = styled(GoogleMaps)`
  display: flex;
  margin: 0 auto 0.25rem auto;
  align-items: center;

  path {
    fill: ${({ theme }) => theme.textColor};
  }

  width: 40px;
  height: 40px;

  @media (max-width: 960px) {
    width: 35px;
    height: 35px;
  }
`

const StyledPolygon = styled(Polygon)`
  display: flex;
  margin: 0 auto 0.25rem auto;
  align-items: center;

  width: 40px;
  height: 40px;

  @media (max-width: 960px) {
    width: 35px;
    height: 35px;
  }
`

const StyledAlchemy = styled(Alchemy)`
  display: flex;
  margin: 0 auto 0.25rem auto;
  align-items: center;

  width: 40px;
  height: 40px;

  @media (max-width: 960px) {
    width: 35px;
    height: 35px;
  }
`

const StyledGraph = styled(Graph)`
  display: flex;
  margin: 0 auto 0.25rem auto;
  align-items: center;

  width: 40px;
  height: 40px;

  @media (max-width: 960px) {
    width: 35px;
    height: 35px;
  }
`

const StyledFooter = styled.footer`
  display: flex;
  margin: 0 auto 0 auto;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;

  p {
    font-size: 16px;
    font-weight: 300;
  }

  @media (max-width: 960px) {
    display: flex;
    align-items: center;

    p {
      font-size: 16px;
      font-weight: 300;
    }
  }
`

const StyledSocialRow = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: -1rem auto 0 auto;

  p {
    font-size: 14px;
    font-weight: 300;
  }

  & > *:not(:first-of-type) {
    margin-top: 0;
    margin-left: 3rem;
  }

  @media (max-width: 960px) {
    flex-direction: row;

    p {
      display: none;
      visibility: hidden;
    }

    & > *:not(:first-of-type) {
      margin-left: 1.5rem;
    }
  }
`

const PoweredBy = () => {
  return (
    <StyledFooter>
      <p>Powered by</p>
      <StyledSocialRow>
        <a target="_blank" rel="noreferrer" href="https://openai.com">
          <StyledOpenAi />
          <p style={{ textAlign: 'center' }}>OpenAI</p>
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.unrealengine.com">
          <StyledUnrealEngine />
          <p style={{ textAlign: 'center' }}>Unreal Engine</p>
        </a>
        <a target="_blank" rel="noreferrer" href="https://polygon.technology">
          <StyledPolygon />
          <p style={{ textAlign: 'center' }}>Polygon</p>
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/about/#!/">
          <StyledGoogleMaps />
          <p style={{ textAlign: 'center' }}>Google Maps</p>
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.alchemy.com">
          <StyledAlchemy />
          <p style={{ textAlign: 'center' }}>Alchemy</p>
        </a>
        <a target="_blank" rel="noreferrer" href="https://thegraph.com">
          <StyledGraph />
          <p style={{ textAlign: 'center' }}>The Graph</p>
        </a>
      </StyledSocialRow>
    </StyledFooter>
  )
}
export default PoweredBy
