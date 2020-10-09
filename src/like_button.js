'use strict';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        return (
            this.state.liked ?
                'You liked this.' :
                (
                    <button onClick={() => {
                        this.setState({ liked: true });
                        console.log('liked state set');
                    }}>
                        Like
                    </button>
                )
        )
    }
}


class CarSearchButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}>Car</button>
        )
    }
}

class TrackSearchButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}>Track</button>
        )
    }
}

class MakeSelector extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const MOCKMAKE = ['make1', 'make2', 'make3'];
        return (
            <div>
                <h3>Choose car make</h3>
                <input name="make-search" type="text" />
                <ul>
                    {MOCKMAKE.map(el => <li key={MOCKMAKE.indexOf(el)}>{el}</li>)}
                </ul>
            </div>
        )
    }
}


class CarSubMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            makeBool: false,
            modelBool: false
        };
        this.makeToggleHandleClick = this.makeToggleHandleClick.bind(this);
        this.modelToggleHandleClick = this.modelToggleHandleClick.bind(this);
    }

    makeToggleHandleClick() {
        this.setState({
            makeBool: !this.state.makeBool,
            modelBool: false
        });
    }

    modelToggleHandleClick() {
        this.setState({
            makeBool: false,
            modelBool: !this.state.modelBool
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.makeToggleHandleClick}>Make</button>
                <button onClick={this.modelToggleHandleClick}>Model</button>
                {this.state.makeBool && <MakeSelector />}
                {this.state.modelBool && <p>choose model</p>}
            </div>
        )
    }
}

class TrackSubMenu extends React.Component {
    render() {
        return (
            <div>
                <button>Track</button>
                <button>Variant</button>
            </div>
        )
    }
}

class MainButtonState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carButtonBool: false,
            trackButtonBool: false
        }
        this.carToggleHandleClick = this.carToggleHandleClick.bind(this);
        this.trackToggleHandleClick = this.trackToggleHandleClick.bind(this);
    }

    carToggleHandleClick() {
        this.setState({
            carButtonBool: !this.state.carButtonBool,
            trackButtonBool: false
        });
        console.log("car toggled: ");
    }

    trackToggleHandleClick() {
        this.setState({
            carButtonBool: false,
            trackButtonBool: !this.state.trackButtonBool
        })
        console.log("track toggled: ");
    }

    render() {
        console.log("current state: ", JSON.stringify(this.state));
        return (
            <div>
                <div className="main-buttons">
                    <CarSearchButton onClick={this.carToggleHandleClick} />
                    <TrackSearchButton onClick={this.trackToggleHandleClick} />
                </div> <br></br>
                <div className="sub-buttons">
                    {this.state.carButtonBool && <CarSubMenu />}
                    {this.state.trackButtonBool && <TrackSubMenu />}
                </div>
            </div>
        )
    }
}



class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            data2: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            credentials: 'include',
        })
            .then(response => response.json())
            .then((data) => {
                this.setState({ data: JSON.stringify(data[0]) });
                return data;
            })
            .then(data => console.log('data logging from fetch then chain: ', data))
            .then(() => console.log("logging this.state from end of Fetch chain", JSON.stringify(this.state)));

        fetch('https://race-game.herokuapp.com/api/manufacturers' /** 'http://localhost:3000/api/manufacturers' */ , {
            credentials: 'include',
        })
            .then(response => response.json())
            .then((data) => {
                this.setState({ data2: JSON.stringify(data[0]) });
                return data;
            })
            .then(data => console.log('data2 logging from fetch then chain: ', data))
            .then(() => console.log("logging this.state from end of Fetch chain", JSON.stringify(this.state)))
    }

    render() {
        return (
            <div>
                <h3>These are the results:</h3>
                {JSON.stringify(this.state.data)}
                {JSON.stringify(this.state.data2)}
            </div>
        )
    }
}












function ContainerWrapper() {
    return (
        <div>
            <MainButtonState />
            <Results />
        </div>
    )
}





let domContainer = document.querySelector('#container');
ReactDOM.render(<ContainerWrapper />, domContainer);