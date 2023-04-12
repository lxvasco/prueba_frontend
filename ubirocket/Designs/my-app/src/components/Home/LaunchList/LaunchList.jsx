import React, { useEffect, useState } from 'react'
import { Launch } from '../Launch/Launch';
import Swal from "sweetalert2"

export const LaunchList = () => {

    const [list, SetList] = useState([])

    async function getData() {
        try {
            let request = await fetch("https://api.spacexdata.com/v3/launches/upcoming")
            let response = await request.json();
            let launchList = []
            if (response.error) {
                SetList(response.error)
            } else {
                response.map(x => {
                    launchList.push({
                        mision: x.mission_name,
                        date: x.launch_date_utc,
                        launchpad: x.launch_site.site_name
                    })
                })
                SetList(launchList)
            }
        } catch (e) {
            SetList(e.stack);
        }

    }


    useEffect(() => {
        getData()
    }, [])



    return (
        <table className='list'>
            <thead>
                <tr>
                    <th></th>
                    <th>Mission</th>
                    <th>Date(UTC)</th>
                    <th>Launchpad</th>
                </tr>
            </thead>

            {Array.isArray(list) ?
                list.map(x => (
                    <Launch
                        mision={x.mision}
                        date={x.date}
                        launchpad={x.launchpad}
                        key={x.mision}
                    />
                )) :
                <>
                    {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!',
                            footer: '<a href="">No information found about Launches :(</a>'
                        })
                    }
                </>
            }

        </table>

    )
}
