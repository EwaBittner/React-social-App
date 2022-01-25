import React from "react";
import { User } from "./User";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

class Users extends React.Component {
    state = {
        users: []
    } 

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(r => r.json())
            .then(data => {
                this.setState({
                    users: data
                })
            })
    }

    handleOnClick = () => {
        // console.log(this.props)
        this.props.history.goBack();
    }
    
    render() {
        return <> 
            <Button onClick={this.handleOnClick}>
                <ArrowBackIcon />
            </Button>
            <h2>Users</h2>
            {this.state.users.map(user => (
                <User 
                    key={user.id} 
                    name={user.name} 
                    surname={user.surname}
                    companyName={user.company.name} 
                />
            ))}
        </>
    }
}

export default Users;