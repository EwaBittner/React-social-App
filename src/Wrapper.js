import React from "react";

function Wrapper(props) {
    return <div style={
        {
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center',
            marginTop: '20px'
        }
    }>
        {props.children}
    </div>
}

export default Wrapper;