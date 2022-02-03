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
  border-radius: 12px;
  display: inline-block;
  font-weight: 500;
  width: 100%;
  width: min-content;
  white-space: nowrap;
  margin-left: 1rem;
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

  @media (max-width: 640px) {
    text-align: left;
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
  marginRight: '48px'
  text-align: left;
  @media (max-width: 640px) {
    font-size: 14px;
    text-align: center;
  }
`

const UniMobileImage = styled.div`
  display: none;
  position: absolute;
  top: 0;
  @media (max-width: 640px) {
    margin-top: -5rem;
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
    margin: 60px 0;
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
    margin-top: -5rem;
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
    margin-top: 12px;
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
  dayjs.extend(utc)
  const utcCurrentTime = dayjs()
  const utcOneDayBack = utcCurrentTime.subtract(1, 'day').unix()

  const { data: blockData } = useQuery(GET_BLOCK, {
    client: blockClient,
    variables: {
      timestamp: utcOneDayBack
    }
  })
  const oneDayBackBlock = blockData?.blocks?.[0]?.number
  const { data } = useQuery(APOLLO_QUERY, { pollInterval: 10000, client: client })

  const [oneDayResult, setOnedayResult] = useState()

  useEffect(() => {
    async function getData() {
      let result = await client.query({
        query: UNISWAP_GLOBALS_24HOURS_AGO_QUERY(oneDayBackBlock),

        fetchPolicy: 'cache-first'
      })
      if (result) {
        setOnedayResult(result?.data?.uniswapFactory)
      }
    }
    if (oneDayBackBlock) {
      getData()
    }
  }, [oneDayBackBlock])

  let UniStats = {
    key: function(n) {
      return this[Object.keys(this)[n]]
    }
  }

  if (data && oneDayResult) {
    const volume24Hour = parseFloat(data?.uniswapFactory?.totalVolumeUSD) - parseFloat(oneDayResult?.totalVolumeUSD)

    UniStats.volume = [
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: 'compact',
        compactDisplay: 'short'
      }).format(volume24Hour)
    ]
    UniStats.liquidity = [
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: 'compact',
        compactDisplay: 'short'
        // maximumSignificantDigits: 5
      }).format(data.uniswapFactory.totalLiquidityUSD)
    ]
    UniStats.exchanges = [Number.parseFloat(data?.uniswapFactory?.pairCount)]

    UniStats.ETHprice = [
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: 'compact',
        compactDisplay: 'short',
        maximumSignificantDigits: 5
      }).format(parseFloat(data?.bundle?.ethPrice)),
      '<small> Uni ETH Price </small>'
    ]
  }

  return (
    <Layout path={props.location.pathname}>
      

      <SEO title="Token" path={props.location.pathname} />
      <StyledAbout>
        <span style={{ marginTop: '5rem' }}>
          <Title style={{ fontFamily: "True", paddingBottom: '4rem' }}>
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
            <SubTitle style={{ maxWidth: "700px", margin: '0', opacity: '0.6' }}>
            Use Nerve Global and get rewarded with the NERVE token, a direct representation of a contribution to the ecosystem.
            </SubTitle>
            {/*<StyledTradeLink
            style={{
              textAlign: "center",
              minWidth: "8rem",
              color: 'white'
            }}
            target="_blank"
            href="/blog/nerve-token"
          >
            Learn more
          </StyledTradeLink>*/}
            </AutoColumn>
        </TokenSection>


        <StyledBody>        
          <StyledSectionHeader style={{ fontFamily: "True", marginTop: '5rem' }}>{'INTRODUCING THE NERVE TOKEN'}</StyledSectionHeader>
          <StyledItemRow style={{ alignItems: 'center', justifyContent: 'center', padding: '2rem 10rem 2rem 10rem' }}>
          <GrantsCard style={{ minHeight: "16rem", maxWidth: "28rem" }}>
            <StyledBodySubTitle>Zero initial supply</StyledBodySubTitle>
            <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
            No allocations, no investors, no private sale. The Nerve Token (NERVE) is launched without an initial token distribution. Only a small amount gets 
            minted and infinitely locked in the Nerve Decentralized Exchange.
            </p>
          </GrantsCard>
          <GrantsCard style={{ minHeight: "16rem", maxWidth: "28rem" }}>
            <StyledBodySubTitle>Deflationary</StyledBodySubTitle>
            <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
            New NERVE can only be minted in exchange for the current price in the native currency, which will be used to buy back and burn the token from the Nerve Decentralized Exchange.
            </p>
          </GrantsCard>
          <GrantsCard style={{ minHeight: "16rem", maxWidth: "28rem" }}>
            <StyledBodySubTitle>Community driven</StyledBodySubTitle>
            <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
            NERVE can only be generated by contributing to the Nerve ecosystem. Payed fees will be automatically used to mint and buy back and burn the token.
            </p>
          </GrantsCard>
        </StyledItemRow>
        <StyledSection>
          <StyledSectionHeader style={{ fontFamily: "True", marginTop: '5rem' }}>{'PLAY AND EARN'}</StyledSectionHeader>
          <SubTitle style={{ opacity: '0.6' }}>
          To ensure NERVE is held by those committed to the ecosystem.
          </SubTitle>
          <StyledItemRow style={{ alignItems: 'center', justifyContent: 'center', padding: '2rem 10rem 2rem 10rem' }}>
          <GrantsCard style={{ minHeight: "30rem", maxWidth: "25rem" }}>
            <StyledBodySubTitle>Task proposals</StyledBodySubTitle>
            <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
            In the process of creating a task, a 5% fee is deducted from the initial stake to prevent spamming and denial of service. 
            The initial stake of the task creator is obligatory as a minimum stake for all further participants.</p>
            <p style={{ textAlign: 'left', marginTop: '1rem', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
            At the same time, new NERVE are created, the quantity of which is derived from the current market price and the amount of the paid fee. 
            The creator or participant receives 75% of newly created NERVE according to the fee paid. 25% will accrue to the Nexus Foundation.</p>
          </GrantsCard>
          <GrantsCard style={{ minHeight: "30rem", maxWidth: "25rem" }}>
            <StyledBodySubTitle>Task completion</StyledBodySubTitle>
            <p style={{ textAlign: 'left', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
            After a positive consensus over the fulfillment of the task has been reached, a 5% fee is deducted from the final payout and used to generate new NERVE. 
            The performer receives 75% of the newly generated NERVE according to the paid fee. 25% will accrue to the Nexus Foundation. </p>
          </GrantsCard>
          <GrantsCard style={{ minHeight: "30rem", maxWidth: "25rem" }}>
            <StyledBodySubTitle>Bet hosting</StyledBodySubTitle>
            <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
            A fee of 10% is applied to all distributed winnings and are used to partially reimburse the bet creator for their service. 
            New NERVE are generated and the creator receives 75% according to the paid fee. 25% will accrue to the Nexus Foundation.
            </p>
          </GrantsCard>
        </StyledItemRow>
    </StyledSection>

      </StyledBody>
      <BG />
    </Layout>
  )
}

export default About
