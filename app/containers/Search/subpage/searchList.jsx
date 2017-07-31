import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getSearchData} from '../../../fetch/search/search'
import {connect} from 'react-redux'
import RecommendList from '../../../components/recommend'
import LoadMore from '../../../components/LoadMore'

class SearchList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            listInfo: [],
            hasMore: false,
            isLoadingMore: false,
        }
    }

    render() {
        const listInfo = this.state.listInfo;
        return (
            <div>
                {
                    listInfo.length ?
                        <div>
                            {
                                listInfo.map((item, index) => {
                                    return (
                                        <RecommendList key={index} data={item}></RecommendList>
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
                        : <div>暂无数据</div>
                }
            </div>
        )
    }

    componentDidMount() {
        let page = 0;
        const cityName = this.props.cityInfo.cityName;
        const category = this.props.category;
        const keyword = this.props.keyword;
        const listData = getSearchData(page, cityName, category, keyword);
        this.resultHandle(listData);
    }

    //处理数据
    resultHandle(result) {
        result.then((res) => {
            return res.json();
        })
            .then((json) => {
                this.setState({
                    listInfo: json.data,
                    hasMore: json.hasMore
                })
            })
            .catch((error) => {
                alert(error);
            })
    }

    //加载更多
    loadMore() {
        let page = 1;
        const cityName = this.props.cityInfo.cityName;
        const category = this.props.category;
        const keyword = this.props.keyword;
        this.setState({
            isLoadingMore: true,
        });
        getSearchData(page, cityName, category, keyword).then((res) => {
            return res.json();
        })
            .then((json) => {
                this.setState({
                    listInfo: this.state.listInfo.concat(json.data),
                    hasMore: json.hasMore,
                    isLoadingMore: false,
                })
            })
            .catch((error) => {
                alert(error)
            })
    }

    componentDidUpdate(prevProps, prevState) {
        const category = this.props.category;
        const keyword = this.props.keyword;
        //搜索条件完全相等
        if (category === prevProps.category && keyword === prevProps.keyword) {
            return
        }
        let page = 0;
        const cityName = this.props.cityInfo.cityName;
        const listData = getSearchData(page, cityName, category, keyword);
        this.resultHandle(listData);
    }
}

function mapStateToProps(state) {
    return {
        cityInfo: state.userinfo
    }
}

function mapDispatchToProps() {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchList)