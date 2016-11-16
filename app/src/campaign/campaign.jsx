import React from 'react'
import {Table, Icon, Tooltip} from 'antd'
import {Link} from 'react-router'

import './campaign.less'

import Title from '../components/Title.jsx'
import Header from './components/header.jsx'

export default class Antdes extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div id="wrap">
                <Title name="广告系列(Press F12, watch Console)" />
                <Header />
            </div>
        )
    }

}