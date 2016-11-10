import React from 'react'

export default class Timer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            timer: 0
        }
    }

    tick = () => {
        this.setState({ timer: this.state.timer + 1 });
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const timerStyle = {
            color: '#FF4081',
            fontWeight: 'bold'
        }

        return (
            <div id="timer" className="animated bounceInLeft">This page has been opened {'for'}: <span style={timerStyle}>{this.state.timer}</span> seconds.</div>
        )
    }
}











































