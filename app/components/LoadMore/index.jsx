import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class LoadMore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        return (
            <div>
                {
                    this.props.isLoadingMore ? <div className="load-more">加载中</div> :
                        <div className="load-more" onClick={this.loadMoreInfo.bind(this)} ref="wrapper">加载更多</div>
                }
            </div>
        )
    }

    componentDidMount() {
        let timeoutId;
        let wrapper=this.refs.wrapper;
        window.addEventListener('scroll', function () {
            if (!this.props.isLoadingMore) {
                // console.log(111);
                if (timeoutId) {
                    clearTimeout(timeoutId)
                }
                timeoutId = setTimeout(() => {
                    const top=wrapper.getBoundingClientRect().top;
                    const height=window.screen.height;
                    if(top&&(top)<height){
                        this.props.loadMoreFn();
                    }
                },100)
            }
        }.bind(this))
    }

    loadMoreInfo() {
        this.props.loadMoreFn();
    }

}

export default LoadMore