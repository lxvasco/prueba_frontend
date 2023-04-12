import React from "react"
import { FavoriteButton } from "../../Favorites/FavoritesButton/FavoriteButton";


export const Launch = ({ mision, date, launchpad }) => {
    
    return (
        <tbody>
            <tr>
                <td><FavoriteButton
                    mision={mision}
                    date={date}
                    launchpad={launchpad} /></td>
                <td>{mision}</td>
                <td>{date}</td>
                <td>{launchpad}</td>
            </tr>
        </tbody>
    );

}
