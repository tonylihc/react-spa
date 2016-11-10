import React from 'react'

/* 标题 可换 */
export default class Hello extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <h1 id="hello" style={{textAlign: 'center'}} className="animated flipInX">Hi, I am a {this.props.text}</h1>
        )
    }
}