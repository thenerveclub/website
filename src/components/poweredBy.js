import React from 'react'
import styled from 'styled-components'

import GoogleMaps from '../images/googlemaps.inline.svg'
import OpenAI from '../images/openai.inline.svg'
import UnrealEngine from '../images/unrealengine.inline.svg'

import Polygon from '../images/polygon.inline.svg'
import PolygonLogo from '../images/polygonlogo.inline.svg'

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

const StyledPolygon = styled(PolygonLogo)`
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
  margin: 1rem auto 0 auto;
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
  margin: o auto 0 auto;

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
      margin-left: 2rem;
    }
  }
`

const PoweredBy = () => {
  return (
    <StyledFooter>
      <p>Powered by</p>
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
