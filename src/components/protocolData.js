import React from 'react'
import styled from 'styled-components'
import Glimmer from '../images/glimmer_center.svg'
import GlimmerGray from '../images/glimmer_gray.svg'

import ZUsers from '../ZUsers'
import ZTCount from '../ZTCount'
import TEarn from '../TEarn'
import ZBCount from '../ZBCount'
import BEarn from '../BEarn'


const StyledSectionFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  max-width: 960px;
  width: 100%;
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
  @media (max-width: 640px) {
    display: none;
  }
  h1,
  h2 {
    max-width: 650px;
  }
  p {
    max-width: 650px;
  }
`

const Numbers = styled(StyledSectionFlex)`
  @media (max-width: 960px) {
    /* display: none; */
  }
`

const BigNumbers = styled(StyledSectionFlex)`
  font-size: 48px;
  font-weight: 700;
  flex-direction: column;
  position: relative;
  overflow: visisble;
  p {
    font-weight: 300;
  }
  @media (max-width: 960px) {
    font-size: 32px;
  }
`

export const Sparkle = styled.div`
  background: url(${Glimmer});
  width: 60px;
  height: 60px;
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;

  top: -30px;
  left: -30px;
`

export const SparkleBottom = styled.div`
  background: url(${Glimmer});
  width: 60px;
  height: 60px;
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  right: -30px;
  bottom: -30px;
`

export const SparkleGray = styled.div`
  background: url(${GlimmerGray});
  width: 60px;
  height: 60px;
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  right: -30px;
  bottom: -30px;
`

export const SparkleTopRight = styled.div`
  background: url(${GlimmerGray});
  width: 60px;
  height: 60px;
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  top: -30px;
  right: -30px;
`


const ProtocolData = () => {


  return (
    <Numbers id="about" style={{ flexDirection: 'column' }}>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', margin: 0 }}>
        <BigNumbers>
          <Sparkle />
          <span><ZUsers /></span>
          <p style={{ fontSize: '14px' }}>Unique Users</p>
          <SparkleGray />
        </BigNumbers>
        <BigNumbers>
          <SparkleTopRight />
          <SparkleGray />
          <span><ZTCount /></span>
          <p style={{ fontSize: '14px' }}>Tasks</p>
        </BigNumbers>
        <BigNumbers>
          <SparkleTopRight />
          <SparkleGray />
          <span><TEarn /></span>
          <p style={{ fontSize: '14px' }}>Task Earnings</p>
          <SparkleGray />
        </BigNumbers>
        <BigNumbers>
          <span><ZBCount /></span>
          <p style={{ fontSize: '14px' }}>Bets</p>
          <SparkleGray />
        </BigNumbers>
        <BigNumbers>
          <SparkleBottom />
          <span><BEarn /></span>
          <p style={{ fontSize: '14px' }}>Bet Earnings</p>
        </BigNumbers>
      </div>
    </Numbers>
  )
}

export default ProtocolData
