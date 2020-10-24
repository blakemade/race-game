'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LikeButton = function (_React$Component) {
    _inherits(LikeButton, _React$Component);

    function LikeButton(props) {
        _classCallCheck(this, LikeButton);

        var _this = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this, props));

        _this.state = { liked: false };
        return _this;
    }

    _createClass(LikeButton, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return this.state.liked ? 'You liked this.' : React.createElement(
                'button',
                { onClick: function onClick() {
                        _this2.setState({ liked: true });
                        console.log('liked state set');
                    } },
                'Like'
            );
        }
    }]);

    return LikeButton;
}(React.Component);

var CarSearchButton = function (_React$Component2) {
    _inherits(CarSearchButton, _React$Component2);

    function CarSearchButton() {
        _classCallCheck(this, CarSearchButton);

        return _possibleConstructorReturn(this, (CarSearchButton.__proto__ || Object.getPrototypeOf(CarSearchButton)).apply(this, arguments));
    }

    _createClass(CarSearchButton, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'button',
                { onClick: this.props.onClick },
                'Car'
            );
        }
    }]);

    return CarSearchButton;
}(React.Component);

var TrackSearchButton = function (_React$Component3) {
    _inherits(TrackSearchButton, _React$Component3);

    function TrackSearchButton() {
        _classCallCheck(this, TrackSearchButton);

        return _possibleConstructorReturn(this, (TrackSearchButton.__proto__ || Object.getPrototypeOf(TrackSearchButton)).apply(this, arguments));
    }

    _createClass(TrackSearchButton, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'button',
                { onClick: this.props.onClick },
                'Track'
            );
        }
    }]);

    return TrackSearchButton;
}(React.Component);

var LapsSearchButton = function (_React$Component4) {
    _inherits(LapsSearchButton, _React$Component4);

    function LapsSearchButton() {
        _classCallCheck(this, LapsSearchButton);

        return _possibleConstructorReturn(this, (LapsSearchButton.__proto__ || Object.getPrototypeOf(LapsSearchButton)).apply(this, arguments));
    }

    _createClass(LapsSearchButton, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'button',
                { onClick: this.props.onClick },
                'Laps'
            );
        }
    }]);

    return LapsSearchButton;
}(React.Component);

var MakeSelector = function (_React$Component5) {
    _inherits(MakeSelector, _React$Component5);

    function MakeSelector(props) {
        _classCallCheck(this, MakeSelector);

        var _this6 = _possibleConstructorReturn(this, (MakeSelector.__proto__ || Object.getPrototypeOf(MakeSelector)).call(this, props));

        _this6.state = {
            data1: []
        };

        _this6.selectMake = _this6.selectMake.bind(_this6);
        return _this6;
    }

    _createClass(MakeSelector, [{
        key: 'selectMake',
        value: function selectMake(el) {
            this.props.onClick(el);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this7 = this;

            fetch('https://race-game.herokuapp.com/api/manufacturers'
            //  'http://localhost:3000/api/manufacturers'  
            , {
                credentials: 'omit'
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                // const filteredData = 
                _this7.setState({ data1: data });
                return data;
            }).then(function (data) {
                return console.log('data1 logging from MakeSelector fetch then chain: ', data);
            });
            // .then(() => console.log("logging this.state from end of data2 Fetch chain", JSON.stringify(this.state)));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this8 = this;

            // const MOCKMAKE = ['make1', 'make2', 'make3'];
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h3',
                    null,
                    'Choose car make'
                ),
                React.createElement('input', { name: 'make-search', type: 'text' }),
                React.createElement(
                    'button',
                    null,
                    'Search'
                ),
                React.createElement(
                    'ul',
                    null,
                    this.state.data1.map(function (el) {
                        return React.createElement(
                            'li',
                            { key: _this8.state.data1.indexOf(el),
                                id: _this8.state.data1.indexOf(el).toString()

                            },
                            React.createElement(
                                'button',
                                { onClick: function onClick() {
                                        return _this8.selectMake(el);
                                    } },
                                'Select Make'
                            ),
                            el.manufacturer_name
                        );
                    })
                )
            );
        }
    }]);

    return MakeSelector;
}(React.Component);

var ModelSelector = function (_React$Component6) {
    _inherits(ModelSelector, _React$Component6);

    function ModelSelector(props) {
        _classCallCheck(this, ModelSelector);

        var _this9 = _possibleConstructorReturn(this, (ModelSelector.__proto__ || Object.getPrototypeOf(ModelSelector)).call(this, props));

        _this9.state = {
            data1: [],
            make: _this9.props.make
        };

        _this9.selectMakeHandler = _this9.selectModelHandler.bind(_this9);
        return _this9;
    }

    _createClass(ModelSelector, [{
        key: 'selectModelHandler',
        value: function selectModelHandler(arg) {
            this.props.onClick(arg);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this10 = this;

            console.log(JSON.stringify(this.state));
            console.log(JSON.stringify(this.props));

            if (this.state.make) {

                // const lowerCaseMake = this.state.make.toLowerCase();
                var url = 'https://race-game.herokuapp.com/api/cars/' + this.state.make;

                fetch(url
                // 'https://race-game.herokuapp.com/api/cars/' + this.state.make // lowerCaseMake
                //  'http://localhost:3000/api/manufacturers'  
                , {
                    credentials: 'omit'
                }).then(function (response) {
                    return response.json();
                }).then(function (data) {
                    // const filteredData = 
                    _this10.setState({ data1: data });
                    return data;
                }).then(function (data) {
                    return console.log('data1 logging from MakeSelector fetch then chain (with make selected): ', data);
                });
            } else {

                fetch('https://race-game.herokuapp.com/api/cars'
                //  'http://localhost:3000/api/manufacturers'  
                , {
                    credentials: 'omit'
                }).then(function (response) {
                    return response.json();
                }).then(function (data) {
                    // const filteredData = 
                    _this10.setState({ data1: data });
                    return data;
                }).then(function (data) {
                    return console.log('data1 logging from MakeSelector fetch then chain: ', data);
                });
                // .then(() => console.log("logging this.state from end of data2 Fetch chain", JSON.stringify(this.state)));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this11 = this;

            // const MOCKMAKE = ['make1', 'make2', 'make3'];
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h3',
                    null,
                    'Choose car model'
                ),
                React.createElement(
                    'p',
                    null,
                    'Models filtered my selected make: ',
                    this.state.make
                ),
                React.createElement('input', { name: 'make-search', type: 'text' }),
                React.createElement(
                    'button',
                    null,
                    'Search'
                ),
                React.createElement(
                    'ul',
                    null,
                    this.state.data1.map(function (el) {
                        return React.createElement(
                            'li',
                            { key: _this11.state.data1.indexOf(el),
                                id: _this11.state.data1.indexOf(el)

                            },
                            React.createElement(
                                'button',
                                { onClick: function onClick() {
                                        return _this11.selectModelHandler(el);
                                    } },
                                'Select Model'
                            ),
                            el.model
                        );
                    })
                )
            );
        }
    }]);

    return ModelSelector;
}(React.Component);

var TrackSelector = function (_React$Component7) {
    _inherits(TrackSelector, _React$Component7);

    function TrackSelector(props) {
        _classCallCheck(this, TrackSelector);

        var _this12 = _possibleConstructorReturn(this, (TrackSelector.__proto__ || Object.getPrototypeOf(TrackSelector)).call(this, props));

        _this12.state = {
            data1: [],
            track: ""
        };
        return _this12;
    }

    _createClass(TrackSelector, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this13 = this;

            // const url = new URL('https://race-game.herokuapp.com/tracks'

            fetch('https://race-game.herokuapp.com/api/tracks', {
                credentials: 'omit'
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                // const filteredData = 
                _this13.setState({ data1: data });
                return data;
            }).then(function (data) {
                return console.log('data1 logging from TrackSelector fetch then chain: ', data);
            });
            // .then(() => console.log("logging this.state from end of data2 Fetch chain", JSON.stringify(this.state)));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this14 = this;

            // const MOCKMAKE = ['make1', 'make2', 'make3'];
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h3',
                    null,
                    'Choose track'
                ),
                React.createElement('input', { name: 'track-search', type: 'text' }),
                React.createElement(
                    'button',
                    null,
                    'Search'
                ),
                React.createElement(
                    'ul',
                    null,
                    this.state.data1.map(function (el) {
                        return React.createElement(
                            'li',
                            { key: _this14.state.data1.indexOf(el).toString(),
                                id: _this14.state.data1.indexOf(el).toString(),
                                'some-attribute': _this14.state.data1.indexOf(el).toString(),
                                onClick: function onClick() {
                                    _this14.setState({
                                        track: document.getElementById(_this14.state.data1.indexOf(el)).innerHTML
                                    });
                                    console.log(JSON.stringify(_this14.state.track));
                                }
                            },
                            el.track_name
                        );
                    })
                )
            );
        }
    }]);

    return TrackSelector;
}(React.Component);

var LapsSelector = function (_React$Component8) {
    _inherits(LapsSelector, _React$Component8);

    function LapsSelector(props) {
        _classCallCheck(this, LapsSelector);

        return _possibleConstructorReturn(this, (LapsSelector.__proto__ || Object.getPrototypeOf(LapsSelector)).call(this, props));
    }

    _createClass(LapsSelector, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h3',
                    null,
                    'Select minimum number of laps'
                ),
                React.createElement('input', { type: 'text' }),
                React.createElement(
                    'button',
                    null,
                    'submit'
                )
            );
        }
    }]);

    return LapsSelector;
}(React.Component);

var CarSubMenu = function (_React$Component9) {
    _inherits(CarSubMenu, _React$Component9);

    function CarSubMenu(props) {
        _classCallCheck(this, CarSubMenu);

        var _this16 = _possibleConstructorReturn(this, (CarSubMenu.__proto__ || Object.getPrototypeOf(CarSubMenu)).call(this, props));

        _this16.state = {
            makeBool: true,
            modelBool: false,
            make: "",
            makeId: null,
            model: ""
        };
        _this16.makeToggleHandleClick = _this16.makeToggleHandleClick.bind(_this16);
        _this16.modelToggleHandleClick = _this16.modelToggleHandleClick.bind(_this16);
        _this16.makeOnClick = _this16.makeOnClick.bind(_this16);
        _this16.modelSelectorHandler = _this16.modelSelectorHandler.bind(_this16);
        return _this16;
    }

    _createClass(CarSubMenu, [{
        key: 'modelSelectorHandler',
        value: function modelSelectorHandler(arg) {
            this.props.modelSelectorHandler(arg);
        }
    }, {
        key: 'makeToggleHandleClick',
        value: function makeToggleHandleClick() {
            this.setState({
                makeBool: !this.state.makeBool,
                modelBool: false
            });
        }
    }, {
        key: 'modelToggleHandleClick',
        value: function modelToggleHandleClick() {
            this.setState({
                makeBool: false,
                modelBool: !this.state.modelBool
            });
        }
    }, {
        key: 'makeOnClick',
        value: function makeOnClick(el) {
            this.setState({
                make: el.manufacturer_name,
                makeId: el.id
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.makeToggleHandleClick },
                    'Make'
                ),
                React.createElement(
                    'button',
                    { onClick: this.modelToggleHandleClick },
                    'Model'
                ),
                this.state.make && React.createElement(
                    'h3',
                    null,
                    'Selected Make: ',
                    this.state.make
                ),
                this.state.makeBool && React.createElement(MakeSelector, { onClick: this.makeOnClick }),
                this.state.modelBool && React.createElement(ModelSelector, { onClick: this.modelToggleHandleClick, make: this.state.makeId })
            );
        }
    }]);

    return CarSubMenu;
}(React.Component);

var TrackSubMenu = function (_React$Component10) {
    _inherits(TrackSubMenu, _React$Component10);

    function TrackSubMenu(props) {
        _classCallCheck(this, TrackSubMenu);

        var _this17 = _possibleConstructorReturn(this, (TrackSubMenu.__proto__ || Object.getPrototypeOf(TrackSubMenu)).call(this, props));

        _this17.state = {
            // data1: []
        };
        return _this17;
    }

    _createClass(TrackSubMenu, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(TrackSelector, null)
            );
        }
    }]);

    return TrackSubMenu;
}(React.Component);

var LapsSubMenu = function (_React$Component11) {
    _inherits(LapsSubMenu, _React$Component11);

    function LapsSubMenu(props) {
        _classCallCheck(this, LapsSubMenu);

        return _possibleConstructorReturn(this, (LapsSubMenu.__proto__ || Object.getPrototypeOf(LapsSubMenu)).call(this, props));
    }

    _createClass(LapsSubMenu, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(LapsSelector, null)
            );
        }
    }]);

    return LapsSubMenu;
}(React.Component);

var MainButtonState = function (_React$Component12) {
    _inherits(MainButtonState, _React$Component12);

    function MainButtonState(props) {
        _classCallCheck(this, MainButtonState);

        var _this19 = _possibleConstructorReturn(this, (MainButtonState.__proto__ || Object.getPrototypeOf(MainButtonState)).call(this, props));

        _this19.state = {
            carButtonBool: false,
            trackButtonBool: false,
            lapsButtonBool: false,
            makeName: null,
            makeId: null,
            modelName: null,
            modelId: null,
            track: null,
            laps: 0
        };

        _this19.carToggleHandleClick = _this19.carToggleHandleClick.bind(_this19);
        _this19.trackToggleHandleClick = _this19.trackToggleHandleClick.bind(_this19);
        _this19.lapsToggleHandleClick = _this19.lapsToggleHandleClick.bind(_this19);
        _this19.modelSelectorHandler = _this19.modelSelectorHandler.bind(_this19);
        return _this19;
    }

    _createClass(MainButtonState, [{
        key: 'modelSelectorHandler',
        value: function modelSelectorHandler(arg) {
            this.setState({
                modelId: arg.id,
                modelName: arg.name
            });
        }
    }, {
        key: 'carToggleHandleClick',
        value: function carToggleHandleClick() {
            this.setState({
                carButtonBool: !this.state.carButtonBool,
                trackButtonBool: false,
                lapsButtonBool: false
            });
            console.log("car toggled: ");
        }
    }, {
        key: 'trackToggleHandleClick',
        value: function trackToggleHandleClick() {
            this.setState({
                carButtonBool: false,
                trackButtonBool: !this.state.trackButtonBool,
                lapsButtonBool: false
            });
            console.log("track toggled: ");
        }
    }, {
        key: 'lapsToggleHandleClick',
        value: function lapsToggleHandleClick() {
            this.setState({
                carButtonBool: false,
                trackButtonBool: false,
                lapsButtonBool: !this.state.lapsButtonBool
            });
            console.log("laps toggled: ");
        }
    }, {
        key: 'render',
        value: function render() {
            console.log("current state: ", JSON.stringify(this.state));
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: 'main-buttons' },
                    React.createElement(CarSearchButton, { onClick: this.carToggleHandleClick }),
                    React.createElement(TrackSearchButton, { onClick: this.trackToggleHandleClick }),
                    React.createElement(LapsSearchButton, { onClick: this.lapsToggleHandleClick })
                ),
                ' ',
                React.createElement('br', null),
                React.createElement(
                    'div',
                    { className: 'sub-buttons' },
                    this.state.carButtonBool && React.createElement(CarSubMenu, { modelSelectorHandler: this.modelSelectorHandler }),
                    this.state.trackButtonBool && React.createElement(TrackSubMenu, null),
                    this.state.lapsButtonBool && React.createElement(LapsSubMenu, null)
                )
            );
        }
    }]);

    return MainButtonState;
}(React.Component);

var Results = function (_React$Component13) {
    _inherits(Results, _React$Component13);

    function Results(props) {
        _classCallCheck(this, Results);

        var _this20 = _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).call(this, props));

        _this20.state = {
            data1: '',
            data2: ''
        };
        return _this20;
    }

    _createClass(Results, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this21 = this;

            fetch('https://jsonplaceholder.typicode.com/posts', {
                credentials: 'include'
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                _this21.setState({ data1: JSON.stringify(data[0]) });
                return data;
            }).then(function (data) {
                return console.log('data logging from fetch then chain: ', data);
            }).then(function () {
                return console.log("logging this.state from end of data1 Fetch chain", JSON.stringify(_this21.state));
            });

            fetch('https://race-game.herokuapp.com/api/manufacturers'
            //  'http://localhost:3000/api/manufacturers'  
            , {
                credentials: 'omit'
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                _this21.setState({ data2: JSON.stringify(data[0]) });
                return data;
            }).then(function (data) {
                return console.log('data2 logging from fetch then chain: ', data);
            }).then(function () {
                return console.log("logging this.state from end of data2 Fetch chain", JSON.stringify(_this21.state));
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h3',
                    null,
                    'These are the results:'
                ),
                JSON.stringify(this.state.data1),
                JSON.stringify(this.state.data2)
            );
        }
    }]);

    return Results;
}(React.Component);

function ContainerWrapper() {
    return React.createElement(
        'div',
        null,
        React.createElement(MainButtonState, null),
        React.createElement(Results, null)
    );
}

var domContainer = document.querySelector('#container');
ReactDOM.render(React.createElement(ContainerWrapper, null), domContainer);