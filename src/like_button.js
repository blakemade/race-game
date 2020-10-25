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
            data1: [],
            makeName: "",
            makeId: null
        };

        this.selectMake = this.selectMake.bind(this);
    }

    selectMake(el) {
        this.props.onClick(el);
        this.setState({
            makeName: el.manufacturer_name,
            makeId: el.id
        })
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
                                <button onClick={() => this.selectMake(el)}>
                                    Select Make
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
            makeId: this.props.makeId,
            makeName: this.props.makeName,
            modelName: "",
            modelId: null
        };

        this.selectModelHandler = this.selectModelHandler.bind(this);
    }

    selectModelHandler(arg) {
        this.props.onClick(arg);
        this.setState({
            modelName: arg.model,
            modelId: arg.id
        })
    }




    componentDidMount() {

        console.log(JSON.stringify(this.state));
        console.log(JSON.stringify(this.props));

        if (this.state.makeId) {

            // const lowerCaseMake = this.state.make.toLowerCase();
            const url = 'https://race-game.herokuapp.com/api/cars/' + this.state.makeId;

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
        console.log(JSON.stringify(this.state));

        return (
            <div>
                <h3>Choose car model</h3>
                {this.state.makeId && <p>Models filtered my selected make: {this.state.makeName}</p>}
                {this.state.model && <p>Selected model: {this.state.model}</p>}
                <input name="make-search" type="text" /><button>Search</button>
                <ul>
                    {this.state.data1.map(el => {
                        return (
                            <li key={this.state.data1.indexOf(el)}
                                id={this.state.data1.indexOf(el)}

                            >
                                <button onClick={() => this.selectModelHandler(el)}>
                                    Select Model
                                </button>
                                {el.model}
                            </li>
                        )
                    })}
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
            makeName: "",
            makeId: null,
            modelName: "",
            modelId: null
        };

        this.makeToggleHandleClick = this.makeToggleHandleClick.bind(this);
        this.modelToggleHandleClick = this.modelToggleHandleClick.bind(this);
        this.makeOnClick = this.makeOnClick.bind(this);
        this.modelSelectorHandler = this.modelSelectorHandler.bind(this);
    }

    modelSelectorHandler(arg) {
        this.props.modelSelectorHandler(arg);
        this.setState({
            modelName: arg.model,
            modelId: arg.id
        })
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
            makeName: el.manufacturer_name,
            makeId: el.id
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.makeToggleHandleClick}>Make</button>
                <button onClick={this.modelToggleHandleClick}>Model</button>
                {this.state.makeName && <h3>Selected Make: {this.state.makeName}</h3>}
                {this.state.modelName && <h3>Selected Model: {this.state.modelName}</h3>}
                {this.state.makeBool && <MakeSelector onClick={this.makeOnClick} />}
                {this.state.modelBool && <ModelSelector onClick={this.modelSelectorHandler} makeId={this.state.makeId} makeName={this.state.makeName} />}
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
            lapsButtonBool: false,
            makeName: "",
            makeId: null,
            modelName: "",
            modelId: null,
            track: null,
            laps: null
        }

        this.carToggleHandleClick = this.carToggleHandleClick.bind(this);
        this.trackToggleHandleClick = this.trackToggleHandleClick.bind(this);
        this.lapsToggleHandleClick = this.lapsToggleHandleClick.bind(this);
        this.modelSelectorHandler = this.modelSelectorHandler.bind(this);
    }

    modelSelectorHandler(arg) {
        this.setState({
            modelId: arg.id,
            modelName: arg.model
        })
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
                    {this.state.carButtonBool && <CarSubMenu modelSelectorHandler={this.modelSelectorHandler} />}
                    {this.state.trackButtonBool && <TrackSubMenu />}
                    {this.state.lapsButtonBool && <LapsSubMenu />}
                </div>
                <div>
                    <Results 
                    makeId={this.state.makeId}
                    makeName={this.state.makeName}
                    modelId={this.state.modelId}
                    modelName={this.state.modelName}
                    trackId={this.state.trackId}
                    trackName={this.state.trackName}
                    laps={this.state.laps}/>
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
            data2: '',
            makeId: this.props.makeId,
            makeName: this.props.makeName,
            modelId: this.props.modelId,
            modelName: this.props.modelName,
            trackId: this.props.trackId,
            trackName: this.props.trackName,
            laps: this.props.laps
        }
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts', {
        //     credentials: 'include',
        // })
        //     .then(response => response.json())
        //     .then((data) => {
        //         this.setState({ data1: JSON.stringify(data[0]) });
        //         return data;
        //     })
        //     .then(data => console.log('data logging from fetch then chain: ', data))
        //     .then(() => console.log("logging this.state from end of data1 Fetch chain", JSON.stringify(this.state)));

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
                <p>Your selected criteria:</p>
                {!this.props.makeName && !this.props.modelName && !this.props.trackName && !this.props.laps && <p>Please select at least either a make and/or model, a track, or a minimum number of laps</p>}

                {this.props.makeName && <p>Selected make: {this.props.makeName}</p>}
                {this.props.modelName && <p>Selected model: {this.props.modelName}</p>}
                {this.props.trackName && <p>Selected track: {this.props.makeName}</p>}
                {this.props.laps && <p>Minimum number of laps: {this.props.laps}</p>}
 

                <div>
                    <p>Available events:</p>
                    {JSON.stringify(this.state.data2)}
                </div>
            </div>
        )
    }
}












function ContainerWrapper() {
    return (
        <div>
            <MainButtonState />
        </div>
    )
}





let domContainer = document.querySelector('#container');
ReactDOM.render(<ContainerWrapper />, domContainer);