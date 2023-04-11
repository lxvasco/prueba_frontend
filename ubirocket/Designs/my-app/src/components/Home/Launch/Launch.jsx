import React from "react"

export const Launch = ({ mision, date, launchpad }) => {
    return (
        <tbody>
            <tr>
                <td>{mision}</td>
                <td>{date}</td>
                <td>{launchpad}</td>
            </tr>
        </tbody>
    );

}
