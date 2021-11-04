import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Twitter from '../images/twitter.inline.svg'
import Github from '../images/github.inline.svg'
import Discord from '../images/discord.inline.svg'



const StyledFooter = styled.footer`
  max-width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.textColor};
  padding:30px 50px 25px 50px;

  @media (max-width: 1155px) {
    display: block;
  }

  @media (max-width: 960px) {
    padding: 1rem;
  }
`



const StyledFooterLinkSection = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
`

const StyledFooterLink = styled(Link)`
  margin-right: 12px;
  color: ${({ theme }) => theme.textColor};
`

const StyledTwitter = styled(Twitter)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  width: 16px;
  height: 16px;
  margin-right: 12px;
`

const StyledDiscord = styled(Discord)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  width: 16px;
  height: 16px;
`

const StyledGithub = styled(Github)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  width: 16px;
  height: 16px;
  margin-right: 12px;
`

const Footer = () => {
  return (
    <StyledFooter>
      <p style={{ margin: 0 }}> {new Date().getFullYear()} Nerve Global</p>
      <StyledFooterLinkSection>
        <StyledFooterLink to="/privacy-policy">Privacy Policy</StyledFooterLink>
        <StyledFooterLink to="/disclaimer" style={{ marginRight: '12px' }}>
          Disclaimer
        </StyledFooterLink>
        <StyledFooterLink to="/terms-of-service">Terms of Service</StyledFooterLink>
        <a style={{ marginLeft: '30px' }} href="https://twitter.com/Uniswap" rel="noopener noreferrer" target="_blank">
          <StyledTwitter />
        </a>
        <a href="https://github.com/Uniswap" rel="noopener noreferrer" target="_blank">
          <StyledGithub />
        </a>
        <a href="https://discord.gg/FCfyBSbCU5" rel="noopener noreferrer" target="_blank">
          <StyledDiscord />
        </a>
      </StyledFooterLinkSection>
    </StyledFooter>
  )
}
export default Footer