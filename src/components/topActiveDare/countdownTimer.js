import React from 'react'
import { EndTask } from './activeDareEndTask'

export default function Countdown() {
  const countdown = () => {
    const countDate = Math.floor(1663264400 * 1000)
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

    if (textDay == null || undefined) {
      textDay == 0
    }
    if (textHour == null || undefined) {
      textHour == 0
    }
    if (textMinute == null || undefined) {
      textMinute == 0
    }
    if (textSecond == null || undefined) {
      textSecond == 0
    }

    document.querySelector('.day').innerText = textDay
    document.querySelector('.hour').innerText = textHour
    document.querySelector('.minute').innerText = textMinute
    document.querySelector('.second').innerText = textSecond
  }

  setInterval(countdown, 1000)

  return (
    <div className="countdown">
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
        <a className="second"></a>
      </a>
    </div>
  )
}
