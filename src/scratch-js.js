








class AppWrapper extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            carToggle: false,
            trackToggle: false,
            rewardToggle: false,
            eventTypeToggle: false
        };
    }

    render() {
        return (
            <div>
                <MainButtonState />
                <br />
                <LikeButton />
            </div>
        )
    }
}



class LapsSearchButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button onClick={this.props.onClick}>Laps</button>
        )
    }
}






function Button(props) {
    return (
        <button type={props.buttonType}> {props.buttonName} </button>
    )
}

