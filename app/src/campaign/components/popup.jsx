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

    showModal = (e) => {
        this.setState({visible: true});
    }

    render() {
        const formItemLayout = {
            labelCol = { span: 6 },
            wrappperCol = { span: 8 }
        }

        const areaData = [{
            value: audi,
            label: '奥迪',
            children: [{
                value: 'a6',
                label: 'AudiA6'
            },{
                value: 'a8',
                label: 'AudiA8'
            }]
        }]

        const { getFieldDecorator } = this.props.form

        return (
            <div>
                <Button type="primary" size="large" onClick={this.showModal}>新建广告系列</Button>
                <Modal title="新建广告系列"
                       visible={this.state.visible}
                       onOk={this.handleSubmit}
                       onCancel={this.handleCancel}
                >
                    <Form horizontal>
                        <FormItem {...formItemLayout} label="推广计划名称">
                            {getFieldDecorator('planName', {
                                rules: [{ required: true, message: 'Please input your planName!' }],
                            })(
                                <Input type="text" />
                            )}
                        </FormItem>
                        <FormItem　{...formItemLayout} label="推广商品分类">
                            {getFieldDecorator('goodsType',{
                                rules: [{ required: true, message: 'Please input your goodsType!' }],
                            })(
                                <RadioGroup　defaultValue="car" size="large">
                                    <Radio value="car" key="a">汽车类</Radio>
                                    <Radio value="ornament" key="b">饰品类</Radio>
                                </RadioGroup>
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout}　label="推广品牌车型">
                            {getFieldDecorator('goodsType',{
                                rules: [{ required: true, message: 'Please input your carType!' }],
                            })(
                                <Cascader options={areaData}/>
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="设定投放限额：">
                            {getFieldDecorator('limit', {
                                rules: [{ required: true, message: 'Please input your number!' }],
                            })(
                                <InputNumber min={50} max={4000000} />元/天
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('line',{
                                rules: [{ required: true, message: 'Please input your line!' }],
                            })(
                                <Switch checkedChildren="开" uncheckedChildren="关" />
                            )}
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }
}

let Btnform = Form.create()(AformInModal);
export default Btnform;











































