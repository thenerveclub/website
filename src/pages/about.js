import React, { useState, useEffect } from 'react'

import styled from 'styled-components'

import gql from 'graphql-tag'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { useQuery } from '@apollo/react-hooks'
import { client, blockClient } from '../apollo/client'

import { Link } from 'gatsby'

import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'
import AppsImage from '../images/apps.png'

const StyledAbout = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px;
  justify-content: space-between;
  padding: 0 2rem;
  padding-bottom: 4rem;
  margin-bottom: 4rem;
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
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
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
    max-width: 700px;
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

const StyledSection = styled.section`
display: flex;
flex-direction: column;
margin: 2rem 0;

@media (max-width: 640px) {
  margin: 0;
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
  max-width: 720px;
  line-height: 150%;
  font-weight: 400;
  text-align: left;

  @media (max-width: 640px) {
    text-align: left;
  }
`

const StyledSectionTitle = styled.h3`
  max-width: 975px;
  line-height: 140%;
  font-size: 32px;
  @media (max-width: 640px) {
    text-align: left;
  }
`

const SubTitle = styled.div`
  max-width: 930px;
  font-size: 20px;
  font-weight: 400;
  @media (max-width: 640px) {
    font-size: 14px;
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

const StyledSectionHeader = styled.h1`
font-size: 20px;
white-space: wrap;
overflow-wrap: normal;
max-width: 900px;
font-weight: 500;
margin-top: 5rem;

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

export const AppsCard = styled(StyledCard)`
  background: url(${AppsImage});
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 12px;
  width: 100%;
  max-height: 290px;
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

      <SEO title="About" path={props.location.pathname} />
      <StyledAbout>
        <span style={{ marginTop: '5rem' }}>
          <Title style={{ paddingBottom: '4rem' }}>
            ABOUT
          </Title>

          <StyledSectionTitle>A sustainable and engaging future that is controlled and driven - by the people.</StyledSectionTitle>
          <SubTitle style={{ opacity: '0.6', textAlign: 'left', marginRight: '48px' }}>
          We create global markets that allow the exchange of value between advanced and emerging economies, redistributing value and accelerating global digitalization. 
          We firmly believe in money as a language for the communication of values and therefore think free access to sound digital money is part of the right to free speech.
          </SubTitle>
          
          <StyledSectionFlex id="about" style={{ flexDirection: 'column' }}>
            <div style={{ display: 'flex', width: '100%', marginTop: "5rem" }}>
            <ExternalLink href={'https://docs.nerveglobal.com'}>Docs <span style={{ fontSize: '15px' }}>↗</span></ExternalLink>
              <InternalLink to="/whitepaper.pdf">Whitepaper <span style={{ fontSize: '15px' }}>↗</span></InternalLink>
            </div>
          </StyledSectionFlex>
          </span>
      </StyledAbout>
          
          <StyledBody>
          <Pillars data={data} props={props} />
          <EcosystemSection data={data} props={props} />
          
          

          <StyledSection style={{ marginTop: '10rem' }}>
          <StyledItemRow>
          <AppsCard>
          <h1>∞</h1>
          <p>Opportunities</p>
          </AppsCard>
          <span style={{ marginLeft: "2rem", marginTop: '-60px', marginBottom: '80px' }}>
          <StyledSectionHeader style={{ marginTop: '5rem' }}></StyledSectionHeader>
          <StyledSectionTitle>A decentralized application with a task and betting system.</StyledSectionTitle>
          <SubTitle style={{ opacity: '0.6', textAlign: 'left', marginRight: '48px' }}>
          For all kinds of content creators, it constitutes a service 
            to fund content which is in demand by consumers. From a financial point of view, our solution offers an alternative source of income. 
            Our model is sustainable and highly scalable with a possibility to support millions of users and thousands of creators around the world.
          </SubTitle>
          </span>
          </StyledItemRow>
          </StyledSection>

          <StyledSection>
          <StyledItemRow style={{ alignItems: 'center', justifyContent: 'center', margin: '10rem 0 5rem 0' }}>
          <StyledSectionTitle> A comprehensive, global discussion about blockchain technology is desperately needed - we`ll be the initiating factor.</StyledSectionTitle>
          </StyledItemRow>
          </StyledSection>
    
          <StyledSectionHeader>{'CONTACT →'}</StyledSectionHeader>

          <StyledSectionFlex id="contact" style={{ flexDirection: 'column' }}>
            <p>
              To get in touch, please email <a href="mailto:business@uniswap.com">business@nerveglobal.com</a>
            </p>

            <p>
              We encourage anyone facing issues with their wallet, transaction or Nerve related question to join our
              active community and explore the <a href="https://docs.nerveglobal.com">documentation</a> site.
            </p>

            <div style={{ display: 'flex', width: '100%', margin: 0 }}>
            <ExternalLink href={'https://t.me/nerveglobal'}>
                Telegram <span style={{ fontSize: '11px' }}>↗</span>
              </ExternalLink>
              <ExternalLink href={'https://discord.gg/VHZCy5Dx'}>
                Discord <span style={{ fontSize: '11px' }}>↗</span>
              </ExternalLink>
              <ExternalLink href={'https://twitter.com/nerveglobal_'}>
                Twitter <span style={{ fontSize: '11px' }}>↗</span>
              </ExternalLink>
              <ExternalLink href={'https://www.linkedin.com/company/nerveglobal/'}>
                LinkedIn <span style={{ fontSize: '11px' }}>↗</span>
              </ExternalLink>
            </div>
          </StyledSectionFlex>

          <StyledSectionHeader>{'BRAND ASSETS →'}</StyledSectionHeader>

      <StyledSectionFlex id="brand" style={{ flexDirection: 'column' }}>
        <p>
          Download the logo and other brand assets <a href="https://github.com/nerveglobal/brand-assets">here</a>.
        </p>
      </StyledSectionFlex>
        
      </StyledBody>
      <BG />
    </Layout>
  )
}

export default About




const Pillars = () => {
  return (
    <StyledSection>
      <StyledSectionHeader>{'Our pillars →'}</StyledSectionHeader>
      <StyledItemRow style={{ alignItems: 'center', justifyContent: 'center', padding: '2rem 10rem 2rem 10rem' }}>
        <GrantsCard style={{ minHeight: "10rem", maxWidth: "16rem" }}>
          <StyledBodySubTitle>Neutral</StyledBodySubTitle>
          
        </GrantsCard>
        <GrantsCard style={{ minHeight: "10rem", maxWidth: "16rem" }}>
          <StyledBodySubTitle>Decentralized</StyledBodySubTitle>
          
        </GrantsCard>
        <GrantsCard style={{ minHeight: "10rem", maxWidth: "16rem" }}>
          <StyledBodySubTitle>Open</StyledBodySubTitle>
          
        </GrantsCard>
        <GrantsCard style={{ minHeight: "10rem", maxWidth: "16rem" }}>
        <StyledBodySubTitle>Borderless</StyledBodySubTitle>
        </GrantsCard>
  </StyledItemRow>
  </StyledSection>
      )
}


const EcosystemSection = () => {
  return (
      <StyledSection style={{ marginTop: '10rem' }}>
        <StyledItemRow>
          <span style={{ marginTop: '-60px', marginBottom: '80px' }}>
            <StyledSectionHeader style={{ marginTop: '5rem' }}>{'NERVE ECOSYSTEM →'}</StyledSectionHeader>
            <StyledSectionTitle>We contribute to an open, inclusive and creative society.</StyledSectionTitle>
            <SubTitle style={{ opacity: '0.6', textAlign: 'left', marginRight: '48px' }}>
            People share unique adventures, experiences, educational content and much more with the world, which unlock a massively larger creative economy 
            than the one constrained by today’s platforms and their policies.
            This ecosystem will be built - by you.
            </SubTitle>
          </span>
          <AppsCard>
            <h1>∞</h1>
            <p>Opportunities</p>
          </AppsCard>
        </StyledItemRow>
      </StyledSection>
    )
  }