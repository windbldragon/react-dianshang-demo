import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ComponentHeader from '../../components/ComponentHeader'
import './style.less'

class LoginMain extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: '',
            password: '',
        }
    }

    render() {
        return (
            <div>
                <ComponentHeader headTitle="登录"/>
                <div className="loginMain-main">
                    <div className="loginMain-phone">
                        <i className="icon-tablet"></i>
                        <input type="text"
                               placeholder="请输入手机号"
                               value={this.state.value}
                               onChange={this.changeValue.bind(this)}/>
                    </div>
                    <div className="loginMain-phone">
                        <i className="icon-key"></i>
                        <input type="text"
                               placeholder="请输入密码"
                               value={this.state.password}
                               onChange={this.changePassword.bind(this)}/>
                    </div>
                </div>
                <div className="loginMain-main-button">
                    <button className="loginMain-button" type="button" onClick={this.login.bind(this)}>
                        登录
                    </button>
                </div>
            </div>
        )
    }

    changeValue(e) {
        this.setState({
            value: e.target.value
        })
    }

    changePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    login() {
        let phone = this.state.value;
        let password = this.state.password;
        this.props.loginFN(phone, password);
    }
}

export default LoginMain