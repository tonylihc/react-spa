import React from 'react'
import { Button, checkbox, Select, Radio, Switch, Form, Row, Col, Modal, Input, InputNumber, Cascader, Tooltip } from 'antd'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class AformInModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            visible: false,
        }
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

let Btnform = Form.create()(AformInModal);
export default Btnform;











































