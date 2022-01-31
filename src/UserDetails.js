import React from "react";

export class UserDetails extends React.Component {
    state = {
        data: null
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
            .then(r => r.json())
            .then(userData => {
                this.setState({
                    data: userData
                })
            })
        
    }

    render() {
        if (!this.state.data) {
            return <h2>Uploading data</h2>
        }

        return <h2>Welcome user {this.state.data.name}!</h2>
    }
}