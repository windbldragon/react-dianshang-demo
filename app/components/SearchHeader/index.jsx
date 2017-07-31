import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {hashHistory} from 'react-router'

class SearchHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            value:""
        }
    }

    render() {
        return (
            <div className="search-header-main">
                <input type="text"
                       className="search-header-middle"
                       value={this.state.value}
                       onChange={this.handleChange.bind(this)}
                       onKeyUp={this.keyUpHandle.bind(this)}
                       placeholder="请输入地址"/>
            </div>
        )
    }
    componentDidMount(){
        this.setState({
            value:this.props.paramsKeyword
        })
    }

    handleChange(e){
        this.setState({
            value:e.target.value
        })
    }
    keyUpHandle(e){
        if(e.keyCode!=13){
            return
        }else {
            hashHistory.push('/search/all/'+this.state.value);
        }
    }
}

export default SearchHeader