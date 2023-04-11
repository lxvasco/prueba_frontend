import React, { useEffect, useState } from 'react'
import { Launch } from '../Launch/Launch';


export const LaunchList = () => {

    const [list, SetList] = useState([])

    async function getData() {
        let request = await fetch("https://api.spacexdata.com/v3/launches/upcoming")
        let response = await request.json();
        let launchList = []
        response.map(x => {
            launchList.push({
                mision: x.mission_name,
                date: x.launch_date_utc,
                launchpad: x.launch_site.site_name
            })
        })
        SetList(launchList)
    }


    useEffect(() => {
        getData()
    }, [])



    return (
        <table className='list'>
            <thead>
                <tr>
                    <th>Mission</th>
                    <th>Date(UTC)</th>
                    <th>Launchpad</th>
                </tr>
            </thead>

            {
                list.map(x => (
                    <Launch
                        mision={x.mision}
                        date={x.date}
                        launchpad={x.launchpad}
                        key={x.mision}
                    />
                ))
            }
        </table>

    )
}
