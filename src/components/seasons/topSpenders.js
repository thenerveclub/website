import React from 'react'
import styled from 'styled-components'

import TopSpenderName from './topSpenderName'
import TopSpenderSocials from './topSpenderSocials'
import Spent from './spent'

const StyledSection = styled.section`
display: flex;
flex-direction: column;
margin-top: 1rem;

@media (max-width: 960px) {
  margin-top: 1rem;
}

@media (max-width: 640px) {
  margin-top: 1rem;
}
`

const StyledItemRow = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 960px) {
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
  width: 750px;
  align-items: center;
  justify-content: center;
  margin: 0 auto 5rem auto;

  @media (max-width: 960px) {
    width: 100%;
  }
`

const StyledItemRowIntern = styled.nav`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  font-weight: 500;
  justify-content: space-between;
  width: 95%;
  margin: 1rem auto 0 auto;

  @media (max-width: 960px) {
    width: 100%;
    font-size: 12px;

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

const TopSpenders = () => {
    return (
      <>
      <StyledSection>
        <StyledItemRow>
          <GrantsCard>
            <StyledItemRowIntern>
              <TopSpenderName />
              <TopSpenderSocials />
              <Spent />
            </StyledItemRowIntern>
          </GrantsCard>
        </StyledItemRow>
      </StyledSection>
      </>
    )
  }
  export default TopSpenders