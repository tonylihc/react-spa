import React from 'react'
import {Button, Checkbox, DatePicker, Select, Radio, Form, Row, Col, Icon, message, notification, Modal, Input} from 'antd'
import moment from 'moment'

import 'whatwg-fetch'

import BtnForm from './popup.jsx'

const FormItem = Form.Item;
const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;

let defaultStartDate = moment().subtract(30, 'days')
let defaultEndDate = moment()



export default class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selV: [''],
            selValue: '',
            sDate: defaultStartDate.format("YYYY-MM-DD"),
            eDate: defaultEndDate.format("YYYY-MM-DD"),
            isChecked: false
        }
    }

    // 选择广告系列
    selChange = (value) =>{
        this.setState({selValue: value});
    }
    dateChange = (value) => {
        this.setState({ sDate: value[0].toLocaleDateString() });
        this.setState({ eDate: value[1].toLocaleDateString() });
    }

    // 过滤无数据广告
    checkChange = (e) => {
        this.setState({ isChecked: e.target.checked });
        if(e.target.checked == true){
            message.config({ top: 5 });
            message.warning('过滤无数据广告已开启！');
        }
    }

    // 查询提示框
    confirmMsg = () => {
        if(this.state.selValue === "蝙蝠侠"){
            fetch('../data/filterData.json')
                .then((res) => { return res.json() })
                .then((data) => {
                    // 用请求到的数据刷新表格
                    this.props.refreshTable(data)
                })
                .catch((e) => { console.log(e.message); });
        }else {
            this.props.refreshTable({ rowData: [] });
        }
    }

    // 获取下拉框数据
    fetchSelData = () => {
        fetch('../data/selectData.json')
            .then((res) => {
                return res.json();
            })
            .then((data) => { this.setState({selV: data.obj}); })
            .catch((e) => { console.log(e.message); })
    }

    componentDidMount(){
        this.fetchSelData();

    }

    render() {
        let isDisabled = this.state.selValue === '' ? true : false;
        return (
            <div id="header">
                <Form inline>
                    <Row type="flex" justify="start" gutter={16} align="middle">
                        <Col span="5">
                            <Select showSearch
                                    onChange={this.selChange}
                                    placeholder="请选择广告系列"
                                    size="large"
                                    optionFilterProp="children"
                                    notFoundContent="未找到相关选项"
                            >
                                {
                                    this.state.selV.map((v, i) => {
                                        return <Option key={i} value={v}>{v}</Option>
                                    })
                                }
                            </Select>
                        </Col>
                        <Col span="5">
                            <FormItem>
                                <RangePicker onChange={this.dateChange} defaultValue={[defaultStartDate, defaultEndDate]} />
                            </FormItem>
                        </Col>
                        <Col span="4">
                            <FormItem>
                                <Checkbox defaultChecked={false} onChange={this.checkChange} >过滤无数据广告</Checkbox>
                            </FormItem>
                        </Col>
                        <Col span="2">
                            <FormItem>
                                <Button onClick={this.confirmMsg} disabled={isDisabled}>查询</Button>
                            </FormItem>
                        </Col>
                        <Col span="3" push="4">
                            <FormItem>
                                <BtnForm />
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}





























