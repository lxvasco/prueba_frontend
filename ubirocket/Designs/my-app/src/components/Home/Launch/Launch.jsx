import React from "react"
import { FavoriteButton } from "../Favorites/FavoriteButton";


export const Launch = ({ mision, date, launchpad }) => {
    return (
        <tbody>
            <tr>
            <td><FavoriteButton /></td>
                <td>{mision}</td>
                <td>{date}</td>
                <td>{launchpad}</td>
            </tr>
        </tbody>
    );

}
