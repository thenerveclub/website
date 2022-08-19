import React from 'react'
import styled from 'styled-components'
import Glimmer from '../../images/glimmer_center.svg'
import GlimmerGray from '../../images/glimmer_gray.svg'

import Dares from './dares'
import Earned from './earned'
import Users from './users'

const StyledSectionFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 0 0;
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
    padding: 1rem;
    margin-left: 0;
    margin-top: -1rem;
    margin-bottom: -2rem;
    width: 100%;
    flex-direction: column;
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
  margin: 1rem 0 0 0;

  @media (max-width: 960px) {
    margin: 0 0 2rem 0;
  }
`

const BigNumbers = styled(StyledSectionFlex)`
  font-size: 48px;
  font-weight: 700;
  flex-direction: column;
  position: relative;
  overflow: visisble;

  p {
    margin-top: -1.5rem;
    font-size: 20px;
    font-weight: 300;
  }

  @media (max-width: 960px) {
    font-size: 25px;

    p {
      font-size: 14px;
      font-weight: 300;
    }
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
          <span>
            <Users />
          </span>
          <p>Users</p>
          <SparkleGray />
        </BigNumbers>
        <BigNumbers>
          <SparkleTopRight />
          <span>
            <Dares />
          </span>
          <p>Dares</p>
        </BigNumbers>
        <BigNumbers>
          <span>
            <Earned />
          </span>
          <p>Earned</p>
          <SparkleGray />
        </BigNumbers>
      </div>
    </Numbers>
  )
}

export default ProtocolData
