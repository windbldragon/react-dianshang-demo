import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class Star extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        let starArr = [1, 2, 3, 4, 5];
        const starNO = this.props.starNO;
        return (
            <div className="star-main">
                {
                    starArr.map((item, index) => {
                        const starLight = item <= starNO ? 'starLight' : '';
                        return (
                            <div key={index} className={starLight}><i className={"icon-star"}></i></div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Star