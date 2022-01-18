import React from "react";
import { User } from "./User";

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
    
    render() {
        return <> 
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