import React from 'react'
import styled from 'styled-components'

import uni from '../images/uni.svg'
import AppsImage from '../images/apps.png'
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

const Title = styled.h1`
  margin-bottom: 4rem;
  font-size: 72px;

  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 1200px;

  @media (max-width: 960px) {
    margin-top: 0;
    font-size: 2rem;
    visibility: hidden;
  }
  @media (max-width: 640px) {
    margin-top: 0;
    font-size: 2rem;
    visibility: hidden;
  }
`

const HideSmall = styled.span`
  @media (max-width: 960px) {
    display: none;
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

const StyledButtonTop = styled.a`
  padding: 0.25rem 0.75rem;
  text-align: center;
  justify-content: center; 
  align-items: center;
  background-color: ${({ theme }) => theme.textColor};
  text-decoration: none;
  display: inline-block;
  font-weight: 500;
  font-size: 16px;
  width: 100%;
  width: 7.5rem;
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
    margin: 0 auto 0 auto;
    align-items: center;
  }

  @media (max-width: 640px) {
    margin: 0 auto 0 auto;
    align-items: center;
  }
`


const About = props => {

  return (
    <Layout path={props.location.pathname}>
      

      <SEO title="Token" path={props.location.pathname} />
      <StyledAbout>
        <span style={{ marginTop: '6rem' }}>
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
          <StyledButtonTop target="_blank" rel="noreferrer" href="https://docs.nerveglobal.com/sdk/token-economy/abstract">
              <span>Learn more</span>
            </StyledButtonTop>
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
            <StyledBodySubTitle>Dare proposals</StyledBodySubTitle>
            <SubText>
            In the process of creating a dare, a 5% fee is deducted from the initial stake to prevent spamming and denial of service. 
            The initial stake of the dare creator is obligatory as a minimum stake for all further participants.</SubText>
            <SubText style={{ marginTop: "1rem" }}>
            At the same time, new NERVE are created, the quantity of which is derived from the current market price and the amount of the paid fee. 
            The participants receive 60% of newly created NERVE according to the fee paid.</SubText>
          </GrantsCard>
          <GrantsCard style={{ minHeight: "31rem", maxWidth: "28rem" }}>
            <StyledBodySubTitle>Dare completion</StyledBodySubTitle>
            <SubText>
            Positive consensus: In this outcome, a 5% fee is deducted from the final payout. The player receives 95.00% of the total stake.</SubText>
            <SubText style={{ marginTop: "1rem" }}>
            At the same time, new NERVE are created, the quantity of which is derived from the current market price and the amount of the paid fee. 
            The player receives 60% of newly created NERVE according to the fee paid.</SubText>
            <SubText style={{ marginTop: "1rem" }}>
            Negative consensus: In this outcome, all participants will receive their stake back. The previously collected fee is not returned. </SubText>
          </GrantsCard>
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

