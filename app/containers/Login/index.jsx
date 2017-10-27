import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LoginMain from '../../components/LoginMain'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userNameActionsFromOtherFile from '../../actions/username'
import {hashHistory} from 'react-router'

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            checking: true,
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.checking
                        ? <div>登录中</div>
                        : <LoginMain loginFN={this.loginFN.bind(this)}/>
                }
            </div>
        )
    }

    componentDidMount() {
        this.checkout();
    }

    checkout() {
        const username = this.props.username;
        if (username.phone&&username.password) {
            //已经登录，则跳转到用户主页
            hashHistory.push('/User');
        } else {
            //未登录，则进入登录主页
            this.setState({
                checking: false,
            })
        }
    }

    loginFN(phone,password) {
        const usernameActions = this.props.usernameActions
        usernameActions.updata({
            phone:phone,
            password:password,
        });
        alert('登陆成功');
        if(this.props.params.route){
            if(this.props.params.id){
                hashHistory.push('/'+this.props.params.route+'/'+this.props.params.id)
            }else {
                hashHistory.push('/'+this.props.params.route);
            }
        }else {
            hashHistory.push('/')
        }
    }
}

function mapStateToProps(state) {
    return {
        username: state.username
    }
}

function mapDispatchToProps(dispatch) {
    return {
        usernameActions: bindActionCreators(userNameActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)