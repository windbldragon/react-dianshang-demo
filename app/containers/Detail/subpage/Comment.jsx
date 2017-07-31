import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getCommentData} from '../../../fetch/detail/detai'
import CommentList from '../../../components/Comment'
import LoadMore from '../../../components/LoadMore'
import './style.less'

class Comment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state= {
            data: [],
            hasMore: false,
            isLoadingMore:false,
            page:0,
        }

    }

    render() {
        return (
            <div className="comment-main">
                <div className="comment-top">用户点评</div>
                {
                    this.state.data.map((item,index)=>{
                        return (
                            <CommentList key={index} hasMore={this.state.hasMore} data={item}/>
                        )
                    })
                }
                {
                    this.state.hasMore? <LoadMore loadMoreFn={this.loadMoreInfo.bind(this)} isLoadingMore={this.state.isLoadingMore}/>
                        :''
                }
            </div>
        )
    }

    componentDidMount() {
        let page = 0;
        const id = this.props.id;
        const result = getCommentData(page, id);
        this.resultHandle(result)
    }

    resultHandle(result) {
        result.then((res) => {
            return res.json()
        })
            .then((json) => {
                this.setState({
                    data:this.state.data.concat(json.data),
                    hasMore:json.hasMore,
                    isLoadingMore:false,
                    page:this.state.page+1
                })
            })
            .catch((error) => {
                alert(error)
            })
    }
    loadMoreInfo (){
        this.setState({
            isLoadingMore:true,
        })
        let page=this.state.page;
        const id = this.props.id;
        const result = getCommentData(page, id);
        this.resultHandle(result);
    }
}

export default Comment