import React from 'react'
import { endTask } from './activeDareEndTask'



export default function Countdown() {
  
	(function () {
    React.useEffect(() => {
		const second = 1000,
		minute = second * 60,
		hour = minute * 60,
		day = hour * 24;
    
		const countDown = Math.floor(1663264400 * 1000),
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
  <div id="countdown">
      <a id="days"></a>
      <a>:</a>
      <a id="hours"></a>
      <a>:</a>
      <a id="minutes"></a>
      <a>:</a>
      <a id="seconds"></a>
  </div>
)
}