import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class BuyAndStore extends React.Component {
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        const storeStyle=this.props.isStore?'has-store':'no-store';
        return(
            <div className="buyAndStore">
                <button onClick={this.store.bind(this)} className={storeStyle}>
                    收藏
                </button>
                <button onClick={this.buy.bind(this)} className="buyAndStore-buy">
                    购买
                </button>
            </div>
        )
    }
    store(){
        this.props.storeHandle();
    }
    buy(){
        this.props.buyHandle();
    }
}

export default BuyAndStore