import React from 'react'

import '../styles/increment.css'

class IncrementComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            value: 0,
            message: ""
        }

        this.doDecrement = this.doDecrement.bind(this)
        this.doIncrement = this.doIncrement.bind(this)
    }

    doDecrement() {
        if (this.state.value) {
            this.setState({
                value: this.state.value - 1,
                message: null
            });
        }
    }

    doIncrement() {
        if (this.state.value < 10) {
            this.setState({
                value: this.state.value + 1,
                message: null
            });
        }
    }

    render() {
        return (
            <React.Fragment>

                <div id="increment-component" class={this.props.class}>
                    <div style={{margin: "-20px"}}>
                        <button onClick={this.doDecrement} className="fa fa-minus fa-inverse fa-2x"></button>
                        <input type="text" className="number" value={this.state.value}></input>
                        <button onClick={this.doIncrement} className="fa fa-plus fa-inverse fa-2x"></button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default IncrementComponent;