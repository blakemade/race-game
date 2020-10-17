








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










function Button(props) {
    return (
        <button type={props.buttonType}> {props.buttonName} </button>
    )
}

