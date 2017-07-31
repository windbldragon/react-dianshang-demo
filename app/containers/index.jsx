import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../components/Header'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userInfoActionsFromOtherFile from '../actions/userinfo'
import LocalStore from '../util/localStore'
import {CITYNAME} from '../config/LocalStoreKey'

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }

    render() {
        return (
            <div>
                {/*<Header cityName={this.props.userinfo.cityName}></Header>*/}
                {/*{   this.state.initDone ? this.props.children :*/}
                {/*<div>加载中...</div>*/}
                {/*}*/}
                {this.props.children}
            </div>
        )
    }

    // componentDidMount() {
    //     //从localstorerage里面获取城市
    //     let cityName = LocalStore.getItem(CITYNAME);
    //     if (cityName == null) {
    //         cityName = '西安'
    //     }
    //
    //     //将城市信息储存到redux中
    //     this.props.userInfoActions.update({
    //         cityName: cityName
    //     })
    //
    //     // var that=this;
    //     setTimeout(() => {
    //         this.setState({
    //             initDone: true
    //         })
    //     }, 1000)
    // }
}

// //这个函数把redux中的值赋给props
// function mapStateToProps(state) {
//     return {
//         userinfo: state.userinfo
//     }
// }
//
// //这个函数是把触发函数和redux绑定起来，也就是本代码第40行
// function mapDispatchToProps(dispatch) {
//     return {
//         userInfoActions: bindActionCreators(userInfoActionsFromOtherFile,dispatch)
//     }
// }
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(App)

export default App