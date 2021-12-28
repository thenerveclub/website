import React from 'react'
import '../styles/countdown.css'
import styled from 'styled-components'


const StyledItemRow = styled.div`
display: flex;
  flex-direction: column;

  margin: 0rem;
  & > *:not(:first-of-type) {
    margin-top: 12px;
  }
  @media (min-width: 960px) {
    flex-direction: row;
    & > * {
      margin-top: 1px;
      margin-bottom: 1px;
    }
    & > *:not(:first-of-type) {
      margin-top: 0;
      margin-left: 12px;
    }
  }
`



const Countdown = () => {

	(function () {
    React.useEffect(() => {
		const second = 1000,
		minute = second * 60,
		hour = minute * 60,
		day = hour * 24;
		
		const countDown = new Date("02/22/2022").getTime(),
			x = setInterval(function() {
				
				const now = new Date().getTime(),
				distance = countDown - now;
				
				document.getElementById("days").innerText = Math.floor(distance / (day)),
				document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
				document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
				document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);				
			}, 0)
    }, [])
		}());


  return (

    <StyledItemRow>
<div className="container">
  <div id="countdown">
    <ul>
      <li><span id="days"></span>days</li>
      <li><span id="hours"></span>Hours</li>
      <li><span id="minutes"></span>Minutes</li>
      <li><span id="seconds"></span>Seconds</li>
    </ul>
  </div>
</div>
  </StyledItemRow>
)
}



export default Countdown