import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router'

// 引入单个页面 ( 包括嵌套的子页面 )
import Init from './main.jsx'
import Login from './login/login.jsx'

const isLogin = (nextState, replace) => {
    let ss = window.sessionStorage;
    let un = username;
    let pw = ss.password;
    // 如果没有登录， 则将路由切换到login
    if (!(un === 'reactIsGood' && pw === 'reactIsGood')) {
        // Redirect to Home page if not an Admin
        replace({ pathname: '/login' });
    }
}


// 配置路由, 并将路由注入到id为init的DOM元素中
render(
    <Router history={browserHistory}>
        <Route path="/login" component={Login} />
        <Route path="/" component={Init} onEnter={isLogin}></Route> {/* 这里用了登录钩子 */}
    </Router>
    , document.getElementById('init')
)