import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchNav from '../../components/SearchNav'
import SearchList from './subpage/searchList'

class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <div>
                <SearchNav paramsKeyword={this.props.params.keyword}/>
                <SearchList category={this.props.params.type} keyword={this.props.params.keyword}/>
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props.params)
    }
}


export default Search