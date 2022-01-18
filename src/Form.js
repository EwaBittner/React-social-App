import React from "react";
import { Button, MenuItem, TextField } from "@material-ui/core";

export class Form extends React.Component {
    state = {
        name: '',
        age: '',
        gender: '',
        comment: ''
    }

    handleOnChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <form 
                noValidate autoComplete="off" 
                style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={this.handleOnSubmit}
            >
                <TextField 
                    value={this.state.name}
                    name="name"
                    label="Name" 
                    onChange={this.handleOnChange} />
                <TextField 
                    value={this.state.age}
                    name="age"
                    label="Age" type="number" 
                    onChange={this.handleOnChange} />
                <TextField 
                    value={this.state.gender}
                    name="gender"
                    select 
                    label = "Select"
                    onChange={this.handleOnChange} 
                
                >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="?">Different</MenuItem>
                </TextField>
                <TextField
                    value={this.state.comment}
                    name="comment"
                    labe="Comment"
                    multiline
                    onChange={this.handleOnChange} 
                />
                <Button type="submit">Send</Button>
            </form>
        );
    }
}