import React from 'react'
import { LaunchList } from '../LaunchList/LaunchList'

export const InicialView = () => {
  return (
    <div className='launchesList'>
        <h1>
            Upcoming - Next Launches
        </h1>
        <LaunchList/>
    </div>
  )
}

