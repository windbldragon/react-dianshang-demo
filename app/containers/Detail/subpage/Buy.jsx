import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import BuyAndStore from '../../../components/BuyAndStore'
import {hashHistory} from 'react-router'
import * as storeActionsFromFile from '../../../actions/store'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class Buy extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            isStore: false,
        }
    }

    render() {
        return (
            <div>
                <BuyAndStore isStore={this.state.isStore}
                             buyHandle={this.buyHandle.bind(this)}
                             storeHandle={this.storeHandle.bind(this)}/>
            </div>
        )
    }

    componentDidMount() {
        this.checkStoreState();
    }

    checkStoreState() {
        const id = this.props.id
        const store = this.props.store;
        store.some((item) => {
            if (item.id === id) {
                this.setState({
                    isStore: true
                })
                return true;
            }
        })
    }

    //检查登录状态
    loginCheck() {
        const id = this.props.id;
        const username = this.props.username;
        if (!username.phone || !username.password) {
            //跳转到登录页面，要传入当前router，以便登陆完后可以自己跳转回去
            hashHistory.push('/login' + '/detail/' + id);
            return false;
        } else {
            return true;
        }
    }

    //购买事件
    buyHandle() {
        //验证登录，未登录则return
        const loginFlag = this.loginCheck();
        if (!loginFlag) {
            return
        }
        //此过程未购买逻辑，省略
        hashHistory.push('/User')
    }

    //收藏事件
    storeHandle() {
        //验证登录，未登录则return
        const loginFlag = this.loginCheck();
        if (!loginFlag) {
            return
        }

        const id = this.props.id;
        const username = this.props.username;
        const storeActions = this.props.storeActions;
        //未收藏
        if (!this.state.isStore) {
            //则添加到收藏中
            storeActions.add({id: id})
        } else {
            //则从收藏中删除
            storeActions.rm({id: id})
        }
        //修改状态
        this.setState({
            isStore: !this.state.isStore,
        })

    }
}

function mapStateToPorps(state) {
    return {
        username: state.username,
        store: state.store
    }
}
function mapDispatchToProps(dispatch) {
    return {
        storeActions: bindActionCreators(storeActionsFromFile, dispatch)
    }
}

export default connect(
    mapStateToPorps,
    mapDispatchToProps
)(Buy)