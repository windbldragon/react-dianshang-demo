import  React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ComponentHeader from '../../components/ComponentHeader'
import {connect} from 'react-redux'
import * as userinfoActionsFromOtherFile from '../../actions/userinfo'
import {bindActionCreators} from 'redux'
import LocalStore from '../../util/localStore'
import {CITYNAME} from '../../config/LocalStoreKey'
import {hashHistory} from 'react-router'

import './style.less'

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const cityArr = [
            '北京', '上海', '广州',
            '西安', '咸阳', '佳木斯',
            '大连', '沈阳', '哈尔滨',
            '大理', '杭州', '深圳',
        ];
        return (
            <div>
                <ComponentHeader headTitle="选择城市"/>
                <div className="city-title">{this.props.userinfo.cityName}</div>
                <div className="city-main">
                    {
                        cityArr.map((item, index) => {
                            return (
                                <div className="city-city" key={index} onClick={this.getValue.bind(this,item)}>{item}</div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    componentDidMount() {

    }
    //点击城市取值并存储到redux和localstoreage中
    getValue(city){
        if(city){
            LocalStore.setItem(CITYNAME,city);
            hashHistory.push('/');
        }
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispathToProps(dispatch) {
    return {
        // userInfoActions: bindActionCreators(userinfoActionsFromOtherFile,dispatch)
    }
}


export default connect(
    mapStateToProps,
    mapDispathToProps
)(City)
