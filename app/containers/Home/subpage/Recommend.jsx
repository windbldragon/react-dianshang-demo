import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getListData} from '../../../fetch/home/home'
import RecommendList from '../../../components/recommend'
import LoadMore from '../../../components/LoadMore'
import pic1 from '../../../static/pic/1.jpg'
import pic2 from '../../../static/pic/2.jpg'
import pic3 from '../../../static/pic/3.jpg'
import pic4 from '../../../static/pic/4.jpg'
import pic5 from '../../../static/pic/5.jpg'


class Recommend extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            listInfo: [],//存储列表信息
            hasMore: false, //记录当前状态下，还有没有更多的数据可供加载
            isLoadingMore: false, //记录当前状态下，是加载中还是点击可加载更多
            page: 1,//下一页的页码
        }
    }

    render() {
        return (
            <div>
                <div>推荐</div>
                {/*<div>{this.state.hasMore.toString()}</div>*/}
                {/*<div>{this.state.listInfo.length}</div>*/}
                {
                    this.state.listInfo.map((item, index) => {
                        return (
                            <RecommendList key={index} data={item}/>
                        )
                    })
                }
                {
                    this.state.hasMore ?
                        <LoadMore isLoadingMore={this.state.isLoadingMore}
                                  loadMoreFn={this.loadMore.bind(this)}></LoadMore>
                        : ""
                }
            </div>
        )
    }

    componentDidMount() {
        const city = '北京';
        const picArr = [{pic1}, {pic2}, {pic3}, {pic4}, {pic5},]
        const resule = getListData(city, 0);
        resule.then((res) => {
            return res.json()
        }).then((json) => {
            json.data.map((item, index) => {
                // console.log(picArr[index])
                item.pic = picArr[index]['pic' + (index+1)]
            })
            this.setState({
                listInfo: json.data,
                hasMore: json.hasMore
            })
            // console.log(this.state.listInfo);
        }).catch((error) => {
            alert(error)
        })
    }

    loadMore() {
        const city = '北京';
        const page = this.state.page;
        this.setState({
            isLoadingMore: true,
        })
        const resule = getListData(city, page);
        resule.then((res) => {
            return res.json()
        }).then((json) => {

            this.setState({
                listInfo: this.state.listInfo.concat(json.data),
                hasMore: json.hasMore,
                isLoadingMore: false,
                page: page + 1
            })
        }).catch((error) => {
            alert(error)
        })
    }
}

export default Recommend