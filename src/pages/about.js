import React from 'react'
import styled from 'styled-components'

import graph from '../images/graph.png'
import blockland from '../images/blockland.png'

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
    text-align: center;
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
  margin-bottom: 10rem;
  font-size: 72px;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 1200px;

  @media (max-width: 960px) {
    margin-top: 2.5rem;
    margin-bottom: 4rem;
    font-size: 2rem;
    text-align: center;
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

const HideSmall = styled.span`
  @media (max-width: 960px) {
    display: none;
  }
`

const StyledBodySubTitle = styled.h2`
  font-weight: 400;
  text-align: center;
  align-items: center;
  justify-content: center;

  p {
    margin-top: 1rem;
    text-align: center;
    width: 100%;
  }

  @media (max-width: 960px) {
    text-align: center;

    p {
      text-align: center;
    }
  }

  @media (max-width: 640px) {
    text-align: center;

    p {
      text-align: center;
    }
  }
`

const StyledSectionTitle = styled.h3`
  max-width: 975px;
  line-height: 140%;
  font-size: 32px;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 20px;
  }

  @media (max-width: 640px) {
    text-align: center;
    font-size: 20px;
  }
`

const SubTitle = styled.div`
  max-width: 930px;
  font-size: 20px;
  font-weight: 400;
  text-align: left;
  margin-right: 48px;

  @media (max-width: 960px) {
    font-size: 14px;
    text-align: center;
    margin-right: 0;
  }

  @media (max-width: 640px) {
    font-size: 14px;
    text-align: center;
    margin-right: 0;
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
  width: 100%;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 0 auto 0 auto;

  @media (max-width: 960px) {
    width: 100%;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`

const StyledItemRow = styled.nav`
  display: flex;
  flex-direction: row;
  margin: 2rem auto 5rem auto;
  max-width: 1200px;

  & > *:not(:first-of-type) {
    margin-left: 12px;
  }

  @media (max-width: 960px) {
    flex-direction: column;

    & > * {
      margin-bottom: 8px;
    }

    & > *:not(:first-of-type) {
      margin-top: 0;
      margin-left: 0;
    }
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

const StyledSectionHeader = styled.h1`
  font-size: 25px;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  font-weight: 500;
  margin-top: 3rem;

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
      <SEO title="About" path={props.location.pathname} />
      <StyledAbout>
        <span style={{ marginTop: '5rem' }}>
          <Title style={{ fontFamily: 'True' }}>ABOUT</Title>
          <StyledSectionTitle>It is our goal to demonstrate and instantiate trust between people.</StyledSectionTitle>
          <SubTitle style={{ opacity: '0.6' }}>
            We envision new global markets that allow the exchange of value between advanced and emerging economies,
            redistributing value in the exchange for novel kinds of services and accelerating global digitalization. We
            firmly believe in money as a language for the communication of values and therefore think universal access
            to sound digital money is a right to free speech.
          </SubTitle>

          <StyledSectionFlex id="about" style={{ flexDirection: 'column' }}>
            <div style={{ display: 'flex', width: '100%', marginTop: '5rem' }}>
              <StyledButtonTop target="_blank" rel="noreferrer" href="https://docs.nerveglobal.com">
                <text>Docs</text>
              </StyledButtonTop>
            </div>
          </StyledSectionFlex>
        </span>
      </StyledAbout>

      <StyledBody>
        <HideSmall>
          <DeveloperSection props={props} />
          <DeveloperSection2 props={props} />
        </HideSmall>

        <StyledSectionHeader style={{ fontFamily: 'True' }}>{'RECOGNITION'}</StyledSectionHeader>
        <StyledItemRow>
          <GrantsCard style={{ minHeight: '37rem', maxWidth: '20rem' }}>
            <img src={graph} width="35%" />
            <StyledBodySubTitle>The Graph Foundation</StyledBodySubTitle>
            <p>Dapps & Subgraphs - $7.5K Grant</p>
            <p style={{ marginBottom: '3rem' }}>
              Grant applicants came from Portugal, Canada, Japan, Korea, Poland, the US and more. Each applicant was
              assessed based on the project’s expected impact, community feedback, relative significance and urgency in
              the ecosystem.
            </p>
            <StyledButtonTop target="_blank" rel="noreferrer" href="https://www.nerveglobal.com/blog/thegraph/">
              <span>Learn more</span>
            </StyledButtonTop>
          </GrantsCard>
          <GrantsCard style={{ minHeight: '37rem', maxWidth: '20rem' }}>
            <img src={blockland} width="75%" />
            <StyledBodySubTitle>Blockland Solutions</StyledBodySubTitle>
            <p>Pitch Competition - $4K Grant</p>
            <p style={{ marginBottom: '6rem' }}>
              3rd out of 47 international teams. Prizes awarded by Jon Pinney, Kohrman Jackson & Krantz LLP, and Bob
              Sopko (Launchnet at Case Western Reserve University)
            </p>
            <StyledButtonTop
              target="_blank"
              rel="noreferrer"
              href="https://www.nerveglobal.com/blog/blockland-solutions/"
            >
              <span>Learn more</span>
            </StyledButtonTop>
          </GrantsCard>
        </StyledItemRow>

        <StyledSectionHeader style={{ fontFamily: 'True' }}>{'CONTACT'}</StyledSectionHeader>

        <StyledSectionFlex id="contact" style={{ flexDirection: 'column' }}>
          <p>
            To get in touch, please email{' '}
            <a target="_blank" rel="noreferrer" href={'mailto:business@nerveglobal.com'}>
              business@nerveglobal.com
            </a>
          </p>

          <p>
            We encourage anyone facing technical issues to join our active community and explore the{' '}
            <a target="_blank" rel="noreferrer" href={'https://docs.nerveglobal.com'}>
              documentation
            </a>{' '}
            site.
          </p>
          <HideSmall>
            <div style={{ display: 'flex', width: '100%', margin: 0 }}>
              <StyledButtonTop target="_blank" rel="noreferrer" href="https://discord.gg/Xuh5enTNB6">
                <span>Discord</span>
              </StyledButtonTop>
              <StyledButtonTop
                style={{ marginLeft: '12px' }}
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/nerveglobal_"
              >
                <span>Twitter</span>
              </StyledButtonTop>
              <StyledButtonTop
                style={{ marginLeft: '12px' }}
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/nerveglobal/"
              >
                <span>LinkedIn</span>
              </StyledButtonTop>
            </div>
          </HideSmall>
        </StyledSectionFlex>

        <StyledSectionHeader style={{ fontFamily: 'True' }}>{'BRAND ASSETS'}</StyledSectionHeader>

        <StyledSectionFlex id="brand" style={{ flexDirection: 'column' }}>
          <p>
            Download the logo and other brand assets{' '}
            <a target="_blank" rel="noreferrer" href={'https://github.com/nerveglobal/brand-assets'}>
              here
            </a>
            .
          </p>
          <StyledButtonTop
            style={{ fontSize: '15px' }}
            target="_blank"
            rel="noreferrer"
            href="https://github.com/nerveglobal/brand-assets"
          >
            <span>Brand Assets</span>
          </StyledButtonTop>
        </StyledSectionFlex>
      </StyledBody>
      <BG />
    </Layout>
  )
}

export default About

const DeveloperSection = () => {
  return (
    <StyledSection>
      <StyledSectionHeader style={{ fontFamily: 'True' }}>{'ADVANTAGES'}</StyledSectionHeader>
      <StyledItemRow style={{ alignItems: 'center', justifyContent: 'center' }}>
        <GrantsCard style={{ minHeight: '11rem', minWidth: '20rem' }}>
          <StyledBodySubTitle>
            ONBOARDING
            <p style={{ opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
              Educating users about crypto through seamless integration.
            </p>
          </StyledBodySubTitle>
        </GrantsCard>
        <GrantsCard style={{ minHeight: '11rem', minWidth: '20rem' }}>
          <StyledBodySubTitle>
            FIRST TO MARKET
            <p style={{ opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>For consumer-based funding proposals.</p>
          </StyledBodySubTitle>
        </GrantsCard>
        <GrantsCard style={{ minHeight: '11rem', minWidth: '20rem' }}>
          <StyledBodySubTitle>
            SMALL PROJECTS
            <p style={{ opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
              Step-by-step funding for specific tasks.
            </p>
          </StyledBodySubTitle>
        </GrantsCard>
      </StyledItemRow>
    </StyledSection>
  )
}

const DeveloperSection2 = () => {
  return (
    <StyledSection>
      <StyledItemRow
        style={{ alignItems: 'center', justifyContent: 'center', marginTop: '-5rem', padding: '1rem auto 1rem auto' }}
      >
        <GrantsCard style={{ minHeight: '10rem', minWidth: '23rem' }}>
          <StyledBodySubTitle>
            EARN CRYPTO
            <p style={{ opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
              Global access to crowdfunding without a bank account.
            </p>
          </StyledBodySubTitle>
        </GrantsCard>
        <GrantsCard style={{ minHeight: '10rem', minWidth: '23rem' }}>
          <StyledBodySubTitle>
            EASE OF USE
            <p style={{ opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
              Receive a dare, submit a proof, get approved, claim funds.
            </p>
          </StyledBodySubTitle>
        </GrantsCard>
        <GrantsCard style={{ minHeight: '10rem', minWidth: '23rem' }}>
          <StyledBodySubTitle>
            INSTANT FUNDING
            <p style={{ opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
              Funds are transferred within minutes, rather than days.
            </p>
          </StyledBodySubTitle>
        </GrantsCard>
        <GrantsCard style={{ minHeight: '10rem', minWidth: '23rem' }}>
          <StyledBodySubTitle>
            ON DELIVERY
            <p style={{ opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
              Watchers approve dare completion before disbursement of funds.
            </p>
          </StyledBodySubTitle>
        </GrantsCard>
      </StyledItemRow>
    </StyledSection>
  )
}
