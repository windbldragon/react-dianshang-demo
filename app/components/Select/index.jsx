import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Select from 'react-select'
import '../../static/css/react-select.css';

class SelectDemo extends React.Component {
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            options:[
                { value: 'one', label: 'One' },
                { value: 'two', label: 'Two' }
            ],
            value:''
        }
    }

    render(){
        return (
            <div>
                <Select
                    name="form-field-name"
                    value={this.state.value}
                    options={this.state.options}
                    onChange={this.logChange.bind(this)}
                />
            </div>
        )
    }
    logChange(val){
        console.log("Selected: " + JSON.stringify(val));
        this.setState({
            value: val.value,
        })
    }
}

export default SelectDemo