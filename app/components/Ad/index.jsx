import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import pic1 from '../../static/pic/1.jpg'
import './style.less'

class AdInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <div>超值特惠</div>
                {this.props.adArr.map((item, index) => {
                    return (

                            <div key={index} className="Ad-main-container">
                                <img src={pic1} alt="图片" className="Ad-main-img"/>
                                <p className="Ad-main-title">{item.title}</p>
                            </div>

                    )
                })}
            </div>
        )
    }
}

export default AdInfo