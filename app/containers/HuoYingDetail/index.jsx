import React from 'react'
import ComponentHeader from '../../components/ComponentHeader/index'
import './style.less'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
import {bindActionCreators} from 'redux'
import * as huoyingActions from '../../actions/huoyingDetail'
import HuoyingInput from '../../components/Huoying'

class HuoYing extends React.Component {
    constructor(props,context){
        super(props,context);

    }
    componentDidMount(){
        // if(!this.props.userName.phone){
        //     alert('请输入用户名密码');
        //     hashHistory.push('login')
        // }
    }
    render() {
        return (
            <div>
                <ComponentHeader headTitle="火影"/>
                <HuoyingInput
                    phone={this.props.userName.phone}
                    password={this.props.userName.password}
                    makesure={this.makesure.bind(this)}/>
            </div>
        )
    }

    makesure(people,method) {
        const huoyingAction=this.props.huoyingAction;
        const huoyingDetail=this.props.huoyingDetail;
        if(!huoyingDetail.people||!huoyingDetail.method){
            huoyingAction.add({
                people:people,
                method:method,
            })
        }else {
            huoyingAction.update({
                people:people,
                method:method,
            })
        }

    }
}

function mapStateToProps(state) {
    return {
        userName:state.username,
        huoyingDetail:state.huoyingDetail
    }
}
function mapDispatchToProps(dispatch) {
    return {
        huoyingAction: bindActionCreators(huoyingActions,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HuoYing)