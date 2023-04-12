import React from 'react'
import { Share } from '../Share/Share';

export const Counter = ({ mission, date }) => {

    let currentDate = new Date();
    let missionDate = new Date(date)


    let difference = +missionDate - +currentDate;

    let timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
    };

    return (
        <div className='nextLauncheCounter'>
            <h1>Upcoming: {mission}</h1>
            <Share/>
            <ul className='counter'>
                <li><span className='number'>{timeLeft.days}</span><span className='letters'>Days</span></li>
                <li><span className='number'>{timeLeft.hours}</span><span className='letters'>Hours</span></li>
                <li><span className='number'>{timeLeft.minutes}</span><span className='letters'>Minutes</span></li>
                <li><span className='number'>{timeLeft.seconds}</span><span className='letters'>Seconds</span></li>
            </ul>
        </div>
    )
}
