import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ComponentHeader from '../../components/ComponentHeader'
import UserName from '../../components/UserName'
import {connect} from 'react-redux'
import OrderList from '../../components/OrderList'
import {getOrderListData} from '../../fetch/user/orderlist'
import {hashHistory} from 'react-router'
import '../../static/css/common.less'

class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
        }
    }

    render() {
        return (
            <div className="user-main">
                <ComponentHeader headTitle='用户中心' route="user"/>
                <UserName phone={this.props.username.phone} password={this.props.username.password}/>
                <div className="user-order">
                    <div className="user-order-main">您的订单</div>
                    {
                        this.state.data.map((item, index) => {
                            return (
                                <OrderList key={index} data={item}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    componentDidMount() {
        const username = this.props.username.phone;
        const password=this.props.username.password;8888
        if(!username||!password){
            hashHistory.push('/login');
            return;
        }
        const result = getOrderListData(username);
        this.resultHandle(result);
    }

    resultHandle(result) {
        result.then((res) => {
            return res.json();
        })
            .then((json) => {
                this.setState({
                    data: json
                })
            })
            .catch((error) => {
                alert(error);
            })
    }
}

function mapStateToProps(state) {
    return {
        username: state.username
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)
