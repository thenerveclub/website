import styled, { css } from 'styled-components'

const TabStyles = css`
  margin-top: 10px;
  text-decoration: none;
  border-radius: 12px;
  display: inline-block;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 1.125rem;
  min-width: 50rem;
  max-width: 50rem;
  @media (max-width: 960px) {
    margin-top: 10px;
  text-decoration: none;
  border-radius: 12px;
  display: inline-block;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 1.125rem;
  min-width: 30rem;
  max-width: 30rem;
  }
  @media (max-width: 640px) {
    margin-top: 10px;
  text-decoration: none;
  border-radius: 12px;
  display: inline-block;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 1.125rem;
  min-width: 30rem;
  max-width: 30rem;
  }
  :hover {
    transform: scale(1);
  }
  background-color: ${({ outlined, theme }) => (outlined ? theme.cardBG : theme.textColor)};
  color: ${({ outlined, theme }) => (outlined ? theme.textColor : theme.invertedTextColor)};
  border: ${({ outlined, theme }) => (outlined ? `1px solid ${theme.buttonBorder}` : 'initial')};
`

export const Tab = styled.a`
  ${TabStyles};
`

export default Tab
