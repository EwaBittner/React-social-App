import React from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';


class Game extends React.Component {

    state = {
        points: 0
    }

    increment = () => {
        this.setState({ 
            points: this.state.points + 5 
        })
    }

    decrement = () => {
        this.setState({ 
            points: this.state.points - 5 
        })
    }

    componentDidUpdate() {
        if (this.state.points >= 50) {
            this.setState({
                points: 0
            }, () => {
                alert(`You won the game ${this.props.name}!`)
            });
        }
    }

    render() {
        const isLessThanZero = this.state.points < 0;
        return (
            <>
                <Typography variant="h5"> Welcome in Game {this.props.name} !</Typography>
                <Typography variant="h5">Your points: 
                    <Chip color={ isLessThanZero ? 'secondary' : 'primary' } label={this.state.points} />
                </Typography>
                <div>
                    <Button variant="contained" color="primary" onClick={this.increment}>+</Button>
                    <Button variant="contained" color="secondary" onClick={this.decrement}>-</Button>
                </div>
            </>
        )
    }
}

export default Game;