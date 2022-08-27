import React from 'react'
import styled from 'styled-components'
import ActiveDareVotes from './activeDareVotes'

const StyledItemRowIntern = styled.nav`
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100%;

  p {
    width: 30px;
    font-size: 50px;
  }

  @media (max-width: 960px) {
    font-size: 16px;

    p {
      width: 20px;
      font-size: 20px;
    }
  }
`

const Text = styled.nav`
  width: 30px;
  font-size: 20px;

  @media (max-width: 960px) {
    width: 25px;
    font-size: 16px;
  }
`

var EndTask = 0
export { EndTask }

const timestamp = Math.floor(Date.now() / 1000)
const TopActiveDare = `
{
  tasks(where: { endTask_gt:"${timestamp}", finished: false }, orderBy:amount, orderDirection:desc, first: 1) 
  {
      endTask
  }
}
`

export default function ActiveDareEndTask() {
  const tad = useTAD()

  {
    tad.map(tad => (EndTask = tad.endTask))
  }

  const countdown = () => {
    const countDate = Math.floor(EndTask * 1000)
    const now = new Date().getTime()
    const gap = countDate - now

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const textDay = Math.floor(gap / day)
    const textHour = Math.floor((gap % day) / hour)
    const textMinute = Math.floor((gap % hour) / minute)
    const textSecond = Math.floor((gap % minute) / second)

    document.querySelector('.day').innerText = textDay
    document.querySelector('.hour').innerText = textHour
    document.querySelector('.minute').innerText = textMinute
    document.querySelector('.second').innerText = textSecond
  }

  setInterval(countdown, 1000)

  return (
    <StyledItemRowIntern className="countdown">
      <a className="container-day">
        <a className="day"></a>
        <a>:</a>
      </a>
      <a className="container-hour">
        <a className="hour"></a>
        <a>:</a>
      </a>
      <a className="container-minute">
        <a className="minute"></a>
        <a>:</a>
      </a>
      <a className="container-second">
        <Text className="second"></Text>
      </a>
      <ActiveDareVotes />
    </StyledItemRowIntern>
  )
}

function useTAD() {
  const [tad, setTAD] = React.useState([])

  React.useEffect(() => {
    fetch('https://api.thegraph.com/subgraphs/name/nerveglobal/nerveglobal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: TopActiveDare })
    })
      .then(response => response.json())
      .then(data => setTAD(data.data.tasks))
  }, [])

  return tad
}
