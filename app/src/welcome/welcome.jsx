import React from 'react'

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      col: '#666'
    }
  }

  // 随机生成 16 进制 颜色值, 并改变状态
  getRandomColor = () => {
      this.setState({
          col: '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6)
      });
  }

  componentDidMount(){
      this.interval = setInterval(this.getRandomColor, 500);
  }

  componentWillUnmount(){
      clearInterval(this.interval);
  }

  render(){
      let colorStyle = {
          color: this.state.col,
          textAlign: 'center',
          fontSize: 70,
          width: 200,
          margin: '16% auto',
          transition: 'color 1s'
      }

      return (
          <h1 className="animated rotateIn" id="welcome" style={colorStyle}>你&nbsp;好</h1>
      )
  }







}
