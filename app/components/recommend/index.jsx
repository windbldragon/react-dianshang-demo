import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router'
import pic from '../../static/pic/4.jpg'
import './style.less'

class RecommendList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const listData = this.props.data;
        return (
            <Link to={'/detail/' + listData.mumber} className="recommend-link">
                <div className="recommend-main">
                    <img className="recommend-img" src={pic} alt="图片"/>
                    <div className="recommend-container">
                        <div className="recommend-one">
                            <p className="recommend-title">{listData.title}</p>
                            <p className="recommend-distance">{listData.distance}</p>
                        </div>
                        <p className="recommend-subTitle">{listData.subTitle}</p>
                        <p className="recommend-number">{listData.mumber}</p>
                        <p className="recommend-price">￥{listData.price}</p>
                    </div>
                </div>
            </Link>


        )
    }

}

export default RecommendList