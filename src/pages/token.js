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
  @media (max-width: 640px) {
    font-size: 14px;
  }
`

const UniMobileImage = styled.div`
  display: none;
  position: absolute;
  top: 0;
  @media (max-width: 640px) {
    display: initial;
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
font-weight: 500;
text-rendering: optimizeLegibility;
font-size: 32px;
line-height: 1.1;
  @media (max-width: 640px) {
    font-size: 20px;
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
  font-size: 20px;
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
  }
  @media (max-width: 640px) {
    width: 100%;
    font-weight: 400;
    margin-top: 5rem;
    text-align: left;
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
            <Tit>The Nerve Token</Tit>
            <SubTitle style={{ maxWidth: "700px", textAlign: 'left', margin: '0', opacity: '0.6' }}>
              Contribute to Nerve, an incentivized open ecosystem, and get rewarded with NRV tokens. In the near future, NRV holders will govern the ecosystem through an on-chain governance process.
            </SubTitle>
            <Button target="_blank" rel="noreferrer" href="/blog/nerve-token" outlined>
              <p style={{ margin: 0 }}>Learn more ↗</p>
            </Button>
            </AutoColumn>
        </TokenSection>


        <StyledBody>        
          <StyledSectionHeader style={{ fontFamily: "True", marginTop: '5rem' }}>{'INTRODUCING NERVE TOKEN →'}</StyledSectionHeader>
          <StyledItemRow style={{ alignItems: 'center', justifyContent: 'center', padding: '2rem 10rem 2rem 10rem' }}>
          <GrantsCard style={{ minHeight: "16rem", maxWidth: "25rem" }}>
            <StyledBodySubTitle>Governance</StyledBodySubTitle>
            <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
            Use your NERVE to vote on the future of the ecosystem. Proposals will be published on Snapshot, and will relate to the future development and expansion.
            </p>
          </GrantsCard>
          <GrantsCard style={{ minHeight: "16rem", maxWidth: "25rem" }}>
            <StyledBodySubTitle>Revenue staking</StyledBodySubTitle>
            <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
            All fees paid are sent to the staking reward pool. Users can earn a proportional share of this rewards pool by staking their NRV.
            </p>
          </GrantsCard>
          <GrantsCard style={{ minHeight: "16rem", maxWidth: "25rem" }}>
            <StyledBodySubTitle>Play to Earn</StyledBodySubTitle>
            <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
            To reward those who help Nerve Global grow, we have incorporated a Play to Earn system.
            </p>
          </GrantsCard>
        </StyledItemRow>

      <StyledSection style={{ marginTop: '10rem' }}>
      <StyledItemRow>
        <span style={{ marginTop: '-60px', marginBottom: '80px' }}>
          <StyledSectionHeader style={{ fontFamily: "True", marginTop: '5rem' }}>{'REVENUE STAKING →'}</StyledSectionHeader>
          <SubTitle style={{ opacity: '0.6', textAlign: 'left', marginRight: '48px' }}>
          Tokens are automatically staked if you have participated in the ecosystem.
          </SubTitle>
        </span>
      </StyledItemRow>


    </StyledSection>

    <img style={{ marginTop: "-3rem", maxWidth: "100%", alignItems: 'center', justifyContent: 'center' }} src={Grafik} width="100%" />


        <StyledSection>
          <StyledSectionHeader style={{ fontFamily: "True", marginTop: '5rem' }}>{'PLAY TO EARN →'}</StyledSectionHeader>
          <SubTitle style={{ opacity: '0.6', textAlign: 'left', marginRight: '48px' }}>
          To ensure NERVE is held by those who are committed to the ecosystem.
          </SubTitle>
          <StyledItemRow style={{ alignItems: 'center', justifyContent: 'center', padding: '2rem 10rem 2rem 10rem' }}>
          <GrantsCard style={{ minHeight: "30rem", maxWidth: "25rem" }}>
            <StyledBodySubTitle>Task creator</StyledBodySubTitle>
            <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
            In the process of creating a task, 5.00% fee is deducted from the initial stake. 
            The initial stake of the task creator is obligatory for all further participants as a minimum stake.</p>
            <p style={{ textAlign: 'left', marginTop: '1rem', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
            At the same time, new NERVE tokens are created, the quantity of which is derived from the current market price and the amount of the fee paid.
            The participant receives 75.00% of newly created NERVE tokens according to the fee paid.
            25.00% will accrue to NexusShares.</p>
          </GrantsCard>
          <GrantsCard style={{ minHeight: "30rem", maxWidth: "25rem" }}>
            <StyledBodySubTitle>Bet creator</StyledBodySubTitle>
            <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
            The bet creator receives NERVE tokens when the bet is closed, calculated based 
            on the current market price and the fee paid. Thereby 75.00% of the newly created tokens go to the bet creator and 25.00% to NexusShares.
            </p>
          </GrantsCard>
          <GrantsCard style={{ minHeight: "30rem", maxWidth: "25rem" }}>
            <StyledBodySubTitle>Participants</StyledBodySubTitle>
            <p style={{ textAlign: 'left', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
            <p style={{fontWeight: "bold", marginBottom: '0'}}>Join task</p> 
            5.00% fee is deducted from the stake. 
            <p style={{fontWeight: "bold", marginTop: '1rem'}}>Join bet</p> 
            No minimum stake is set for the bets. As soon as the bet is closed and finished, the winners can pay out their stake + winnings. 
            10.00% of the winnings go to the NexusBurn Contract. 
            </p>
          </GrantsCard>
        </StyledItemRow>
          <StyledItemRow style={{ alignItems: 'center', justifyContent: 'center', padding: '2rem 10rem 2rem 10rem' }}>
          <GrantsCard style={{ maxHeight: "6rem", minWidth: "50rem" }}>
            <StyledBodySubTitle style={{ textAlign: 'center'}}>Two possible outcomes will occur in the tasks.</StyledBodySubTitle>
            </GrantsCard>
        </StyledItemRow>
          <StyledItemRow style={{ alignItems: 'center', justifyContent: 'center', padding: '2rem 10rem 2rem 10rem' }}>
          <GrantsCard style={{ minHeight: "20rem", maxWidth: "25rem" }}>
            <StyledBodySubTitle>Positive</StyledBodySubTitle>
            <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
            The task is evaluated positively by the majority. In this outcome, the creator of the task receives 95.00% of the total stake. 
            5.00% will go to NexusBurn.
            </p>
          </GrantsCard>
          <GrantsCard style={{ minHeight: "20rem", maxWidth: "25rem" }}>
            <StyledBodySubTitle>Negative</StyledBodySubTitle>
            <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
            The task is rated negative by the majority. In this case, all participants, as well as the creator of the task, 
            will receive their stake back. The previously collected fee will not be returned.
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
