import ReactDOM from "react-dom"
import { Stopwatch } from "ts-stopwatch";

export const StopwatchComponent = function() : JSX.Element {
    const stopwatch = new Stopwatch();
    let hour = 0;
    let min = 0;
    let sec = 0;
    let ms = 0;

    function ResetStopwatch():void
    {
        stopwatch.stop();
        stopwatch.reset();
        stopwatch.start();
    }

    function start():void
    {
        setInterval(timer, 1);
        stopwatch.start();
    }

    function timer():void {
        ms = stopwatch.getTime();
        if(ms >= 1000)
        {
            sec++;
            ResetStopwatch();
        }
        if(sec >= 60)
        {
            min++;
            sec = 0;
            ResetStopwatch();
        }
        if(min >= 60)
        {
            hour++;
            min = 0;
            ResetStopwatch();
        }
        const element = <span>{hour}:{min}:{sec}:{ms}</span>;
        ReactDOM.render(element, document.getElementById('stopwatch-time'));
    }

    function stop():void {
        stopwatch.stop();
    }

    function reset():void {
        hour = 0;
        min = 0;
        sec = 0;
        ms = 0;
        stopwatch.reset();
    }

    return (
        <div>
            <h2>Stopwatch</h2>
            <span id="stopwatch-time">0:0:0:0</span>
            <br></br>
            <button id="stopwatch-start" onClick={start}>Start</button>
            <button id="stopwatch-stop" onClick={stop}>Stop</button>
            <button id="stopwatch-reset" onClick={reset}>Reset</button>
        </div>
    )
}