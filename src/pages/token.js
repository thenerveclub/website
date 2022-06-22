import React, { useState, useEffect } from 'react'

import styled from 'styled-components'

import uni from '../images/uni.svg'
import Grafik from '../images/Grafik.svg'

import { Button } from '../components/button'
import gql from 'graphql-tag'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { useQuery } from '@apollo/react-hooks'
import { client, blockClient } from '../apollo/client'
import AppsImage from '../images/apps.png'

import { Link } from 'gatsby'

import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'

import { TabRight } from '../components/tabRight'
import Distribution from '../images/distribution.png'

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

const StyledTradeLink = styled.a`
  padding: 0.25rem 0.75rem;
  background-color: ${({ theme }) => theme.textColor};
  text-decoration: none;
  color: ${({ theme }) => theme.invertedTextColor};
  display: inline-block;
  font-weight: 500;
  width: 100%;
  width: min-content;
  white-space: nowrap;
  border: 1px solid transparent;
  box-shadow: ${({ theme }) => theme.shadows.small};
  background: ${({ theme, open, showBG }) => (showBG && !open ? theme.backgroundColor : 'none')};
	border-bottom: 1px solid ${({ theme }) => theme.buttonBorder};
  border-image: linear-gradient(var(--angle), aqua, aqua, magenta, magenta) 1;
  text-align: center;
	
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
    margin: 0 auto 0 auto;
    text-align: center;
  }

  @media (max-width: 640px) {
    margin: 0 auto 0 auto;
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
  margin-top: -2rem;
  margin-bottom: 4rem;
  font-size: 72px;

  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 1200px;
  /* text-align: center; */
  @media (max-width: 960px) {
    font-size: 2rem;
    visibility: hidden;
  }
  @media (max-width: 640px) {
    font-size: 2rem;
    visibility: hidden;
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

const StyledBodySubTitle = styled.h2`
  max-width: 800px;
  line-height: 150%;
  font-weight: 400;
  text-align: left;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    text-align: center;
  }
`


const SubText = styled.h2`
  text-align: left; 
  margin: 0; 
  opacity: 0.6; 
  font-size: 16px; 
  line-height: 1.5;
  font-weight: 400;

  @media (max-width: 960px) {
    text-align: center; 
    margin: 0; 
    opacity: 0.6; 
    font-size: 14px; 
    font-weight: 400;
  }

  @media (max-width: 640px) {
    text-align: center; 
    margin: 0; 
    opacity: 0.6; 
    font-size: 14px; 
    font-weight: 400;
  }
`

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;

  @media (max-width: 640px) {
    margin: 0;
  }
`

const SubTitle = styled.div`
  max-width: 725px;
  font-size: 20px;
  font-weight: 400;
  marginRight: '48px';
  text-align: left;

  @media (max-width: 960px) {
    width: 300px;
    margin-top: -5rem;
    font-size: 14px;
    marginRight: 0;
    text-align: center;
  }

  @media (max-width: 640px) {
    width: 300px;
    margin-top: -5rem;
    font-size: 14px;
    marginRight: 0;
    text-align: center;
  }
`

const UniMobileImage = styled.div`
  display: none;
  position: absolute;
  top: 0;
  @media (max-width: 640px) {
    margin-top: -10rem;
    display: initial;
    max-width: 10rem;
  }
`

const TokenSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin: 80px 0;
  position: relative;
  @media (max-width: 640px) {
    padding-top: 220px;
    margin-bottom: -1rem;
  }
`

const Tit = styled.div`
color: inherit;
{/*font-weight: 500;*/}
text-rendering: optimizeLegibility;
font-size: 32px;
line-height: 1.1;
  @media (max-width: 640px) {
    font-size: 30px;
    text-align: center;
    margin-top: -10rem;
  }
`

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

const StyledSectionTitle = styled.h3`
  max-width: 960px;
  line-height: 140%;
  font-size: 32px;
  @media (max-width: 640px) {
    text-align: left;
  }
`

const StyledItemRow = styled.nav`
  display: flex;
  flex-direction: column;

  margin: 0rem;
  & > *:not(:first-of-type) {
    margin-top: 8px;
  }
  @media (min-width: 960px) {
    flex-direction: row;
    & > * {
      margin-bottom: 12px;
    }
    & > *:not(:first-of-type) {
      margin-top: 0;
      margin-left: 12px;
    }
  }
`

const AutoColumn = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-row-gap: ${({ gap }) => (gap === 'sm' && '8px') || (gap === 'md' && '12px') || (gap === 'lg' && '24px') || gap};
  justify-items: ${({ justify }) => justify && justify};
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
    margin-top: -80px;
    margin-bottom: 12px;
    margin-right: 0px;
    max-width: unset;
  }
`

export const GET_BLOCK = gql`
  query blocks($timestamp: Int!) {
    blocks(first: 1, orderBy: timestamp, orderDirection: asc, where: { timestamp_gt: $timestamp }) {
      id
      number
      timestamp
    }
  }
`

export const ETH_PRICE = block => {
  const queryString = block
    ? `
    query bundles {
      bundles(where: { id: ${1} } block: {number: ${block}}) {
        id
        ethPrice
      }
    }
  `
    : ` query bundles {
      bundles(where: { id: ${1} }) {
        id
        ethPrice
      }
    }
  `
  return gql(queryString)
}

const APOLLO_QUERY = gql`
  {
    uniswapFactory(id: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f") {
      totalVolumeUSD
      totalLiquidityUSD
      pairCount
      txCount
    }
    bundle(id: 1) {
      ethPrice
    }
  }
`

const PageTitle = styled.div`
  font-size: 18px;
  font-weight: 200;
  color: rgba(255, 255, 255, 0.6);
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
    text-align: left;
    text-align: center;
  }
`

export const UNISWAP_GLOBALS_24HOURS_AGO_QUERY = block => {
  let queryString = `
  query uniswapFactory {
    uniswapFactory(id: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f", block: { number: ${block} }) {
      totalVolumeUSD
      totalLiquidityUSD
      pairCount
    
    }
  }
  `

  return gql(queryString)
}

const About = props => {

  return (
    <Layout path={props.location.pathname}>
      

      <SEO title="Token" path={props.location.pathname} />
      <StyledAbout>
        <span style={{ marginTop: '9rem' }}>
          <Title style={{ fontFamily: "True" }}>
          TOKEN
          </Title>
          </span>
      </StyledAbout>


          
          <TokenSection>
          <HideSmall>
          <img style={{ maxWidth: "15rem", marginRight: "3rem" }} src={uni} width="100%" />
          </HideSmall>
          <UniMobileImage>
          <img style={{ maxWidth: "15rem" }} src={uni} width="100%" />
          </UniMobileImage>
          <AutoColumn gap="20px">
            <Tit style={{ fontFamily: "True"}}>Nerve Token</Tit>
            <SubTitle style={{ maxWidth: "400px", opacity: '0.6' }}>
            Use Nerve Global and get rewarded with the NERVE token, a direct representation of a contribution to the ecosystem.
            </SubTitle>
            <StyledTradeLink
            style={{
              minWidth: "8rem",
              color: 'white'
            }}
            target="_blank"
            href="https://docs.nerveglobal.com/sdk/token-economy/abstract"
          >
            Learn more
          </StyledTradeLink>
            </AutoColumn>
        </TokenSection>


        <StyledBody>        
          <StyledSectionHeader style={{ fontFamily: "True", marginTop: '12rem' }}>{'INTRODUCING THE NERVE TOKEN'}</StyledSectionHeader>
          <StyledItemRow style={{ alignItems: 'center', justifyContent: 'center', padding: '2rem 10rem 2rem 10rem' }}>
          <GrantsCard style={{ minHeight: "16rem", maxWidth: "28rem" }}>
            <StyledBodySubTitle>Fixed initial supply</StyledBodySubTitle>
            <SubText>
            The total supply of NERVE is fixed and is indefinitely locked into the internal AMM. The emission rate is based solely on usage of the protocol and directly proportional to collected fees.
            </SubText>
          </GrantsCard>
          <GrantsCard style={{ minHeight: "16rem", maxWidth: "28rem" }}>
            <StyledBodySubTitle>Burn function</StyledBodySubTitle>
            <SubText>
            Collected fees in the native token of the blockchain are used to buy back the NERVE token through the internal AMM. These tokens are then burned.
            </SubText>
          </GrantsCard>
          <GrantsCard style={{ minHeight: "16rem", maxWidth: "28rem" }}>
            <StyledBodySubTitle>Predictable emission rate</StyledBodySubTitle>
            <SubText>
            The emission rate is based solely on usage of the protocol and directly proportional to collected fees.
            </SubText>
          </GrantsCard>
        </StyledItemRow>
        
        <StyledSection>
          <StyledSectionHeader style={{ fontFamily: "True", marginTop: '9rem' }}>{'Fee STRUCTURE'}</StyledSectionHeader>
          <StyledItemRow style={{ alignItems: 'center', justifyContent: 'center', padding: '2rem 10rem 2rem 10rem' }}>
          <GrantsCard style={{ minHeight: "31rem", maxWidth: "28rem" }}>
            <StyledBodySubTitle>Task proposals</StyledBodySubTitle>
            <SubText>
            In the process of creating a task, a 5% fee is deducted from the initial stake to prevent spamming and denial of service. 
            The initial stake of the task creator is obligatory as a minimum stake for all further participants.</SubText>
            <SubText style={{ marginTop: "1rem" }}>
            At the same time, new NERVE are created, the quantity of which is derived from the current market price and the amount of the paid fee. 
            The creator or participant receives 60% of newly created NERVE according to the fee paid.</SubText>
          </GrantsCard>
          <GrantsCard style={{ minHeight: "31rem", maxWidth: "28rem" }}>
            <StyledBodySubTitle>Task completion</StyledBodySubTitle>
            <SubText>
            Positive consensus: In this outcome, a 5% fee is deducted from the final payout. The creator of the task receives 95.00% of the total stake.</SubText>
            <SubText style={{ marginTop: "1rem" }}>
            At the same time, new NERVE are created, the quantity of which is derived from the current market price and the amount of the paid fee. 
            The performer receives 60% of newly created NERVE according to the fee paid.</SubText>
            <SubText style={{ marginTop: "1rem" }}>
            Negative consensus: In this outcome, all participants, as well as the creator of the task, will receive their stake back. The previously collected fee is not returned. </SubText>
          </GrantsCard>
          {/*
          <GrantsCard style={{ minHeight: "30rem", maxWidth: "28rem" }}>
            <StyledBodySubTitle>Bet hosting</StyledBodySubTitle>
            <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
            A fee of 10% is applied to all distributed winnings and are used to partially reimburse the bet creator for their service. 
            New NERVE are generated and the creator receives 75% according to the paid fee. 25% will accrue to the Nexus Foundation.
            </p>
          </GrantsCard>
        */}
        </StyledItemRow>
    </StyledSection>

    <StyledSection>
          <StyledSectionHeader style={{ fontFamily: "True", marginTop: '9rem' }}>{'FUNDS DISTRIBUTION'}</StyledSectionHeader>
          <StyledItemRow style={{ alignItems: 'center', justifyContent: 'center', padding: '0 10rem 0 10rem' }}>

          <KeyAdvantagesBet props={props} />
          
        </StyledItemRow>
    </StyledSection>

      </StyledBody>
      <BG />
    </Layout>
  )
}

export default About


const KeyAdvantagesBet = () => {
  return (
    <StyledSectionr>
            <HideSmall>
        <img style={{ position: "absolute", margin: "-5rem 0 0 -45rem", maxWidth: "38%" }} src={Distribution} />
        </HideSmall>
      <StyledItemRow>
        <span>
          <StyledItemColumn style={{ display: 'flex', flexDirection: 'column' }}>
            <TabRight style={{ zIndex: "1", borderRadius: '20px' }} outlined>
              <div style={{ padding: '1rem' }}>
                <StyledBodySubTitleDown style={{ marginBottom: '0.25rem' }}>
                60% to Community
                </StyledBodySubTitleDown>
              </div>
            </TabRight>
          </StyledItemColumn>

          <StyledItemColumn style={{ display: 'flex', flexDirection: 'column' }}>
            <TabRight style={{ zIndex: "1", borderRadius: '20px' }} outlined>
              <div style={{ padding: '1rem' }}>
                <StyledBodySubTitleDown style={{ marginBottom: '0.25rem' }}>
                20% to the DAO
                </StyledBodySubTitleDown>
              </div>
            </TabRight>
          </StyledItemColumn>

          <StyledItemColumn style={{ display: 'flex', flexDirection: 'column' }}>
            <TabRight style={{ zIndex: "1", borderRadius: '20px' }} outlined>
              <div style={{ padding: '1rem' }}>
                <StyledBodySubTitleDown style={{ marginBottom: '0.25rem' }}>
                10% to Presale Investors
                </StyledBodySubTitleDown>
              </div>
            </TabRight>
          </StyledItemColumn>

          <StyledItemColumn style={{ display: 'flex', flexDirection: 'column' }}>
            <TabRight style={{ zIndex: "1", borderRadius: '20px' }} outlined>
              <div style={{ padding: '1rem' }}>
                <StyledBodySubTitleDown style={{ marginBottom: '0.25rem' }}>
                10% to the Team
                </StyledBodySubTitleDown>
              </div>
            </TabRight>
          </StyledItemColumn>
        </span>
        </StyledItemRow>
    </StyledSectionr>
  )
}

const StyledSectionr = styled.section`
  display: flex;
  flex-direction: right;
  margin: 10rem 0 10rem 50rem;

  @media (max-width: 960px) {
  display: flex;
  flex-direction: column;
  margin: 0;
  }

  @media (max-width: 640px) {
  display: flex;
  flex-direction: column;
  margin: 0;
  }
`

const StyledItemColumn = styled.nav`
  display: flex;
  flex-direction: column;
  & > *:not(:last-of-type) {
    margin-bottom: 12px;
  }

  @media (max-width: 960px) {
    width: 350px;
    }
  
    @media (max-width: 640px) {
    width: 325px;
    }
  `

  const StyledBodySubTitleDown = styled.h2`
  max-width: 800px;
  line-height: 150%;
  font-weight: 400;
  text-align: left;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 20px;
  }

  @media (max-width: 640px) {
    text-align: center;
    font-size: 20px;
  }
`

