import React from 'react'
import {Input, Row, Col, DatePicker} from 'antd'

export default class Age extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            output: ''
        }
    }


    dateChange = (v) => {
        let now = (new Date()).toDateString();
        let msGap = (new Date(now)).getTime() - (new Date(v)).getTime(); //
        let trueAge = (msGap/1000/60/60/24/365.242199).toFixed(2);
        this.setState({output: trueAge});
    }

    render(){
        return (
            <div style={{marginTop: 80}}>
                <Row type="flex" justify="center">
                    <Col span={7}>
                        <label style={{fintSize: 14}}>您的出生日期：&nbsp;&nbsp;</label>
                        <DatePicker onChange={this.dateChange} />
                    </Col>
                    <Col span={8}>
                        <Input addonBefore="您已在地球上存活了：" addonAfter="年" value={this.state.output} id="blue"/>
                    </Col>
                </Row>
            </div>
        )
    }
}
























