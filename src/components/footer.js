import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'


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

const Footer = () => {
  return (
    <StyledFooter>
      <p style={{ margin: 0 }}> {new Date().getFullYear()} Nerve Foundation & Community</p>
      <StyledFooterLinkSection>
        <StyledFooterLink to="/privacy-policy">Privacy Policy</StyledFooterLink>
        <StyledFooterLink to="/disclaimer" style={{ marginRight: '12px' }}>
          Disclaimer
        </StyledFooterLink>
        <StyledFooterLink to="/terms-of-service">Terms of Service</StyledFooterLink>
      </StyledFooterLinkSection>
    </StyledFooter>
  )
}
export default Footer