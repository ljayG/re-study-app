import { Component } from "react";

class CounterClass extends Component {
    state = { count: 0};
    
    increase = () => this.setState({ count: this.state.count + 1});
    decrease = () => this.setState({ count: this.state.count - 1});

    render() {
        return (
            <div>
                <h2>클래스형 카운터: {this.state.count}</h2>
                <button onClick={this.increase}>+1 증가</button>
                <button onClick={this.decrease}>-1 감소</button>
            </div>
        )
    }
}

export default CounterClass;