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

var Results = function (_React$Component2) {
    _inherits(Results, _React$Component2);

    function Results(props) {
        _classCallCheck(this, Results);

        var _this3 = _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).call(this, props));

        _this3.state = {};

        return _this3;
    }

    _createClass(Results, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this4 = this;

            // let results = fetch('https://jsonplaceholder.typicode.com/posts')
            // console.log(JSON.stringify(results));

            fetch('https://jsonplaceholder.typicode.com/posts', {
                credentials: 'include'

            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                _this4.setState({ data: JSON.stringify(data[0]) });
                return data;
            }).then(function (data) {
                return console.log('data logging from fetch then chain: ', data);
            }).then(function () {
                return console.log("logging this.state from end of Fetch chain", JSON.stringify(_this4.state));
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                JSON.stringify(this.state)
            );
        }
    }]);

    return Results;
}(React.Component);

var CarSearchButton = function (_React$Component3) {
    _inherits(CarSearchButton, _React$Component3);

    function CarSearchButton(props) {
        _classCallCheck(this, CarSearchButton);

        var _this5 = _possibleConstructorReturn(this, (CarSearchButton.__proto__ || Object.getPrototypeOf(CarSearchButton)).call(this, props));

        _this5.state = {
            toggled: false
        };
        return _this5;
    }

    _createClass(CarSearchButton, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'button',
                null,
                'Car'
            );
        }
    }]);

    return CarSearchButton;
}(React.Component);

var TrackSearchButton = function (_React$Component4) {
    _inherits(TrackSearchButton, _React$Component4);

    function TrackSearchButton(props) {
        _classCallCheck(this, TrackSearchButton);

        var _this6 = _possibleConstructorReturn(this, (TrackSearchButton.__proto__ || Object.getPrototypeOf(TrackSearchButton)).call(this, props));

        _this6.state = {
            toggled: false
        };
        return _this6;
    }

    _createClass(TrackSearchButton, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'button',
                null,
                'Track'
            );
        }
    }]);

    return TrackSearchButton;
}(React.Component);

var LapsSearchButton = function (_React$Component5) {
    _inherits(LapsSearchButton, _React$Component5);

    function LapsSearchButton(props) {
        _classCallCheck(this, LapsSearchButton);

        var _this7 = _possibleConstructorReturn(this, (LapsSearchButton.__proto__ || Object.getPrototypeOf(LapsSearchButton)).call(this, props));

        _this7.state = {
            toggled: false
        };
        return _this7;
    }

    _createClass(LapsSearchButton, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'button',
                null,
                'Laps'
            );
        }
    }]);

    return LapsSearchButton;
}(React.Component);

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


var AppWrapper = function (_React$Component6) {
    _inherits(AppWrapper, _React$Component6);

    function AppWrapper(props) {
        _classCallCheck(this, AppWrapper);

        var _this8 = _possibleConstructorReturn(this, (AppWrapper.__proto__ || Object.getPrototypeOf(AppWrapper)).call(this, props));

        _this8.state = {
            carToggle: false,
            trackToggle: false,
            rewardToggle: false,
            eventTypeToggle: false
        };
        return _this8;
    }

    _createClass(AppWrapper, [{
        key: 'render',
        value: function render() {
            var _this9 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    CarSearchButton,
                    { onClick: function onClick() {
                            _this9.setState({
                                carToggle: !carToggle,
                                trackToggle: false,
                                rewardToggle: false,
                                eventTypeToggle: false
                            });
                            console.log('car state toggled');
                        } },
                    ' '
                ),
                React.createElement(
                    TrackSearchButton,
                    { onClick: function onClick() {
                            return _this9.setState({
                                carToggle: false,
                                trackToggle: false,
                                rewardToggle: false,
                                eventTypeToggle: false
                            });
                        } },
                    ' '
                ),
                React.createElement(
                    LapsSearchButton,
                    { onClick: function onClick() {
                            return _this9.setState({
                                carToggle: false,
                                trackToggle: false,
                                rewardToggle: false,
                                eventTypeToggle: false
                            });
                        } },
                    ' '
                ),
                React.createElement('br', null),
                React.createElement(LikeButton, null),
                React.createElement('br', null),
                React.createElement(Results, null)
            );
        }
    }]);

    return AppWrapper;
}(React.Component);

function ContainerWrapper() {
    return React.createElement(AppWrapper, null);
}

var domContainer = document.querySelector('#container');
ReactDOM.render(React.createElement(ContainerWrapper, null), domContainer);