import { Button } from "@material-ui/core";
import React from "react";
import {Navigate, Route} from 'react-router-dom';

export class GoHome extends React.Component {
    state = {
        shouldRedirect: false
    }

    handleOnClick = () => {
        this.setState({
            shouldRedirect: true
        })
    }

    render() {
        if (this.state.shouldRedirect) {
            return <Route 
                path="*"
                element={<Navigate to="home" />} 
            />
        }

        return <Button onClick={this.handleOnClick}>Siema!</Button>
    }
}