//importerar component from react
import { Component } from 'react'

class StateCounterClass extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this)
    }

    //Skapar en increment funktion som loggar varje knapptryck
    increment() {
        console.log(this)

        this.setState({
            counter: this.state.counter + 1
        })
    }
    render() {
        return (
            <div>
                <h4>
                    I denna komponent använder vi setState i en klasskomponent
                    och värdet är: {this.state.counter}
                </h4>
                <button onClick={() => this.increment()}>Öka värdet</button>
            </div>
        )
    }
}

export default StateCounterClass
