import React from 'react'
import './last.less'

export default class Last extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h1 className="animated flipInx" id="ege">没有彩蛋</h1>
                <img src={require('../images/last.jpg')} width="100" id="lastPic" className="animated fadeInUp"/>
            </div>
        )
    }
}