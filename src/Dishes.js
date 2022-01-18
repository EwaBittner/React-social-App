import React from "react";

export const MyFavouriteDishes = ({ dishes }) => {
    return <>
        <h3>My favourite dishes are:</h3>
        <ul>
            {
                dishes.map(dish => {
                    return <li key={dish.id}>{dish.name}</li>
                })
            }
        </ul>
    </>
}