import React from 'react'
import { useState, useEffect } from 'react';
import { Counter } from '../Counter/Counter';
import Swal from "sweetalert2"

export const DataNextLaunch = () => {

  const [Data, setData] = useState([])

  async function getDate() {
    try {
      let request = await fetch("https://api.spacexdata.com/v3/launches/next");
      let response = await request.json();
      if (response.error) {
        setData(response.error)
      } else {
        let nextLaunchMision = response.mission_name;
        let nextLaunchDate = response.launch_date_utc;
        setData([nextLaunchMision, nextLaunchDate]);
      }
    } catch (e) {
      setData(e.stack);
    }


  }

  useEffect(() => {
    setTimeout(() => {
      getDate();
    }, 1000);
  });


  return (
    <div>
      {Array.isArray(Data) ?
        <Counter
          mission={Data[0]}
          date={Data[1]}
        /> :
        <>
          {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: '<a href="">No information found about Next Launch :(</a>'
            })
          }
        </>
      }

    </div>
  )
}
