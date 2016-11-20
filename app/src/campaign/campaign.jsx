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
            tData: [],
            loading: true
        }
    }

    rowClick = (e) => {
        console.log(e)
    }


    // 获取表格数据
    fetchTableData = () => {
        fetch('../data/tableData.json')
            .then((res) => { return res.json() })
            .then((data) => { this.setState({loading: false}); this.setState({tData: data.rowData}) })
            .catch((e) => { console.log(e.message) })
    }

    refresh = (data) => {
        this.setState({ tData: data.rowData })
    }

    componentDidMount(){
        this.fetchTableData();
    }

    render(){
        const columns = [
            {
                title: '系列名称',
                dataIndex: 'name'
            },{
                title: '系列ID',
                dataIndex: 'key'
            },{
                title: '投放状态',
                dataIndex: 'status'
            },{
                title: '曝光量',
                dataIndex: 'exp'
            },{
                title: '曝光URL',
                dataIndex: 'expURL',
                render: (text) => (<a href={text} target="_blank" >{text}</a>)
            },{
                title: '点击量',
                dataIndex: 'clickNum'
            },{
                title: '点击率',
                dataIndex: 'clickRate',
                render: (text) => (<span>{text}%</span>)
            },{
                title: '点击均价',
                dataIndex: 'clickPrice'
            },{
                title: '投放额度',
                dataIndex: 'limit'
            },{
                title: '操作',
                dataIndex: 'handle',
                render: (
                    (t, r, i) => (
                        <span>
                            <Tooltip title="编辑"><Link to={"/edit/" + (i+1)}><Icon type="edit"/></Link></Tooltip> &nbsp; &nbsp;
                            <Tooltip title="编辑"><Icon type="delete" style={{color: '#FD5B5B'}}/></Tooltip>
                        </span>
                    )
                )
            }
        ]


        return (
            <div id="wrap">
                <Title name="广告系列(Press F12, watch Console)" />
                <Header refreshTable={this.refresh}/>
                <div id="table">
                    <Table
                        rowSelection={{ }}
                        columns={columns}
                        dataSource={this.state.tData}
                        pagination={{size: 'large'}}
                        size="middle"
                        loading={this.state.loading}
                        //onRowClick={this.rowClick}
                    />


                </div>
            </div>
        )
    }

}