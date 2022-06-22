import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import gql from 'graphql-tag'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { useQuery } from '@apollo/react-hooks'
import { client, blockClient } from '../apollo/client'

import { Link } from 'gatsby'

import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'
import { Button } from '../components/button'

import Twitter from '../images/twitter.inline.svg'
import Github from '../images/github.inline.svg'
import Discord from '../images/discord.inline.svg'
import Linkedin from '../images/linkedin.inline.svg'


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

const StyledSectionFlex = styled.div`
  padding: 0 0 4rem 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  max-width: 960px;
  margin-left: 5rem;
  @media (max-width: 1024px) {
    padding: 1rem;
    margin-top: 0rem;
    flex-direction: ${({ wrapSmall }) => (!wrapSmall ? 'row' : 'column')};
  }
  @media (max-width: 960px) {
    padding: 1rem;
    margin-left: 0;
    margin-top: 0rem;
    width: 100%;
    flex-direction: column;
  }
  h1,
  h2 {
    max-width: 650px;
  }
  p {
    /* margin-bottom: 0.5rem; */
    max-width: 650px;
  }
`

const Numbers = styled(StyledSectionFlex)`
  @media (max-width: 960px) {
    display: none;
  }
`

const Title = styled.h1`
  /* font-size: 3rem; */
  margin-bottom: 4rem;
  font-size: 72px;

  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 1200px;
  /* text-align: center; */
  @media (max-width: 960px) {
    margin-top: -2rem;
    font-size: 2rem;
    text-align: center;
  }
`

const InternalLink = styled(Link)`
  border-radius: 8px;
  color: ${({ theme }) => theme.textColor};
  font-weight: 600;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  h2 {
    margin: 0;
  }

  transition: transform 0.45s cubic-bezier(0.19, 1, 0.22, 1);
  :hover {
    transform: translate3d(2px, 2px, 10px);
  }
`

const HideSmall = styled.span`
  @media (max-width: 960px) {
    display: none;
  }
`

const ExternalLink = styled.a`
  border-radius: 8px;
  color: ${({ theme }) => theme.textColor};
  font-weight: 600;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  h2 {
    margin: 0;
  }

  transition: transform 0.45s cubic-bezier(0.19, 1, 0.22, 1);
  :hover {
    transform: translate3d(2px, 2px, 10px);
  }
`

const StyledBodySub = styled.h2`
  max-width: 1000px;
  line-height: 150%;
  font-size: 20px;
  font-weight: 400;
  text-align: left;

  @media (max-width: 640px) {
    text-align: left;
  }
`

const StyledBodySubTitle = styled.h2`
  max-width: 800px;
  line-height: 150%;
  font-weight: 400;
  text-align: left;

  @media (max-width: 640px) {
    text-align: left;
  }
`

const StyledSectionHeader = styled.h1`
  font-size: 25px;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  font-weight: 500;
  margin-top: 10rem;

  a {
    color: ${({ theme }) => theme.textColor};
  }

  @media (max-width: 960px) {
    width: 100%;
    /* font-size: 2rem; */
    line-height: 2.5rem;
    max-width: 600px;
    margin-top: 5rem;
    text-align: center;
  }
  @media (max-width: 640px) {
    width: 100%;
    font-weight: 400;
    margin-top: 5rem;
    text-align: center;
  }
`

const StyledSectionTitle = styled.h3`
  max-width: 975px;
  line-height: 140%;
  font-size: 32px;

  @media (max-width: 640px) {
    font-size: 25px;
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 25px;
    text-align: center;
  }
`

const SubTitle = styled.div`
  max-width: 930px;
  font-size: 20px;
  font-weight: 400;
  text-align: left;
  margin-right: 48px;

  @media (max-width: 640px) {
    text-align: center;
    margin-right: 0;
    font-size: 14px;
  }

  @media (max-width: 640px) {
    text-align: center;
    margin-right: 0;
    font-size: 14px;
  }
`


const People = props => {

  const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.cardBG};
  border: 1px solid ${({ theme }) => theme.buttonBorder};
  padding: 2rem;
  border-radius: 24px;
  box-shadow: ${({ theme }) => theme.shadows.huge};
`

  const GrantsCard = styled(StyledCard)`
  width: 600px;
  alignItems: center;
  justifyContent: center;
  
  @media (max-width: 960px) {
    width: 325px;
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
      margin-bottom: 8px;
    }
    & > *:not(:first-of-type) {
      margin-top: 0;
      margin-left: 12px;
    }
  }
`

const StyledProductImage = styled(Img)`
  width: 100%;
  max-width: 120px;
  margin-bottom: 2rem;
  background-color: none;
  border-radius: 12px;
`

const StyledSocialRow = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  margin-bottom: 2rem;
  & > *:not(:first-of-type) {
    margin-top: 0;
    margin-left: 16px;
  }
`

const StyledLinkedIn = styled(Linkedin)`
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

  return (
    <Layout path={props.location.pathname}>
      
      <SEO title="Team" path={props.location.pathname} />
      <StyledAbout>
        <span style={{ marginTop: '5rem' }}>
          <Title style={{ fontFamily: "True", paddingBottom: '4rem'}}>
            Meet OUR TEAM
          </Title>
          <StyledSectionTitle>We exclusively work on unique ideas in the emerging sector of blockchain technology.</StyledSectionTitle>
          <SubTitle style={{ opacity: '0.6' }}>
          The core development team of Nerve Global has been operating together since early 2015. 
          With an initial focus on next-gen online multiplayer games, we ventured deep into complex networking and security structures and gained the necessary expertise 
          to handle critical value transactions on the blockchain. We brought our own computer game to the market in 2017 and collected valuable experience 
          in financial and organizational business operation.
          </SubTitle>
          <SubTitle style={{ marginTop: "1rem", marginBottom: "1rem", opacity: '0.6' }}>
          Every team member has been active as a blockchain consultant for more than three years and the overall knowledge about blockchain technology is exceptional. 
          To bring that into scope: at Nerve Global we are implementing our own code for blockchain interactions based on mathematical and cryptographic principles.
          </SubTitle>
          </span>
      </StyledAbout>


          <StyledBody>
          <StyledSectionHeader style={{ fontFamily: "True" }}>{'TEAM'}</StyledSectionHeader>
        <StyledItemRow style={{ alignItems: 'center', justifyContent: 'center', padding: '2rem 10rem 6rem 10rem' }}>
        <GrantsCard style={{ minHeight: "10rem", minWidth: "20rem" }}>
          {/*<img style={{ marginLeft: "5rem" }} src={phil} width="35%" />*/}
            <StyledBodySubTitle>Kurt Uhler</StyledBodySubTitle>
            <StyledSocialRow>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kurt-uhler/">
              <StyledLinkedIn />
            </a>
            <a target="_blank" rel="noreferrer" href="https://discord.gg/Xuh5enTNB6">
              <StyledDiscord />
            </a>
          </StyledSocialRow>
          </GrantsCard>
          <GrantsCard style={{ minHeight: "10rem", minWidth: "20rem" }}>
          {/*<img style={{ marginLeft: "5rem" }} src={christoph} width="35%" />*/}
            <StyledBodySubTitle>Christoph Könekamp</StyledBodySubTitle>
            <StyledSocialRow>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/christophkoenekamp/">
              <StyledLinkedIn />
            </a>
            <a target="_blank" rel="noreferrer" href="https://discord.gg/Xuh5enTNB6">
              <StyledDiscord />
            </a>
          </StyledSocialRow>
          </GrantsCard>
          <GrantsCard style={{ minHeight: "10rem", minWidth: "20rem" }}>
          {/*<img style={{ marginLeft: "5rem" }} src={phil} width="35%" />*/}
            <StyledBodySubTitle>Philip Georg</StyledBodySubTitle>
            <StyledSocialRow>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/philgeorg/">
              <StyledLinkedIn />
            </a>
            <a target="_blank" rel="noreferrer" href="https://discord.gg/Xuh5enTNB6">
              <StyledDiscord />
            </a>
          </StyledSocialRow>
          </GrantsCard>
          {/*<GrantsCard style={{ minHeight: "10rem", minWidth: "20rem" }}>
          <img style={{ marginLeft: "5rem" }} src={tim} width="35%" />
            <StyledBodySubTitle>Tim Lauterbach</StyledBodySubTitle>
            <StyledSocialRow>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tim-lauterbach-b747a191/">
              <StyledLinkedIn />
            </a>
            <a target="_blank" rel="noreferrer" href="https://discord.gg/Xuh5enTNB6">
              <StyledDiscord />
            </a>
          </StyledSocialRow>
          </GrantsCard>*/}
          <GrantsCard style={{ minHeight: "10rem", minWidth: "20rem" }}>
          {/*<img style={{ marginLeft: "5rem" }} src={jan} width="35%" />*/}
          <StyledBodySubTitle>Jan Ostertag</StyledBodySubTitle>
          <StyledSocialRow>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jan-ostertag-26046b165/">
              <StyledLinkedIn />
            </a>
            <a target="_blank" rel="noreferrer" href="https://discord.gg/Xuh5enTNB6">
              <StyledDiscord />
            </a>
          </StyledSocialRow>
          </GrantsCard>
        </StyledItemRow>
        
      </StyledBody>
      <BG />
    </Layout>
  )
}

export default People
