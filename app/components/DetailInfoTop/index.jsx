import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from '../star'
import pic from '../../static/pic/2.jpg'
import './style.less'

class DetailInfoTop extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        const detailInfo = this.props.data;
        return (
            <div className="detailInfoTop-top">
                <div className="detailInfoTop-main">;
                    <img className="detailInfoTop-img" src={pic} alt="图片"/>
                    <div className="detailInfoTop-info">
                        <p style={{color:'grey'}}>{detailInfo.title}</p>
                        <Star starNO={detailInfo.star}/>
                        <p style={{color:'grey'}}>￥{detailInfo.price}</p>
                        <p style={{color:'grey'}}>{detailInfo.subTitle}</p>
                    </div>
                </div>
                <div style={{color:'grey',paddingTop:'5px',paddingBottom:'5px'}} dangerouslySetInnerHTML={{__html:detailInfo.desc}}></div>
            </div>

        )
    }
}

export default DetailInfoTop