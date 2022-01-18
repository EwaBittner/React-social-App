import React from "react";
import Typography from '@material-ui/core/Typography';

function MyName(props) {
    if (props.surname) {
        return <Typography variant="h5" style={{ color:"red" }}>Cześć, {props.name} {props.surname}</Typography>
    } else {
        return <Typography variant="h5">Cześć {props.name}</Typography>
    }
}

export default MyName;