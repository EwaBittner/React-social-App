import React from "react";

export class UserDetails extends React.Component {
    state = {
        data: null
    }

    componentDidMount() {
        fetch(`https://jasonplaceholder.typicode.com/users/${this.props.match.params.id}`)
            .then(r => r.json())
            .then(userData => {
                this.setState({
                    name: userData.name
                })
            });
    }

    render() {
        return <h2>Welcome user id: {this.state.name}!</h2>
    }
}