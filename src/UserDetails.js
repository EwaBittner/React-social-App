import React from "react";

export const UserDetails = (props) => {
    return <h2>Welcome user id: {props.match.params.id}!</h2>
}