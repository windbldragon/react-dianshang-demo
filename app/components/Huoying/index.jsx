import React from 'react'
import './style.less'

class HuoyingInput extends React.Component {
    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <div>
                <div className="huoying-main">
                    <div>
                        <p>用户名：{this.props.phone}</p>
                        <p>密码：{this.props.password}</p>
                    </div>
                    <div className="huoying-lovepeople">
                        <div className="love-people">火影中你喜欢的人物</div>
                        <input type="text" placeholder="火影中你喜欢的人物" ref="huoyingPeople"/>
                    </div>
                    <div className="huoying-lovepeople">
                        <div className="love-people">火影中你最喜欢的忍术</div>
                        <input type="text" placeholder="火影中你最喜欢的忍术" ref="huoyingMethod"/>
                    </div>
                    <div className="huoying-button">
                        <button className="huoying-sure" onClick={this.makesure.bind(this)}>
                            确定
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    makesure(){
        let people=this.refs.huoyingPeople.value;
        let method=this.refs.huoyingMethod.value;
        this.props.makesure(people,method);
    }
}

export default HuoyingInput