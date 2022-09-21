import React, { useState } from 'react'
import styled from 'styled-components'
import BG from '../components/bg'
import { Button } from '../components/button'
import ProtocolData from '../components/platformStats/protocolData'
import SEO from '../components/seo'
import Layout from '../layouts'
import True from '../styles/fontTrue.css'

import AppsImage from '../images/apps.jpg'
import appstore from '../images/appstore.svg'
import Discord from '../images/discord.inline.svg'
import Github from '../images/github.inline.svg'
import google from '../images/google.svg'
import kitty from '../images/kitty.png'
import Linkedin from '../images/linkedin.inline.svg'
import Twitter from '../images/twitter.inline.svg'

import create from '../images/CREATE.png'
import dashboard from '../images/DASHBOARD.png'
import global from '../images/GLOBAL.png'
import claimPlayer from '../images/PLAYER.png'
import prove from '../images/PROVE.png'
import vote from '../images/VOTE.png'
import wallet from '../images/WALLET.png'
import claimWatcher from '../images/WATCHER.png'

import PoweredBy from '../components/poweredBy'

import ActiveDareAmount from '../components/topActiveDare/activeDareAmount'
import ActiveDareDescription from '../components/topActiveDare/activeDareDescription'
import ActiveDaredUser from '../components/topActiveDare/activeDaredUser'
import Countdown from '../components/topActiveDare/activeDareEndTask'
import ActiveDareProof from '../components/topActiveDare/activeDareProof'

import AD from '../components/topActiveDare/activeDares'

import CompletedDareAmount from '../components/topCompletedDare/completedDareAmount'
import CompletedDareDescription from '../components/topCompletedDare/completedDareDescription'
import CompletedDaredUser from '../components/topCompletedDare/completedDaredUser'
import CompletedDareProof from '../components/topCompletedDare/completedDareProof'
import CompletedDareVotes from '../components/topCompletedDare/completedDareVotes'

const StyledAbout = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px;
  justify-content: space-between;
  padding: 0 2rem;
  padding-bottom: 4rem;
  margin-bottom: 10rem;
  padding-top: 2rem;

  @media (max-width: 960px) {
    display: none;
  }
`

const Title = styled.h1`
  padding: 2rem;
  margin-top: 5rem;
  margin-bottom: 0;
  font-family: True;
  font-size: 100px;
  text-transform: uppercase;
  background: -webkit-linear-gradient(to right, #de0ccf 0%, #00f2fc 70%);
  background: -moz-linear-gradient(to right, #de0ccf 0%, #00f2fc 70%);
  background: linear-gradient(to right, #de0ccf 0%, #00f2fc 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  max-width: 900px;
  @media (max-width: 960px) {
    font-size: 2rem;
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
  }
`

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  will-change: transform;
  align-items: flex-start;
  height: 23vh;

  @media (max-width: 640px) {
    height: 70vh;
  }

  @media (max-width: 440px) {
    height: 70vh;
  }
`

const StyledBodyTitle = styled.h1`
  font-size: 48px;
  white-space: wrap;
  overflow-wrap: normal;

  @media (max-width: 1024px) {
    margin: 2rem 0 0 0;
  }

  @media (max-width: 960px) {
    display: none;
  }

  @media (max-width: 640px) {
    display: none;
  }
`

const StyledBodySubTitle = styled.h2`
  max-width: 720px;
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

const StyledBodySubTitleWallet = styled.h2`
  max-width: 900px;
  line-height: 150%;
  font-weight: 400;
  text-align: left;

  @media (max-width: 960px) {
    margin-top: 1rem;
    text-align: center;
  }

  @media (max-width: 640px) {
    margin-top: 1rem;
    text-align: center;
  }
`

const StyledBodySubM = styled.h2`
  display: none;
  visibility: hidden;
  font-family: True;
  text-transform: uppercase;
  background: -webkit-linear-gradient(to right, #de0ccf 0%, #00f2fc 100%);
  background: -moz-linear-gradient(to right, #de0ccf 0%, #00f2fc 100%);
  background: linear-gradient(to right, #de0ccf 40%, #00f2fc 60%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 960px) {
    display: block;
    visibility: visible;
    width: 100%;
    margin: 3rem auto -5rem auto;
    padding: 1rem;
    font-weight: 500;
    text-align: center;
    font-size: 40px;
  }

  @media (max-width: 640px) {
    display: block;
    visibility: visible;
    width: 100%;
    margin: 3rem auto -5rem auto;
    padding: 1rem;
    font-weight: 500;
    text-align: center;
    font-size: 40px;
  }
`

const StyledBodySubT = styled.h2`
  width: 800px;
  font-size: 20px;

  @media (max-width: 960px) {
    text-align: center;
    margin: 0 auto 0 auto;
    width: 300px;
    font-size: 20px;
  }

  @media (max-width: 640px) {
    text-align: center;
    margin: 0 auto 0 auto;
    width: 300px;
    font-size: 20px;
  }
`

const StyledSectionTitle = styled.h3`
  max-width: 900px;
  line-height: 140%;
  font-size: 28px;

  @media (max-width: 960px) {
    width: vw;
    margin: 3rem auto 5rem auto;
    font-size: 20px;
    text-align: center;
  }

  @media (max-width: 640px) {
    max-width: vw;
    margin: 3rem auto 5rem auto;
    font-size: 20px;
    text-align: center;
  }
`

const StyledSectionTitleGradient = styled.h3`
  max-width: 900px;
  line-height: 140%;
  font-size: 35px;
  font-weight: 600;

  background: -webkit-linear-gradient(to right, #de0ccf 0%, #00f2fc 100%);
  background: -moz-linear-gradient(to right, #de0ccf 0%, #00f2fc 100%);
  background: linear-gradient(to right, #de0ccf 0%, #00f2fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  width: 600px;

  @media (max-width: 960px) {
    width: vw;
    margin: 0 auto 0.5rem auto;
    font-size: 22px;
    text-align: center;
    width: auto;
  }

  @media (max-width: 640px) {
    max-width: vw;
    margin: 0 auto 0.5rem auto;
    font-size: 22px;
    text-align: center;
    width: auto;
  }
`

const StyledSocialRow = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 3rem;

  & > *:not(:first-of-type) {
    margin-top: 0;
    margin-left: 25px;
  }

  @media (max-width: 960px) {
    margin: 2rem auto 1rem auto;
    font-weight: 500;
    align-items: center;
    font-size: 32px;
  }

  @media (max-width: 640px) {
    margin: 2rem auto 1rem auto;
    font-weight: 500;
    align-items: center;
    font-size: 32px;
  }
`

const StyledSocialRowSM = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;

  & > *:not(:first-of-type) {
    margin-top: 0;
    margin-left: 25px;
  }

  @media (max-width: 960px) {
    margin: 0 auto 2rem auto;
    font-weight: 500;
    align-items: center;
    font-size: 32px;
  }

  @media (max-width: 640px) {
    margin: 0 auto 2rem auto;
    font-weight: 500;
    align-items: center;
    font-size: 32px;
  }
`

const StyledSocialRowButtons = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 0;

  & > *:not(:first-of-type) {
    margin-top: 0;
    margin-left: 15px;
  }

  @media (max-width: 960px) {
    margin: 1rem auto 2rem auto;
    font-weight: 500;
    align-items: center;
    font-size: 32px;
  }

  @media (max-width: 640px) {
    margin: 1rem auto 2rem auto;
    font-weight: 500;
    align-items: center;
    font-size: 32px;
  }
`

const StyledSocialRowL = styled.nav`
  display: none;
  visibility: hidden;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: row;
    margin-top: -3rem;

  & > *:not(:first-of-type) {
    margin-top: 0;
    margin-left: 16px;
  }
`

const StyledItemRow = styled.nav`
  display: flex;
  flex-direction: row;
  margin: 0 auto 0 auto;

  & > *:not(:first-of-type) {
    margin-left: 12px;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    & > * {
      margin-top: 1px;
      margin-bottom: 1px;
    }
    & > *:not(:first-of-type) {
      margin-top: 0;
      margin-left: 0;
    }
  }
`

const StyledItemRowPlayerWatcher = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: start;

  & > *:not(:first-of-type) {
    margin-top: 12px;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`

const StyledItemColumn = styled.nav`
  display: flex;
  flex-direction: column;
  margin-left: 12px;

  & > *:not(:last-of-type) {
    margin-bottom: 12px;
  }

  @media (max-width: 960px) {
    margin-left: 0;
  }
`

const StyledTwitter = styled(Twitter)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  width: 24px;
  height: 24px;

  @media (max-width: 960px) {
    width: 20px;
    height: 20px;
  }
`

const StyledDiscord = styled(Discord)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  width: 24px;
  height: 24px;

  @media (max-width: 960px) {
    width: 20px;
    height: 20px;
  }
`

const StyledGithub = styled(Github)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  width: 24px;
  height: 24px;

  @media (max-width: 960px) {
    width: 20px;
    height: 20px;
  }
`

const StyledLinkedIn = styled(Linkedin)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  width: 24px;
  height: 24px;

  @media (max-width: 960px) {
    width: 20px;
    height: 20px;
  }
`

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.cardBG};
  border: 1px solid ${({ theme }) => theme.buttonBorder};
  padding: 2rem;
  border-radius: 24px;
  box-shadow: ${({ theme }) => theme.shadows.huge};
`

const StyledC = styled.div`
  border-radius: 24px;
`

const HideSmall = styled.span`
  @media (max-width: 960px) {
    display: none;
  }
`

const StyledButton = styled.h1`
  padding: 0.25rem 1rem;
  background-color: ${({ theme }) => theme.textColor};
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  margin: 3rem 1rem 0 1rem;
  width: 10rem;
  border: 1px solid transparent;
  background: none;
  border-image: linear-gradient(var(--angle), aqua, aqua, magenta, magenta) 1;
	
	animation: 15s rotate linear infinite;
  cursor: pointer;
}

@keyframes rotate {
	to {
		--angle: 360deg;
	}
}

  transition: background-color 0.25s ease;
  }

  @media (max-width: 960px) {
    margin: 0 0.5rem 3rem 0.5rem;
    font-size: 16px;
    width: 7.5rem;
  }
  @media (max-width: 640px) {
    margin: 0 0.5rem 3rem 0.5rem;
    font-size: 16px;
    width: 7.5rem;
  }
`

const StyledButtonTop = styled.a`
  padding: 0.25rem 0.75rem;
  background-color: ${({ theme }) => theme.textColor};
  text-decoration: none;
  display: inline-block;
  font-weight: 500;
  font-size: 18px;
  width: 100%;
  width: min-content;
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
    font-size: 14px;
  }

  @media (max-width: 640px) {
    margin: 0 auto 0 auto;
    align-items: center;
  }
`

const StyledTradeLink = styled.a`
  width: 12rem;
  align-items: left;

  @media (max-width: 960px) {
    width: 100%;
    margin: 0 auto 0 auto;
    align-items: center;
    justify-content: center;
  }
`

const IndexPage = props => {
  const [active, setActive] = useState('Player')
  const [activeDare, setActiveDare] = useState('TopActiveDare')

  return (
    <Layout path={props.location.pathname}>
      <SEO title="Home" path={props.location.pathname} description={'Do. You. Dare?'} />

      <StyledAbout>
        <Title>Do You Dare ?</Title>
      </StyledAbout>

      <StyledBody>
        <StyledBodySubM>
          {'Do'} <br />
          {'You'} <br />
          {'Dare?'}
        </StyledBodySubM>
        <StyledTitle>
          <StyledBodyTitle>
            <span style={{ fontFamily: 'True', fontWeight: 200 }}>NERVE GLOBAL</span>
          </StyledBodyTitle>
          <StyledBodySubT>{'A game of dares.  Watchers pay to watch - Players play to win.'}</StyledBodySubT>
          <StyledSocialRowButtons>
            <StyledTradeLink target="_blank" href="https://apps.apple.com/de/app/nerve-global/id1500517863">
              <img src={appstore} width="100%" />
            </StyledTradeLink>

            <StyledTradeLink
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.academy.nerve&hl=en&gl=US"
            >
              <img src={google} width="100%" />
            </StyledTradeLink>
          </StyledSocialRowButtons>

          <StyledSocialRow>
            <PoweredBy />
          </StyledSocialRow>

          <StyledSocialRowSM>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/nerveglobal_">
              <StyledTwitter />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/nerveglobal">
              <StyledGithub />
            </a>
            <a target="_blank" rel="noreferrer" href="https://discord.gg/Xuh5enTNB6">
              <StyledDiscord />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/nerveglobal/">
              <StyledLinkedIn />
            </a>
          </StyledSocialRowSM>
        </StyledTitle>

        <HideSmall>
          <GrantCard>
            <img
              style={{
                minWidth: '35rem',
                margin: '-22rem 0 0 -15rem',
                opacity: '1',
                borderRadius: '12px'
              }}
              src={kitty}
              width="100%"
            />
            <p
              style={{
                marginTop: '-2rem',
                marginLeft: '-1.5rem',
                fontSize: '13px',
                fontWeight: '700',
                textColor: '#FFFFFF',
                opacity: '1'
              }}
            >
              Powered by DALL•E 2
            </p>
          </GrantCard>
        </HideSmall>

        <SectionHeader
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '100%',
            padding: '5.5rem 0 2rem 0',
            fontFamily: 'True',
            textTransform: 'uppercase'
          }}
        >
          <span>{'Platform Stats'}</span>
        </SectionHeader>
        <SectionHeaderSmall>
          <span>{'(Open Beta)'}</span>
        </SectionHeaderSmall>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: '2rem 0 2rem 0'
          }}
        >
          <ProtocolData />
        </div>

        <SectionHeader
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: '2rem 0 0 0',
            fontFamily: 'True',
            textTransform: 'uppercase'
          }}
        >
          <span>{'Spotlight'}</span>
        </SectionHeader>

        <SectionHeaderMobile
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
          }}
        >
          <nav>
            <StyledButton onClick={() => setActiveDare('TopActiveDare')}>Active</StyledButton>
            <StyledButton onClick={() => setActiveDare('TopCompletedDare')}>Completed</StyledButton>
          </nav>
        </SectionHeaderMobile>
        <div>
          {activeDare === 'TopActiveDare' && <TopActiveDare props={props} />}
          {activeDare === 'TopCompletedDare' && <TopCompletedDare props={props} />}
        </div>

        {/*
        <SectionHeader
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: '2rem 0 0 0',
            fontFamily: 'True',
            textTransform: 'uppercase'
          }}
        >
          <span>{'Our Ambassadors'}</span>
        </SectionHeader>
        */}

        <SectionHeader
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: '2rem 0 0 0',
            fontFamily: 'True',
            textTransform: 'uppercase'
          }}
        >
          <span>{'How to Play'}</span>
        </SectionHeader>

        <SectionHeaderMobile
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
          }}
        >
          <nav>
            <StyledButton onClick={() => setActive('Player')}>Player</StyledButton>
            <StyledButton onClick={() => setActive('Watcher')}>Watcher</StyledButton>
          </nav>
        </SectionHeaderMobile>
        <div>
          {active === 'Player' && <Player props={props} />}
          {active === 'Watcher' && <Watcher props={props} />}
        </div>

        <SectionHeader
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: '2rem 0 0 0',
            fontFamily: 'True',
            textTransform: 'uppercase'
          }}
        >
          <span>{'Decentralized Wallet'}</span>
        </SectionHeader>
        <EcosystemSection props={props} />

        <SectionHeader
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: '0 0 0 0',
            fontFamily: 'True',
            textTransform: 'uppercase'
          }}
        >
          <span>{'Governance & More'}</span>
        </SectionHeader>
        <DeveloperSection props={props} />

        <StyledSection>
          <StyledItemRow style={{ alignItems: 'center', justifyContent: 'center' }}>
            <StyledSectionTitle>
              Discover a new form of crowdfunding, live streaming and community interaction - download now!
            </StyledSectionTitle>
            <StyledSocialRowButtons>
              <StyledTradeLink target="_blank" href="https://apps.apple.com/de/app/nerve-global/id1500517863">
                <img src={appstore} width="100%" />
              </StyledTradeLink>

              <StyledTradeLink
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.academy.nerve&hl=en&gl=US"
              >
                <img src={google} width="100%" />
              </StyledTradeLink>
            </StyledSocialRowButtons>
          </StyledItemRow>
        </StyledSection>
      </StyledBody>
      <BG />
    </Layout>
  )
}

export default IndexPage

const SectionHeader = styled.h1`
  font-size: 5rem;
  font-weight: 500;
  margin-top: 7.5rem;
  margin-bottom: -2rem;
  white-space: wrap;
  overflow-wrap: normal;

  @media (max-width: 960px) {
    font-size: 2rem;
    margin-top: 0rem;

  @media (max-width: 640px) {
    font-size: 1.75rem;
    margin-top: 0rem;
`

const SectionHeaderSmall = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: True;
  font-weight: 500;
  margin-top: -0.25rem;
  margin-bottom: -1rem;
  white-space: wrap;
  overflow-wrap: normal;

  @media (max-width: 960px) {
    font-size: 1rem;
    margin-top: 0rem;

  @media (max-width: 640px) {
    font-size: 1rem;
    margin-top: 0rem;
`

const SectionHeaderMobile = styled.h1`
  display: flex;
  alignItems: center;
  justifyContent: center;

  @media (max-width: 960px) {
    margin: 3rem 0 -3rem 0;
    font-size: 2rem;
    color: white;
    a {
      color: white;
  }
  @media (max-width: 640px) {
    margin: 3rem 0 -3rem 0;
    font-size: 2rem;
    color: white;
    a {
      color: white;
  }
`

const StyledSection = styled.section`
  display: flex;
  margin: 5rem 0;

  @media (max-width: 960px) {
    margin-top: 1rem;
  }

  @media (max-width: 640px) {
    margin-top: 1rem;
  }
`

const GovernanceCard = styled(StyledCard)`
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 960px) {
    padding: 1rem 1.25rem;
    height: ${({ open }) => (open ? '100vh' : '100%')};
  }

  @media (max-width: 960px) {
    margin-bottom: 10px;
  }
`

const AppsCard = styled(StyledCard)`
  background: url(${AppsImage});
  background-size: cover;
  background-repeat: no-repeat;
  width: 300px;
  height: 300px;

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
    display: none;
    visibility: hidden;
  }
`

const GrantsCard = styled(StyledCard)`
  width: 750px;
  align-items: center;
  justify-content: center;
  margin: 0 auto 5rem auto;

  @media (max-width: 960px) {
    width: 100%;
    margin: 0 auto 5rem auto;
  }
`

const GrantsCardNoBorder = styled(StyledCard)`
  width: 600px;
  border-radius: 0;
  border: 0;
  background-color: transparent;
  box-shadow: none;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    width: 325px;
  }
`

const GrantCard = styled(StyledC)`
  width: 250px;
  position: absolute;
  top: -1rem;
  right: 10rem;

  @media (max-width: 960px) {
    width: 250px;
    top: 23rem;
    right: 5rem;
  }
`

const StyledItemRowIntern = styled.nav`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  font-weight: 500;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto 0 auto;

  p {
    font-size: 12px;
    justify-content: space-between;
  }

  @media (max-width: 960px) {
    font-size: 16px;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto 0 auto;

    p {
      font-size: 12px;
    }

    & > * {
      margin-top: 1px;
      margin-bottom: 1px;
    }
    & > *:not(:first-of-type) {
      margin-top: 0;
      align-items: right;
    }
  }
`

const StyledItemRowInternIntern = styled.nav`
  display: flex;
  flex: 1;
  width: 100%;

  p {
    font-size: 12px;
  }

  @media (max-width: 960px) {
    font-size: 16px;
    width: 100%;
    margin: 0 auto 0 auto;

    p {
      font-size: 12px;
    }
  }
`

const EcosystemSection = () => {
  return (
    <StyledSection style={{ marginRight: 'auto', marginLeft: 'auto' }}>
      <StyledItemRow style={{ marginTop: '2rem' }}>
        <GovernanceCard style={{ display: 'flex', flexDirection: '1', justifyContent: 'space-between' }}>
          <span>
            <StyledSectionTitleGradient>Your Keys, Your Coins - Secure</StyledSectionTitleGradient>
            <StyledBodySubTitleWallet style={{ textColor: '#FFFFFF', opacity: '1', fontSize: '16px', fontWeight: 600 }}>
              <p>Nerve Global has no access to a user’s private keys.</p>
              <p style={{ opacity: '0.6', fontWeight: 400 }}>
                The Nerve Global wallet is a non-custodial hot wallet built in C++ that is run on the user’s device. The
                wallet performs ideal gas price discovery for transactions and gives access to the native gas and NERVE
                governance token.
              </p>
            </StyledBodySubTitleWallet>
          </span>
        </GovernanceCard>
        <AppsCard>
          <p
            style={{
              marginTop: '15rem',
              fontSize: '12px',
              fontWeight: '700',
              textColor: '#FFFFFF',
              opacity: '1'
            }}
          >
            Powered by DALL•E 2
          </p>
        </AppsCard>
      </StyledItemRow>
    </StyledSection>
  )
}

const Player = () => {
  return (
    <StyledItemRowPlayerWatcher style={{ justifyContent: 'center', padding: '2rem 10rem 0 10rem' }}>
      <GrantsCardNoBorder>
        <img style={{ marginTop: '11px' }} src={dashboard} width="100%" />
        <StyledBodySubTitle style={{ fontSize: '20px', textAlign: 'center' }}>Receive a dare</StyledBodySubTitle>
        <StyledBodySubTitle
          style={{ textAlign: 'center', textColor: '#FFFFFF', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}
        >
          <p>
            Link your social media accounts to Nerve Global and receive personalized dares directly from your community.
          </p>
        </StyledBodySubTitle>
      </GrantsCardNoBorder>

      <GrantsCardNoBorder style={{ minHeight: '40rem', minWidth: '5rem' }}>
        <img src={prove} width="100%" />
        <StyledBodySubTitle style={{ fontSize: '20px', textAlign: 'center' }}>Submit a proof</StyledBodySubTitle>
        <StyledBodySubTitle
          style={{ textAlign: 'center', textColor: '#FFFFFF', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}
        >
          <p>Perform your dare and upload a proof to your favorite social media platform.</p>
        </StyledBodySubTitle>
      </GrantsCardNoBorder>

      <GrantsCardNoBorder style={{ minHeight: '40rem', minWidth: '5rem' }}>
        <img src={wallet} width="100%" />
        <StyledBodySubTitle style={{ fontSize: '20px', textAlign: 'center' }}>Get approved</StyledBodySubTitle>
        <StyledBodySubTitle
          style={{ textAlign: 'center', textColor: '#FFFFFF', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}
        >
          <p>
            Every watcher is eligible to cast a vote on completing your dare and decides on the disbursement of attached
            funds.
          </p>
        </StyledBodySubTitle>
      </GrantsCardNoBorder>

      <GrantsCardNoBorder style={{ minHeight: '40rem', minWidth: '5rem' }}>
        <img src={claimPlayer} width="100%" />
        <StyledBodySubTitle style={{ fontSize: '20px', textAlign: 'center' }}>Claim your funds</StyledBodySubTitle>
        <StyledBodySubTitle
          style={{ textAlign: 'center', textColor: '#FFFFFF', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}
        >
          <p>
            All collected funds will be directly disbursed to your account - fully decentralized and routed through the
            blockchain.
          </p>
        </StyledBodySubTitle>
      </GrantsCardNoBorder>
    </StyledItemRowPlayerWatcher>
  )
}

const Watcher = () => {
  return (
    <StyledItemRowPlayerWatcher style={{ justifyContent: 'center', padding: '2rem 10rem 0 10rem' }}>
      <GrantsCardNoBorder style={{ minHeight: '40rem', minWidth: '5rem' }}>
        <img style={{ marginTop: '11px' }} src={create} width="100%" />
        <StyledBodySubTitle style={{ fontSize: '20px', textAlign: 'center' }}>Create a dare</StyledBodySubTitle>
        <StyledBodySubTitle
          style={{ textAlign: 'center', textColor: '#FFFFFF', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}
        >
          <p>
            Search for other players to create dares. Set a time limit and attach value to it. Other users can join the
            dare and attach further value.
          </p>
        </StyledBodySubTitle>
      </GrantsCardNoBorder>

      <GrantsCardNoBorder style={{ minHeight: '40rem', minWidth: '5rem' }}>
        <img src={global} width="100%" />
        <StyledBodySubTitle style={{ fontSize: '20px', textAlign: 'center' }}>Wait for proof</StyledBodySubTitle>
        <StyledBodySubTitle
          style={{ textAlign: 'center', textColor: '#FFFFFF', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}
        >
          <p>Wait for proof that the dare has been completed.</p>
        </StyledBodySubTitle>
      </GrantsCardNoBorder>

      <GrantsCardNoBorder style={{ minHeight: '40rem', minWidth: '5rem' }}>
        <img src={vote} width="100%" />
        <StyledBodySubTitle style={{ fontSize: '20px', textAlign: 'center' }}>Approve</StyledBodySubTitle>
        <StyledBodySubTitle
          style={{ textAlign: 'center', textColor: '#FFFFFF', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}
        >
          <p>
            Vote on a dare and decide, if it has been completed. On a positive vote result, all funds are distributed to
            the player.
          </p>
        </StyledBodySubTitle>
      </GrantsCardNoBorder>

      <GrantsCardNoBorder style={{ minHeight: '40rem', minWidth: '5rem' }}>
        <img src={claimWatcher} width="100%" />
        <StyledBodySubTitle style={{ fontSize: '20px', textAlign: 'center' }}>Claim your refund</StyledBodySubTitle>
        <StyledBodySubTitle
          style={{ textAlign: 'center', textColor: '#FFFFFF', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}
        >
          <p>
            If a dare is rated negative, all participants will get their stake back (the previously collected fee is not
            returned).
          </p>
        </StyledBodySubTitle>
      </GrantsCardNoBorder>
    </StyledItemRowPlayerWatcher>
  )
}

const DeveloperSection = () => {
  return (
    <>
      <StyledSection>
        <StyledItemRow style={{ marginTop: '2rem' }}>
          <GovernanceCard style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <span>
              <StyledSectionTitleGradient>Governed By The Community</StyledSectionTitleGradient>
              <StyledBodySubTitle style={{ fontSize: '20px' }}>
                <p style={{ margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
                  The Nerve Global DAO is the central decision-making organ of the protocol. All proposals and
                  executions are handled on chain.
                </p>
              </StyledBodySubTitle>
              <StyledBodySubTitle style={{ fontSize: '20px' }}>
                <p style={{ margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
                  Voting rights in the DAO will be handed to community members according to DAO decision in form of
                  NFTs. New voting rights are delegated every 3 months to the topmost participants in the protocol.
                </p>
              </StyledBodySubTitle>
            </span>

            <StyledButtonTop target="_blank" href="https://docs.nerveglobal.com/protocol/dao/overview">
              <span style={{ margin: 0 }}>Learn more</span>
            </StyledButtonTop>
          </GovernanceCard>
          <StyledItemColumn style={{ display: 'flex', flexDirection: 'column' }}>
            <Button
              style={{ borderRadius: '20px' }}
              target="_blank"
              href="https://docs.nerveglobal.com/sdk/automated-market-maker"
              outlined
            >
              <div style={{ padding: '1rem' }}>
                <StyledBodySubTitle style={{ marginBottom: '0.25rem' }}>
                  Automated Market Maker <span style={{ fontSize: '16px' }}>↗</span>
                </StyledBodySubTitle>
                <p style={{ margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
                  The Nerve Global AMM has a special feature where NERVE tokens can only be sold through the AMM, not
                  purchased.
                </p>
              </div>
            </Button>
            <Button style={{ borderRadius: '20px' }} target="_blank" href="https://www.nerveglobal.com/token/" outlined>
              <div style={{ padding: '1rem' }}>
                <StyledBodySubTitle style={{ marginBottom: '0.25rem' }}>
                  Token Economy <span style={{ fontSize: '16px' }}>↗</span>
                </StyledBodySubTitle>
                <p style={{ margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400, maxWidth: '850px' }}>
                  Nerve is a decentralized system operating on EVM based blockchains. The entire system is composed of
                  independent smart contracts that operate independently and decentrally with mathematical security.
                </p>
              </div>
            </Button>
            <Button style={{ width: '100%', borderRadius: '20px' }} outlined>
              <div style={{ padding: '1rem' }}>
                <StyledBodySubTitle style={{ marginBottom: '0.25rem' }}>
                  Seasons <span style={{ fontSize: '16px' }}>(coming soon)</span>
                </StyledBodySubTitle>
                <p style={{ margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400, maxWidth: '850px' }}>
                  The Nerve Global DAO awards unique NFTs to the top three users in both ranking categories (Earned,
                  Spent), granting exclusive voting rights within the DAO.
                </p>
              </div>
            </Button>
          </StyledItemColumn>
        </StyledItemRow>
      </StyledSection>
    </>
  )
}

const TopActiveDare = () => {
  return (
    <>
      <StyledSection style={{ margin: '2rem auto 0 auto' }}>
        <StyledItemRow>
          <GrantsCard>
            <StyledItemRowIntern style={{ fontSize: '16px' }}>
              <ActiveDaredUser />
              <ActiveDareProof />
            </StyledItemRowIntern>

            <StyledItemRowIntern>
              <ActiveDareDescription />
            </StyledItemRowIntern>

            <StyledItemRowIntern style={{ marginBottom: '-1.5rem' }}>
              <Countdown />
              <ActiveDareAmount />
            </StyledItemRowIntern>

            <StyledItemRowIntern>
              <p>Time & Votes</p>
              <p>Participants & Value</p>
            </StyledItemRowIntern>
          </GrantsCard>
        </StyledItemRow>
      </StyledSection>
    </>
  )
}

const TAD = () => {
  return (
    <>
      <StyledSection style={{ margin: '2rem auto 0 auto' }}>
        <AD />
      </StyledSection>
    </>
  )
}

const TopCompletedDare = () => {
  return (
    <>
      <StyledSection style={{ margin: '2rem auto 0 auto' }}>
        <StyledItemRow>
          <GrantsCard>
            <StyledItemRowIntern style={{ fontSize: '16px' }}>
              <CompletedDaredUser />
              <CompletedDareProof />
            </StyledItemRowIntern>

            <StyledItemRowIntern>
              <CompletedDareDescription />
            </StyledItemRowIntern>

            <StyledItemRowIntern style={{ marginBottom: '-1.5rem' }}>
              <StyledItemRowInternIntern>
                Finished
                <CompletedDareVotes />
              </StyledItemRowInternIntern>
              <CompletedDareAmount />
            </StyledItemRowIntern>

            <StyledItemRowIntern>
              <p>Time & Votes</p>
              <p>Participants & Value</p>
            </StyledItemRowIntern>
          </GrantsCard>
        </StyledItemRow>
      </StyledSection>
    </>
  )
}
