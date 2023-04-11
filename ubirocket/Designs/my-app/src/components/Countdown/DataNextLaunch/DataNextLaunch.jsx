import React from 'react'
import { useState, useEffect } from 'react';
import { Counter } from '../Counter/Counter';

export const DataNextLaunch = () => {

    const [Data, setData] = useState([])

    async function getDate() {
        let request = await fetch("https://api.spacexdata.com/v3/launches/next");
        let response = await request.json();
        let nextLaunchMision = response.mission_name;
        let nextLaunchDate = response.launch_date_utc;
        setData([nextLaunchMision,nextLaunchDate])
        
    }
   

    useEffect(() => {
        setTimeout(() => {
          getDate();
        }, 1020);
      });
      

  return (
    <div>
        <Counter
        mission = {Data[0]}
        date = {Data[1]}
        />
    </div>
  )
}
