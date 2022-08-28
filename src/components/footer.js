import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import Discord from '../images/discord.inline.svg'
import Github from '../images/github.inline.svg'
import Linkedin from '../images/linkedin.inline.svg'
import Twitter from '../images/twitter.inline.svg'

const StyledFooter = styled.footer`
  max-width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.textColor};
  padding: 30px 50px 25px 50px;

  @media (max-width: 1155px) {
    display: block;
  }

  @media (max-width: 960px) {
    padding: 1rem;
  }
`

const StyledTwitter = styled(Twitter)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  width: 20px;
  height: 20px;
`

const StyledDiscord = styled(Discord)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  width: 20px;
  height: 20px;
`

const StyledGithub = styled(Github)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  width: 20px;
  height: 20px;
`

const StyledLinkedIn = styled(Linkedin)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  width: 20px;
  height: 20px;
`

const StyledFooterLinkSection = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
`

const StyledSocialRow = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 0;
  & > *:not(:first-of-type) {
    margin-top: 0;
    margin-left: 16px;
  }
  @media (max-width: 640px) {
    margin-top: 0.5rem;
`

const StyledFooterLink = styled(Link)`
  margin-right: 12px;
  color: ${({ theme }) => theme.textColor};
`

const Footer = () => {
  return (
    <StyledFooter>
      <p style={{ margin: 0 }}> {new Date().getFullYear()} Nerve Global Community</p>

      <StyledSocialRow>
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
      </StyledSocialRow>

      <StyledFooterLinkSection>
        <StyledFooterLink to="/privacy-policy">Privacy Policy</StyledFooterLink>
        <StyledFooterLink to="/disclaimer" style={{ marginRight: '12px' }}>
          Disclaimer
        </StyledFooterLink>
        {/*
  <StyledFooterLink to="/terms-of-service">Terms of Service</StyledFooterLink>
  */}
      </StyledFooterLinkSection>
    </StyledFooter>
  )
}
export default Footer
