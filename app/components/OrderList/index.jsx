import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as commentActionsFromOtherFile from '../../actions/comment'


import pic from '../../static/pic/2.jpg'
import './style.less'

class OrderList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            comment: "",
            hasComment: false,
            commentInfo: "",
            commentState: 0, //0-未评价 1-已评价
        }
    }

    render() {
        const orderListData = this.props.data;
        return (
            <div className="orderList-main">
                <div className="orderList">
                    <img src={pic} alt="图片"/>
                    <div className="orderlist-middle">
                        <p>{orderListData.title}</p>
                        <p>价格：￥{orderListData.price}</p>
                        <p>数量：{orderListData.count}</p>
                        {
                            this.state.commentInfo ?
                                <p>评价：{this.state.commentInfo}</p>
                                : ""
                        }
                    </div>
                    <div className="orderLisi-right">
                        {
                            this.state.commentState === 1
                                ? <button onClick={this.commentHandle.bind(this)}>
                                    已评价</button>
                                : <button onClick={this.commentHandle.bind(this)}>
                                评价</button>
                        }
                    </div>
                </div>
                {
                    this.state.hasComment ? <div className="comment-main">
                        <div className="comment-write">
                            <textarea rows="5" ref="commentValue"></textarea>
                        </div>
                        <div className="comment-button">
                            <button className="comment-submit" onClick={this.submitComment.bind(this)}>提交</button>
                            <button className="comment-cancel" onClick={this.cancelComment.bind(this)}>取消</button>
                        </div>
                    </div>
                        : ""
                }
            </div>
        )
    }

    componentDidMount() {
        //循环redux里数据，把评价展示出来
        this.showComment();
    }

    showComment() {
        const userComment = this.props.userComment;
        if (userComment.length > 0) {
            for (let i = 0; i < userComment.length; i++) {
                if (userComment[i].title === this.props.data.title) {
                    this.setState({
                        commentInfo: userComment[i].comment,
                        commentState:1,
                    })
                }
            }
        }
    }

    commentHandle() {
        this.setState({
            hasComment: true,
        })
    }

    submitComment() {
        const commentValue = this.refs.commentValue;
        const commentActions = this.props.commentActions;
        if(this.state.commentState===0){
            commentActions.add({
                comment: commentValue.value,
                title: this.props.data.title,
                commentState: 1,
            })
        }else if(this.state.commentState===1){
            commentActions.update({
                comment: commentValue.value,
                title: this.props.data.title,
                commentState: 1,
            })
        }
        this.showComment();
        this.setState({
            hasComment: false
        })
    }

    cancelComment() {
        const commentValue = this.refs.commentValue;
        commentValue.value = '';
        this.setState({
            hasComment: false
        })
    }

}
function mapStateToProps(state) {
    return {
        userComment: state.comment
    }
}


function mapDispatchTopros(dispatch) {
    return {
        commentActions: bindActionCreators(commentActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchTopros
)(OrderList)