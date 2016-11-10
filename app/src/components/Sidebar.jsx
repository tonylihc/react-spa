import React from 'react'
import ReactDOM from 'react-dom'
import {Link, IndexLink} from 'react-router';


import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu;


export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '1',
            openKeys: []
        }
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({ current: e.key });
    }
    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => !(this.state.openKeys.indexOf(key) > -1));
        this.setState({ openKeys: this.getKeyPath(latestOpenKey) });
    }
    getKeyPath = (key) => {
        const map = {
            sub1: ['sub1'],
            sub2: ['sub2'],
            sub3: ['sub3'],
        };
        return map[key] || [];
    }
    render() {
        return (
            <div id="leftMenu">
                <img src={require('../images/logo.png')} width="50" id="logo"/>  {/*logo图标*/}
                <Menu
                    mode="inline"
                    theme="light"
                    openKeys={this.state.openKeys}
                    selectedKeys={[this.state.current]}
                    style={{ width: 240 }}
                    onOpenChange={this.onOpenChange}
                    onClick={this.handleClick}
                >
                    <Menu.Item key="1">
                        <IndexLink to="/"><span><Icon type="home" /><span>欢迎页</span></span></IndexLink>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="appstore-o" /><span>导航一</span></span>}>
                        <Menu.Item key="2"><Link to="/profile">小应用</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="bars" /><span>导航二</span></span>}>
                        <Menu.Item key="3"><Link to="/campaign">广告系列</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="bar-chart" /><span>导航三</span></span>}>
                        <Menu.Item key="4"><Link to="/counter">Reflux起步</Link></Menu.Item>
                        <Menu.Item key="5"><Link to="/charts">施工中</Link></Menu.Item>
                    </SubMenu>
                    <Menu.Item key="6">
                        <Link to="/last"><span><Icon type="mail" /><span>结尾页</span></span></Link>
                    </Menu.Item>
                </Menu>
                <div id="copyright">Copyright © happycoding</div>
            </div>

        );
    }
}


