import React from 'react'
import { render } from 'react-dom'

import Sidebar from './components/Sidebar.jsx'
// Anmate.css 样式 & font-awesome样式

import './main.less';
import 'animate.css/animate.min.css';

export default class Init extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Sidebar />
                <div id="rightWrap">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

