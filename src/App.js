import './App.css';
import {useState} from "react";

function App() {
    const [number, setNumber] = useState("0");

    const numClickHandler = (e) => {
        e.preventDefault();

        if (number === "0") {
            setNumber(e.currentTarget.innerText);
        } else {
            setNumber(number + e.currentTarget.innerText);
        }
    }

    return (
        <>
        <div className="flex-container-column card">
            <div className="display">
                <h1 id="displayNumber">{number}</h1>
            </div>
            <div className="flex-container-row">
                <div className="button" onClick={e => numClickHandler(e)}>7</div>
                <div className="button" onClick={e => numClickHandler(e)}>8</div>
                <div className="button" onClick={e => numClickHandler(e)}>9</div>
                <div className="button negative">+/-</div>
            </div>
            <div className="flex-container-row">
                <div className="button" onClick={e => numClickHandler(e)}>4</div>
                <div className="button" onClick={e => numClickHandler(e)}>5</div>
                <div className="button" onClick={e => numClickHandler(e)}>6</div>
                <div className="button operator" >-</div>
            </div>
            <div className="flex-container-row">
                <div className="button" onClick={e => numClickHandler(e)}>1</div>
                <div className="button" onClick={e => numClickHandler(e)}>2</div>
                <div className="button" onClick={e => numClickHandler(e)}>3</div>
                <div className="button operator">+</div>
            </div>
            <div className="flex-container-row">
                <div className="button clear">CE</div>
                <div className="button" onClick={e => numClickHandler(e)}>0</div>
                <div className="button equals double">=</div>
            </div>
        </div>
        </>
    );
}

export default App;
