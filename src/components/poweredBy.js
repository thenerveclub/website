import React from 'react'
import styled from 'styled-components'

import GoogleMaps from '../images/googlemaps.inline.svg'
import OpenAI from '../images/openai.inline.svg'
import UnrealEngine from '../images/unrealengine.inline.svg'

import Polygon from '../images/polygon.inline.svg'
import PolygonLogo from '../images/polygonlogo.inline.svg'

const StyledOpenAi = styled(OpenAI)`
  display: flex;
  margin: 0 auto 1rem auto;
  align-items: center;

  path {
    fill: ${({ theme }) => theme.textColor};
  }

  width: 100px;
  height: 100px;

  @media (max-width: 960px) {
    width: 75px;
    height: 75px;
  }
`

const StyledUnrealEngine = styled(UnrealEngine)`
  display: flex;
  margin: 0 auto 1rem auto;
  align-items: center;

  path {
    fill: ${({ theme }) => theme.textColor};
  }

  width: 100px;
  height: 100px;

  @media (max-width: 960px) {
    width: 75px;
    height: 75px;
  }
`

const StyledGoogleMaps = styled(GoogleMaps)`
  display: flex;
  margin: 0 auto 1rem auto;
  align-items: center;

  path {
    fill: ${({ theme }) => theme.textColor};
  }

  width: 100px;
  height: 100px;

  @media (max-width: 960px) {
    width: 75px;
    height: 75px;
  }
`

const StyledPolygon = styled(PolygonLogo)`
  display: flex;
  margin: 0 auto 1rem auto;
  align-items: center;

  width: 100px;
  height: 100px;

  @media (max-width: 960px) {
    width: 75px;
    height: 75px;
  }
`

const StyledFooter = styled.footer`
  display: flex;
  margin: 5rem auto 0 auto;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 960px) {
    display: flex;
  }
`

const StyledSocialRow = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: o auto 0 auto;

  p {
    font-size: 20px;
    font-weight: 300;
  }

  & > *:not(:first-of-type) {
    margin-top: 0;
    margin-left: 15rem;
  }

  @media (max-width: 960px) {
    flex-direction: column;

    p {
      font-size: 16px;
      font-weight: 300;
    }

    & > *:not(:first-of-type) {
      margin-top: 1rem;
      margin-left: 0;
    }
  }

  @media (max-width: 640px) {
    flex-direction: column;

    p {
      font-size: 16px;
      font-weight: 300;
    }

    & > *:not(:first-of-type) {
      margin-top: 1rem;
      margin-left: 0;
    }
  }
`

const PoweredBy = () => {
  return (
    <StyledFooter>
      <StyledSocialRow>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/nerveglobal_">
          <StyledOpenAi />
          <p style={{ textAlign: 'center' }}>OpenAI</p>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/nerveglobal">
          <StyledUnrealEngine />
          <p style={{ textAlign: 'center' }}>Unreal Engine</p>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/nerveglobal">
          <StyledPolygon />
          <p style={{ textAlign: 'center' }}>Polygon</p>
        </a>
        <a target="_blank" rel="noreferrer" href="https://discord.gg/Xuh5enTNB6">
          <StyledGoogleMaps />
          <p style={{ textAlign: 'center' }}>Google Maps</p>
        </a>
      </StyledSocialRow>
    </StyledFooter>
  )
}
export default PoweredBy
