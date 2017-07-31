import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getAdData} from '../../../fetch/home/home'
import AdInfo from '../../../components/Ad'

class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <div>
                <AdInfo adArr={this.state.data}/>
            </div>
        )
    }

    componentDidMount() {
        const result = getAdData();
        result.then((res) => {
            return res.json()
        }).then(function (json) {
                this.setState({
                    data: json
                })
            }.bind(this)
        )
    }
}

export default Ad