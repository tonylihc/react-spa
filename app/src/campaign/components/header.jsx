import React from 'react'
import {Button, Checkbox, DatePicker, Select, Radio, Form, Row, Col, Icon, message, notification, Modal, Input} from 'antd'
import moment from 'moment'

import 'whatwg-fetch'

import BtnForm from './popup.jsx'

const FormItem = Form.Item;
const Option = Select.Option;


export default class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selValue: '',
        }
    }

    render() {
        let isDisabled = this.state.selValue === '' ? true : false;
        return (
            <div id="header">
                <Form inline>
                    <Row type="flex" justify="start" gutter={16} align="middle">
                        <Col span="5">

                        </Col>
                        <Col span="5">

                        </Col>
                        <Col span="4">

                        </Col>
                        <Col span="2">

                        </Col>
                        <Col span="3">
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





























