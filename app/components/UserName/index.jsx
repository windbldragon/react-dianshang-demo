import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class UserName extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render(){
        return(
            <div className="userName-main">
                <p>登录名：{this.props.phone}</p>
                <p>密码：{this.props.password}</p>
            </div>
        )
    }
}

export default UserName