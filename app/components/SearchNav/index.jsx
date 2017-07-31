import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchHeader from '../../components/SearchHeader'

import './style.less'

class SearchNav extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <div className="SearchNav-main">
                <div className="SearchNav-back" onClick={this.backToHome.bind(this)}>返回</div>
                <SearchHeader paramsKeyword={this.props.paramsKeyword}/>
            </div>
        )
    }

    backToHome() {
        window.history.back();
    }
}

export default SearchNav