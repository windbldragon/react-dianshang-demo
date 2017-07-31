import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getInfoData} from '../../../fetch/detail/detai'
import DetailInfoTop from '../../../components/DetailInfoTop'

class DetailInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state= {
            data: {}
        }

    }

    render() {
        return (
            <div>
                <DetailInfoTop data={this.state.data}/>
            </div>
        )
    }

    componentDidMount() {
        const id = this.props.id;
        const result = getInfoData(id);
        this.resultHandle(result)
    }

    resultHandle(result) {
        result.then((res) => {
            return res.json();
        })
            .then((json) => {
                this.setState({
                    data:json
                })
            })
            .catch((error) => {
                alert(error);
            })
    }
}


export default DetailInfo