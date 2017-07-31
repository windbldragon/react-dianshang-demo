import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import '../../static/css/font.css'
import {Link} from 'react-router'
import SearchHeader from '../../components/SearchHeader'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="header">
                <Link to="/city" className="header-link">
                    <div className="header-left">{this.props.cityName}
                        <i className="icon-angle-down"></i>
                    </div>
                </Link>
                <SearchHeader/>
                <Link to={"/login"} className="header-link">
                    <div className="header-right">
                        <i className="icon-user"></i>
                    </div>
                </Link>
            </div>
        )

    }
}

export default Header