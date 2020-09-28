'use strict';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        return this.state.liked ? 'You liked this.' : (
            <button onClick={() => {
                this.setState({ liked: true });
                console.log('liked state set')
            }
            }>
                Like
            </button>
        );
    }
}

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    componentDidMount() {
        // let results = fetch('https://jsonplaceholder.typicode.com/posts')
        // console.log(JSON.stringify(results));

        fetch('https://jsonplaceholder.typicode.com/posts', {
            credentials: 'include',

        })
            .then(response => response.json())
            .then((data) => {
                this.setState({ data: JSON.stringify(data[0]) });
                return data;
            })
            .then(data => console.log('data logging from fetch then chain: ', data))
            .then (() => console.log("logging this.state from end of Fetch chain", JSON.stringify(this.state)))
            
    }

    render() {

        return (
            <div>

                {JSON.stringify(this.state)}

            </div>
        )
    }
}

class CarSearchButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false,
        }
    }

    render() {

        return (
            <button>Car</button>
        )
    }
}

class TrackSearchButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false,
        }
    }

    render() {

        return (
            <button>Track</button>
        )
    }
}

class LapsSearchButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false,
        }
    }

    render() {

        return (
            <button>Laps</button>
        )
    }
}

// class RewardSearchButton extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             toggled: false,
//         }
//     }

//     render() {

//         return (
//             <button>Reward</button>
//         )
//     }
// }







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
                <CarSearchButton onClick={() => {
                    this.setState({
                        carToggle: !carToggle,
                        trackToggle: false,
                        rewardToggle: false,
                        eventTypeToggle: false
                    })
                    console.log('car state toggled')
                }
                }> </CarSearchButton>
                <TrackSearchButton onClick={() => this.setState({
                    carToggle: false,
                    trackToggle: false,
                    rewardToggle: false,
                    eventTypeToggle: false
                })}> </TrackSearchButton>
                <LapsSearchButton onClick={() => this.setState({
                    carToggle: false,
                    trackToggle: false,
                    rewardToggle: false,
                    eventTypeToggle: false
                })}> </LapsSearchButton>
                {/* <EventTypeSearchButton onClick={() => this.setState({
                    carToggle: false,
                    trackToggle: false,
                    rewardToggle: false,
                    eventTypeToggle: false
                })}> </EventTypeSearchButton> */}
                <br /><LikeButton />
                <br /><Results />
            </div>
        )
    }
}

function ContainerWrapper() {
    return (
        <AppWrapper />
    )
}

let domContainer = document.querySelector('#container');
ReactDOM.render(<ContainerWrapper />, domContainer);