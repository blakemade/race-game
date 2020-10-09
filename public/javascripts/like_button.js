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

        return _possibleConstructorReturn(this, (MakeSelector.__proto__ || Object.getPrototypeOf(MakeSelector)).call(this, props));
    }

    _createClass(MakeSelector, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            var MOCKMAKE = ['make1', 'make2', 'make3'];
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
                    MOCKMAKE.map(function (el) {
                        return React.createElement(
                            'li',
                            { key: MOCKMAKE.indexOf(el) },
                            el
                        );
                    })
                )
            );
        }
    }]);

    return MakeSelector;
}(React.Component);

var CarSubMenu = function (_React$Component5) {
    _inherits(CarSubMenu, _React$Component5);

    function CarSubMenu(props) {
        _classCallCheck(this, CarSubMenu);

        var _this6 = _possibleConstructorReturn(this, (CarSubMenu.__proto__ || Object.getPrototypeOf(CarSubMenu)).call(this, props));

        _this6.state = {
            makeBool: false,
            modelBool: false
        };
        _this6.makeToggleHandleClick = _this6.makeToggleHandleClick.bind(_this6);
        _this6.modelToggleHandleClick = _this6.modelToggleHandleClick.bind(_this6);
        return _this6;
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
                this.state.modelBool && React.createElement(
                    'p',
                    null,
                    'choose model'
                )
            );
        }
    }]);

    return CarSubMenu;
}(React.Component);

var TrackSubMenu = function (_React$Component6) {
    _inherits(TrackSubMenu, _React$Component6);

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

var MainButtonState = function (_React$Component7) {
    _inherits(MainButtonState, _React$Component7);

    function MainButtonState(props) {
        _classCallCheck(this, MainButtonState);

        var _this8 = _possibleConstructorReturn(this, (MainButtonState.__proto__ || Object.getPrototypeOf(MainButtonState)).call(this, props));

        _this8.state = {
            carButtonBool: false,
            trackButtonBool: false
        };
        _this8.carToggleHandleClick = _this8.carToggleHandleClick.bind(_this8);
        _this8.trackToggleHandleClick = _this8.trackToggleHandleClick.bind(_this8);
        return _this8;
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

var Results = function (_React$Component8) {
    _inherits(Results, _React$Component8);

    function Results(props) {
        _classCallCheck(this, Results);

        var _this9 = _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).call(this, props));

        _this9.state = {
            data: '',
            data2: ''
        };
        return _this9;
    }

    _createClass(Results, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this10 = this;

            fetch('https://jsonplaceholder.typicode.com/posts', {
                credentials: 'include'
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                _this10.setState({ data: JSON.stringify(data[0]) });
                return data;
            }).then(function (data) {
                return console.log('data logging from fetch then chain: ', data);
            }).then(function () {
                return console.log("logging this.state from end of Fetch chain", JSON.stringify(_this10.state));
            });

            fetch('https://race-game.herokuapp.com/api/manufacturers' /** 'http://localhost:3000/api/manufacturers' */, {
                credentials: 'include'
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                _this10.setState({ data2: JSON.stringify(data[0]) });
                return data;
            }).then(function (data) {
                return console.log('data2 logging from fetch then chain: ', data);
            }).then(function () {
                return console.log("logging this.state from end of Fetch chain", JSON.stringify(_this10.state));
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
                JSON.stringify(this.state.data),
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