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

class LapsSearchButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}>Laps</button>
        )
    }
}

class MakeSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data1: []
        };

        this.selectMake = this.selectMake.bind(this);
    }

    selectMake(el) {
        this.props.onClick(el);
    }

    componentDidMount() {

        fetch(
            'https://race-game.herokuapp.com/api/manufacturers'
            //  'http://localhost:3000/api/manufacturers'  
            , {
                credentials: 'omit',
            })
            .then(response => response.json())
            .then((data) => {
                // const filteredData = 
                this.setState({ data1: data });
                return data;
            })
            .then(data => console.log('data1 logging from MakeSelector fetch then chain: ', data));
        // .then(() => console.log("logging this.state from end of data2 Fetch chain", JSON.stringify(this.state)));
    }

    render() {
        // const MOCKMAKE = ['make1', 'make2', 'make3'];
        return (
            <div>
                <h3>Choose car make</h3>
                <input name="make-search" type="text" /><button>Search</button>
                <ul>
                    {this.state.data1.map(el => {
                        return (

                            <li key={this.state.data1.indexOf(el)}
                                id={this.state.data1.indexOf(el).toString()}

                            >
                                <button
                                    onClick={() => this.selectMake(el)}
                                >Select Make
                                </button>
                                {el.manufacturer_name}
                            </li>
                        )
                    })}

                </ul>
            </div>
        )
    }
}

class ModelSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data1: [],
            make: this.props.make
        };
    }

    componentDidMount() {
        
        console.log(JSON.stringify(this.state));
        console.log(JSON.stringify(this.props)); 

        if (this.state.make) {

            // const lowerCaseMake = this.state.make.toLowerCase();
            const url = 'https://race-game.herokuapp.com/api/cars/' + this.state.make; 

            fetch(
                url
                // 'https://race-game.herokuapp.com/api/cars/' + this.state.make // lowerCaseMake
                //  'http://localhost:3000/api/manufacturers'  
                , {
                    credentials: 'omit',
                })
                .then(response => response.json())
                .then((data) => {
                    // const filteredData = 
                    this.setState({ data1: data });
                    return data;
                })
                .then(data => console.log('data1 logging from MakeSelector fetch then chain (with make selected): ', data));

        } else {

            fetch(
                'https://race-game.herokuapp.com/api/cars'
                //  'http://localhost:3000/api/manufacturers'  
                , {
                    credentials: 'omit',
                })
                .then(response => response.json())
                .then((data) => {
                    // const filteredData = 
                    this.setState({ data1: data });
                    return data;
                })
                .then(data => console.log('data1 logging from MakeSelector fetch then chain: ', data));
            // .then(() => console.log("logging this.state from end of data2 Fetch chain", JSON.stringify(this.state)));
        }
    }

    render() {
        // const MOCKMAKE = ['make1', 'make2', 'make3'];
        return (
            <div>
                <h3>Choose car model</h3>
        <p>Models filtered my selected make: {this.state.make}</p>
                <input name="make-search" type="text" /><button>Search</button>
                <ul>
                    {this.state.data1.map(el => <li key={this.state.data1.indexOf(el)}>{el.model}</li>)}
                </ul>
            </div>
        )
    }
}

class TrackSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data1: [],
            track: ""
        };
    }

    componentDidMount() {
        // const url = new URL('https://race-game.herokuapp.com/tracks'

        fetch(
            'https://race-game.herokuapp.com/api/tracks',
            {
                credentials: 'omit',
            })
            .then(response => response.json())
            .then((data) => {
                // const filteredData = 
                this.setState({ data1: data });
                return data;
            })
            .then(data => console.log('data1 logging from TrackSelector fetch then chain: ', data));
        // .then(() => console.log("logging this.state from end of data2 Fetch chain", JSON.stringify(this.state)));
    }

    render() {
        // const MOCKMAKE = ['make1', 'make2', 'make3'];
        return (
            <div>
                <h3>Choose track</h3>
                <input name="track-search" type="text" /><button>Search</button>
                <ul>
                    {this.state.data1.map(el => {
                        return (
                            <li key={this.state.data1.indexOf(el).toString()}
                                id={this.state.data1.indexOf(el).toString()}
                                some-attribute={this.state.data1.indexOf(el).toString()}
                                onClick={() => {
                                    this.setState({
                                        track: document.getElementById(this.state.data1.indexOf(el)).innerHTML
                                    });
                                    console.log(JSON.stringify(this.state.track));
                                }}
                            >
                                {el.track_name}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

class LapsSelector extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <h3>Select minimum number of laps</h3>
                <input type="text"></input><button>submit</button>
            </div>
        )
    }
}

class CarSubMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            makeBool: true,
            modelBool: false,
            make: "",
            makeId: null,
            model: ""
        };
        this.makeToggleHandleClick = this.makeToggleHandleClick.bind(this);
        this.modelToggleHandleClick = this.modelToggleHandleClick.bind(this);
        this.makeOnClick = this.makeOnClick.bind(this);
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

    makeOnClick(el) {
        this.setState({
            make: el.manufacturer_name,
            makeId: el.id
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.makeToggleHandleClick}>Make</button>
                <button onClick={this.modelToggleHandleClick}>Model</button>
                {this.state.make && <h3>Selected Make: {this.state.make}</h3>}
                {this.state.makeBool && <MakeSelector onClick={this.makeOnClick}></MakeSelector>}
                {this.state.modelBool && <ModelSelector make={this.state.makeId} />}
            </div>
        )
    }
}

class TrackSubMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // data1: []
        }
    }

    render() {
        return (
            <div>
                <TrackSelector />
            </div>
        )
    }
}

class LapsSubMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <LapsSelector />
            </div>
        )
    }
}

class MainButtonState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carButtonBool: false,
            trackButtonBool: false,
            lapsButtonBool: false
        }
        this.carToggleHandleClick = this.carToggleHandleClick.bind(this);
        this.trackToggleHandleClick = this.trackToggleHandleClick.bind(this);
        this.lapsToggleHandleClick = this.lapsToggleHandleClick.bind(this);
    }

    carToggleHandleClick() {
        this.setState({
            carButtonBool: !this.state.carButtonBool,
            trackButtonBool: false,
            lapsButtonBool: false
        });
        console.log("car toggled: ");
    }

    trackToggleHandleClick() {
        this.setState({
            carButtonBool: false,
            trackButtonBool: !this.state.trackButtonBool,
            lapsButtonBool: false
        })
        console.log("track toggled: ");
    }

    lapsToggleHandleClick() {
        this.setState({
            carButtonBool: false,
            trackButtonBool: false,
            lapsButtonBool: !this.state.lapsButtonBool
        })
        console.log("laps toggled: ");
    }

    render() {
        console.log("current state: ", JSON.stringify(this.state));
        return (
            <div>
                <div className="main-buttons">
                    <CarSearchButton onClick={this.carToggleHandleClick} />
                    <TrackSearchButton onClick={this.trackToggleHandleClick} />
                    <LapsSearchButton onClick={this.lapsToggleHandleClick} />
                </div> <br></br>
                <div className="sub-buttons">
                    {this.state.carButtonBool && <CarSubMenu />}
                    {this.state.trackButtonBool && <TrackSubMenu />}
                    {this.state.lapsButtonBool && <LapsSubMenu />}
                </div>
            </div>
        )
    }
}



class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data1: '',
            data2: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            credentials: 'include',
        })
            .then(response => response.json())
            .then((data) => {
                this.setState({ data1: JSON.stringify(data[0]) });
                return data;
            })
            .then(data => console.log('data logging from fetch then chain: ', data))
            .then(() => console.log("logging this.state from end of data1 Fetch chain", JSON.stringify(this.state)));

        fetch(
            'https://race-game.herokuapp.com/api/manufacturers'
            //  'http://localhost:3000/api/manufacturers'  
            , {
                credentials: 'omit',
            })
            .then(response => response.json())
            .then((data) => {
                this.setState({ data2: JSON.stringify(data[0]) });
                return data;
            })
            .then(data => console.log('data2 logging from fetch then chain: ', data))
            .then(() => console.log("logging this.state from end of data2 Fetch chain", JSON.stringify(this.state)));
    }

    render() {
        return (
            <div>
                <h3>These are the results:</h3>
                {JSON.stringify(this.state.data1)}
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