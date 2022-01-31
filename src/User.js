import React from "react";
import { Link } from "react-router-dom";

export const User = (props) => {
    return <>
        <p>{props.name} {props.surname} works in {props.companyName}</p>
        <Link to={`/users/${props.id}`}>Details</Link>
    </>
}