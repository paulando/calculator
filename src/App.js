import React, { Component } from "react";
import Calculator from "./Calculator";
import safeEval from "safe-eval";
import explosion_gif from "./explosion.gif";

class App extends Component {

    componentWillMount() {

        this.setState({
            show_result: false,
            result: 0,
            combination: []
        });

    }

    handleClear() {

        this.setState({
            show_result: false,
            result: 0,
            combination: []
        });

    }

    handleNumber(e) {

        let number = parseFloat(e.target.innerHTML, 10);

        if (this.state.show_result === true) {

            this.setState({
                show_result: false,
                result: number
            });

            return false;
        }

        if (this.state.result.toString().length === 1 && this.state.result === 0) {

            this.setState({ result: number });

        }

        else {

            this.setState({ result: parseFloat(this.state.result.toString() + number.toString()) });

        }

    }

    handlePoint() {

        let no_point = this.state.result.toString().indexOf(".");

        if (no_point < 0) {

            let add_point = this.state.result.toString() + ".";

            this.setState({ result: add_point });

        }

    }

    handleDelete() {

        if (this.state.result.toString().length === 1 || isNaN(this.state.result)) {

            this.setState({ result: 0 });

        }

        else {

            let new_result = this.state.result.toString().slice(0, -1);

            this.setState({ result: parseFloat(new_result) });

        }

    }

    handleCombine(e) {

        let btn = e.target.innerHTML;

        if (btn === "*" || btn === "/" || btn === "+" || btn === "-") { // security check hahaha

            let new_combination = this.state.combination;

            if (this.state.show_result === true) {

                new_combination.push(btn);

                this.setState({
                    show_result: false,
                    result: 0,
                    combination: new_combination
                });

                return false;

            }

            new_combination.push(this.state.result, btn);

            this.setState({
                result: 0,
                combination: new_combination
            });

        }

    }

    handleEqual() {

        if (this.state.show_result === true) { return false; }

        let new_combination = this.state.combination;
        new_combination.push(this.state.result);

        let result = new_combination;

        let calculated = safeEval(result.join(""));

        this.destroy(calculated);

        this.setState({
            show_result: true,
            result: calculated,
            combination: result
        });

    }

    destroy(infinity) { // should not do like this...

        if (infinity === Infinity) {

            let body = document.getElementById("root");
            body.innerHTML = "";

            let img = document.createElement('img');
            img.src = explosion_gif;
            img.style.margin = "50px auto 0";
            img.style.display = "block";

            body.appendChild(img);

            return false;

        }

    }

    render() {

        return <Calculator
            result={this.state.result}
            combination={this.state.combination.join("").toString()}
            onClear={this.handleClear.bind(this)}
            onNumber={this.handleNumber.bind(this)}
            onPoint={this.handlePoint.bind(this)}
            onDelete={this.handleDelete.bind(this)}
            onCombine={this.handleCombine.bind(this)}
            onEqual={this.handleEqual.bind(this)}
        />;

    }

}

export default App;
