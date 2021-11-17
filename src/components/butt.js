import styled, { css } from 'styled-components'

const ButtStyles = css`
  margin-left: 10px;
  text-decoration: none;
  border-radius: 12px;
  display: inline-block;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 1.125rem;
  width: fit-content;
  @media (max-width: 960px) {
    margin-left: 10px;
  text-decoration: none;
  border-radius: 12px;
  display: inline-block;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 1.125rem;
  width: fit-content;
  }
  @media (max-width: 640px) {
    margin-left: 10px;
  text-decoration: none;
  border-radius: 12px;
  display: inline-block;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 1.125rem;
  width: fit-content;
  }
  :hover {
    transform: scale(1);
  }
  color: ${({ outlined, theme }) => (outlined ? theme.textColor : theme.invertedTextColor)};
`

export const Butt = styled.a`
  ${ButtStyles};
`

export default Butt
