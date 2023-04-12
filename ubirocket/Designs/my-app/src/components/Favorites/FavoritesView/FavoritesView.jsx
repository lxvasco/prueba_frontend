import React from 'react'

export const FavoritesView = () => {
    let data = localStorage.getItem("favorite");
    if (!data) {
        data = [];
    } else {
        data = JSON.parse(data);
    }
    return (
        <div className='launchesList'>
            <h1>Favorites Launches</h1>
            <table className='list'>
                <thead>
                    <tr>
                        <th>Mission</th>
                        <th>Date(UTC)</th>
                        <th>Launchpad</th>
                    </tr>
                </thead>


                {data.length > 0 ?
                    <tbody >
                        {data.map(x => (
                            <tr>
                                <td>{x.mision}</td>
                                <td>{x.date}</td>
                                <td>{x.launchpad}</td>
                            </tr>
                        ))
                        }
                    </tbody> :
                    <p>No records in Favorites</p>
                }
            </table>
        </div>
    )
}
