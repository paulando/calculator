import React from "react";
import './css/template.css';

const Calculator = (props) => {
    return (
        <div id="calculator">
            <div className="wrap">
                <div className="top">
                    <div id="combination">{props.combination}</div>
                    <div id="result">{props.result}</div>
                </div>
                <div className="bottom">
                    <div className="row">
                        <div className="col-1"><button id="clear" className="btn-blue" onClick={props.onClear}>C</button></div>
                        <div className="col-1"><button id="divide" className="btn-blue" onClick={props.onCombine}>/</button></div>
                        <div className="col-1"><button id="multiply" className="btn-blue" onClick={props.onCombine}>*</button></div>
                        <div className="col-1"><button id="delete" className="btn-red" onClick={props.onDelete}>del</button></div>
                    </div>
                    <div className="row">
                        <div className="col-1"><button id="seven" className="btn-white" onClick={props.onNumber}>7</button></div>
                        <div className="col-1"><button id="eight" className="btn-white" onClick={props.onNumber}>8</button></div>
                        <div className="col-1"><button id="nine" className="btn-white" onClick={props.onNumber}>9</button></div>
                        <div className="col-1"><button id="minus" className="btn-blue" onClick={props.onCombine}>-</button></div>
                    </div>
                    <div className="row">
                        <div className="col-1"><button id="four" className="btn-white" onClick={props.onNumber}>4</button></div>
                        <div className="col-1"><button id="five" className="btn-white" onClick={props.onNumber}>5</button></div>
                        <div className="col-1"><button id="six" className="btn-white" onClick={props.onNumber}>6</button></div>
                        <div className="col-1"><button id="plus" className="btn-blue" onClick={props.onCombine}>+</button></div>
                    </div>
                    <div className="row">
                        <div className="col-1"><button id="one" className="btn-white" onClick={props.onNumber}>1</button></div>
                        <div className="col-1"><button id="two" className="btn-white" onClick={props.onNumber}>2</button></div>
                        <div className="col-1"><button id="three" className="btn-white" onClick={props.onNumber}>3</button></div>
                    </div>
                    <div className="row">
                        <div className="col-2"><button id="zero" className="btn-white" onClick={props.onNumber}>0</button></div>
                        <div className="col-1"><button id="point" className="btn-white" onClick={props.onPoint}>.</button></div>
                        <div className="col-1"><button id="equal" className="btn-green" onClick={props.onEqual}>=</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;