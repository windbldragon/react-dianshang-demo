import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from '../../components/star'
import './style.less'

class CommentList extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        const data=this.props.data;
        return(
            <div className="commentList-main">
                <p>{data.username}</p>
                <Star starNO={data.star}/>
                <p>{data.comment}</p>
            </div>
        )
    }
}

export default CommentList