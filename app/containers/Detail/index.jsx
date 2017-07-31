import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ComponentHeader from '../../components/ComponentHeader'
import DetailInfo from './subpage/Info'
import Comment from './subpage/Comment'
import Buy from './subpage/Buy'

class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const params=this.props.params;
        return (
            <div>
                <ComponentHeader headTitle="商户详情"/>
                <DetailInfo id={params.id}/>
                <Buy id={params.id}/>
                <Comment id={params.id}/>
            </div>
        )
    }
}

export default Detail