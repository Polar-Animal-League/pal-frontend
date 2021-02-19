import { useState } from "react"
import ReactDOM from "react-dom"
import Countdown from 'react-countdown';

export const TimerComponent = function() : JSX.Element {
    const [inputNum, setinputNum] = useState("");

    function handleSubmit(e: React.FormEvent):void {
        e.preventDefault();
        const num = parseInt(inputNum) * 1000;

        const element = <Countdown date={Date.now() + num} />;
        ReactDOM.render(element, document.getElementById('timer'));
    }

    return (
        <div>
            <h2>Timer</h2>
            <span id="timer"></span>
            <form onSubmit={handleSubmit}>
            <p>(insert time in seconds)</p> 
                <input onChange = {(e: React.ChangeEvent<HTMLInputElement>) : void => {
                    setinputNum(e.target.value);
                }} type='number' name='inputNum'/>
                <input type="submit" value="Start"/>
            </form>
        </div>
    )
}