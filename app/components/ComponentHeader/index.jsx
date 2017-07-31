import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import {hashHistory} from 'react-router'

class ComponentHeader extends React.Component {
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render(){
        return (
            <div className="componentHeader-main">
                <p onClick={this.backToHome.bind(this)}>返回</p>
                <p className="componentHeader-title">{this.props.headTitle}</p>
                <p></p>
            </div>
        )
    }

    backToHome(){
        if(this.props.route){
            hashHistory.push('/');
        }else {
            window.history.back();
        }
    }
}

export default ComponentHeader