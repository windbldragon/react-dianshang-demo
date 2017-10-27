import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import {hashHistory} from 'react-router'

import './style.less'


class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            count: 0
        }
    }

    render() {
        const opt = {
            speed: 400,
            auto: 1000,
            disableScroll: false,
            stopPropagation: false,
            continuous: true,
            callback: function (index) {
                this.setState({
                    count: index
                })
            }.bind(this)
        };
        return (
            <div>
                <ReactSwipe className="carousel" swipeOptions={opt}>
                    <div>
                        <ul className="main">
                            <li className="img" onClick={this.goHuoYing.bind(this)}>火影</li>
                            <li className="img">火影</li>
                            <li className="img">火影</li>
                            <li className="img">火影</li>
                            <li className="img">火影</li>
                            <li className="img">火影</li>
                            <li className="img">火影</li>
                            <li className="img">火影</li>
                            <li className="img">火影</li>
                            <li className="img">火影</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="main">
                            <li className="img">海贼王</li>
                            <li className="img">海贼王</li>
                            <li className="img">海贼王</li>
                            <li className="img">海贼王</li>
                            <li className="img">海贼王</li>
                            <li className="img">海贼王</li>
                            <li className="img">海贼王</li>
                            <li className="img">海贼王</li>
                            <li className="img">海贼王</li>
                            <li className="img">海贼王</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="main">
                            <li className="img">那谁</li>
                            <li className="img">那谁</li>
                            <li className="img">那谁</li>
                            <li className="img">那谁</li>
                            <li className="img">那谁</li>
                            <li className="img">那谁</li>
                            <li className="img">那谁</li>
                            <li className="img">那谁</li>
                            <li className="img">那谁</li>
                            <li className="img">那谁</li>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="circle-main">
                    <div className={this.state.count === 0 ? 'special-circle' : 'circle'}></div>
                    <div className={this.state.count === 1 ? 'special-circle' : 'circle'}></div>
                    <div className={this.state.count === 2 ? 'special-circle' : 'circle'}></div>
                </div>
            </div>
        )
    }
    goHuoYing(){
        hashHistory.push('huoying')
    }

}

export default Category