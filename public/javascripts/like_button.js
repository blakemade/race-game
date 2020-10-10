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

var MakeSelector = function (_React$Component4) {
    _inherits(MakeSelector, _React$Component4);

    function MakeSelector(props) {
        _classCallCheck(this, MakeSelector);

        var _this5 = _possibleConstructorReturn(this, (MakeSelector.__proto__ || Object.getPrototypeOf(MakeSelector)).call(this, props));

        _this5.state = {
            data1: []
        };
        return _this5;
    }

    _createClass(MakeSelector, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this6 = this;

            fetch('https://race-game.herokuapp.com/api/manufacturers'
            //  'http://localhost:3000/api/manufacturers'  
            , {
                credentials: 'omit'
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                // const filteredData = 
                _this6.setState({ data1: data });
                return data;
            }).then(function (data) {
                return console.log('data1 logging from MakeSelector fetch then chain: ', data);
            });
            // .then(() => console.log("logging this.state from end of data2 Fetch chain", JSON.stringify(this.state)));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this7 = this;

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
                    'ul',
                    null,
                    this.state.data1.map(function (el) {
                        return React.createElement(
                            'li',
                            { key: _this7.state.data1.indexOf(el) },
                            el.manufacturer_name
                        );
                    })
                )
            );
        }
    }]);

    return MakeSelector;
}(React.Component);

var ModelSelector = function (_React$Component5) {
    _inherits(ModelSelector, _React$Component5);

    function ModelSelector(props) {
        _classCallCheck(this, ModelSelector);

        var _this8 = _possibleConstructorReturn(this, (ModelSelector.__proto__ || Object.getPrototypeOf(ModelSelector)).call(this, props));

        _this8.state = {
            data1: []
        };
        return _this8;
    }

    _createClass(ModelSelector, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this9 = this;

            fetch('https://race-game.herokuapp.com/api/cars'
            //  'http://localhost:3000/api/manufacturers'  
            , {
                credentials: 'omit'
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                // const filteredData = 
                _this9.setState({ data1: data });
                return data;
            }).then(function (data) {
                return console.log('data1 logging from MakeSelector fetch then chain: ', data);
            });
            // .then(() => console.log("logging this.state from end of data2 Fetch chain", JSON.stringify(this.state)));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this10 = this;

            // const MOCKMAKE = ['make1', 'make2', 'make3'];
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h3',
                    null,
                    'Choose car model'
                ),
                React.createElement('input', { name: 'make-search', type: 'text' }),
                React.createElement(
                    'ul',
                    null,
                    this.state.data1.map(function (el) {
                        return React.createElement(
                            'li',
                            { key: _this10.state.data1.indexOf(el) },
                            el.manufacturer_name
                        );
                    })
                )
            );
        }
    }]);

    return ModelSelector;
}(React.Component);

var CarSubMenu = function (_React$Component6) {
    _inherits(CarSubMenu, _React$Component6);

    function CarSubMenu(props) {
        _classCallCheck(this, CarSubMenu);

        var _this11 = _possibleConstructorReturn(this, (CarSubMenu.__proto__ || Object.getPrototypeOf(CarSubMenu)).call(this, props));

        _this11.state = {
            makeBool: false,
            modelBool: false
        };
        _this11.makeToggleHandleClick = _this11.makeToggleHandleClick.bind(_this11);
        _this11.modelToggleHandleClick = _this11.modelToggleHandleClick.bind(_this11);
        return _this11;
    }

    _createClass(CarSubMenu, [{
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
                this.state.makeBool && React.createElement(MakeSelector, null),
                this.state.modelBool && React.createElement(ModelSelector, null)
            );
        }
    }]);

    return CarSubMenu;
}(React.Component);

var TrackSubMenu = function (_React$Component7) {
    _inherits(TrackSubMenu, _React$Component7);

    function TrackSubMenu() {
        _classCallCheck(this, TrackSubMenu);

        return _possibleConstructorReturn(this, (TrackSubMenu.__proto__ || Object.getPrototypeOf(TrackSubMenu)).apply(this, arguments));
    }

    _createClass(TrackSubMenu, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    null,
                    'Track'
                ),
                React.createElement(
                    'button',
                    null,
                    'Variant'
                )
            );
        }
    }]);

    return TrackSubMenu;
}(React.Component);

var MainButtonState = function (_React$Component8) {
    _inherits(MainButtonState, _React$Component8);

    function MainButtonState(props) {
        _classCallCheck(this, MainButtonState);

        var _this13 = _possibleConstructorReturn(this, (MainButtonState.__proto__ || Object.getPrototypeOf(MainButtonState)).call(this, props));

        _this13.state = {
            carButtonBool: false,
            trackButtonBool: false
        };
        _this13.carToggleHandleClick = _this13.carToggleHandleClick.bind(_this13);
        _this13.trackToggleHandleClick = _this13.trackToggleHandleClick.bind(_this13);
        return _this13;
    }

    _createClass(MainButtonState, [{
        key: 'carToggleHandleClick',
        value: function carToggleHandleClick() {
            this.setState({
                carButtonBool: !this.state.carButtonBool,
                trackButtonBool: false
            });
            console.log("car toggled: ");
        }
    }, {
        key: 'trackToggleHandleClick',
        value: function trackToggleHandleClick() {
            this.setState({
                carButtonBool: false,
                trackButtonBool: !this.state.trackButtonBool
            });
            console.log("track toggled: ");
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
                    React.createElement(TrackSearchButton, { onClick: this.trackToggleHandleClick })
                ),
                ' ',
                React.createElement('br', null),
                React.createElement(
                    'div',
                    { className: 'sub-buttons' },
                    this.state.carButtonBool && React.createElement(CarSubMenu, null),
                    this.state.trackButtonBool && React.createElement(TrackSubMenu, null)
                )
            );
        }
    }]);

    return MainButtonState;
}(React.Component);

var Results = function (_React$Component9) {
    _inherits(Results, _React$Component9);

    function Results(props) {
        _classCallCheck(this, Results);

        var _this14 = _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).call(this, props));

        _this14.state = {
            data1: '',
            data2: ''
        };
        return _this14;
    }

    _createClass(Results, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this15 = this;

            fetch('https://jsonplaceholder.typicode.com/posts', {
                credentials: 'include'
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                _this15.setState({ data1: JSON.stringify(data[0]) });
                return data;
            }).then(function (data) {
                return console.log('data logging from fetch then chain: ', data);
            }).then(function () {
                return console.log("logging this.state from end of data1 Fetch chain", JSON.stringify(_this15.state));
            });

            fetch('https://race-game.herokuapp.com/api/manufacturers'
            //  'http://localhost:3000/api/manufacturers'  
            , {
                credentials: 'omit'
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                _this15.setState({ data2: JSON.stringify(data[0]) });
                return data;
            }).then(function (data) {
                return console.log('data2 logging from fetch then chain: ', data);
            }).then(function () {
                return console.log("logging this.state from end of data2 Fetch chain", JSON.stringify(_this15.state));
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