import './App.css';
import {useState} from "react";

function App() {
    const [number, setNumber] = useState("0");
    const [expression, setExpression] = useState("");

    const numClickHandler = e => {
        e.preventDefault();
        let numVal, expVal;

        if (number === "0") {
            numVal = e.currentTarget.innerText;
            setExpression(expression + numVal);
        } else {
            numVal = number + e.currentTarget.innerText;
            setExpression(expression + e.currentTarget.innerText);
        }
        setNumber(numVal);
    };

    const opClickHandler = e => {
        if (!(expression === "" || expression.includes("+", expression.length - 1) || expression.includes("-", expression.length - 1))) {
            setExpression(expression + e.currentTarget.innerText);
            setNumber("0");
        }
    };

    const eqClickHandler = () => {
        if ((expression.includes("+") || expression.includes("-")) && !(expression === "" || expression.includes("+", expression.length - 1) || expression.includes("-", expression.length - 1))) {
            let result = eval(expression);
            const strResult = result.toString();
            setNumber(strResult);
            setExpression("");
            console.log(expression + " = " + strResult);
        }
    };

    const ceClickHandler = () => {
        setNumber("0");
        setExpression("");
    };

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
                <div className="button negative">&#128578;</div>
            </div>
            <div className="flex-container-row">
                <div className="button" onClick={e => numClickHandler(e)}>4</div>
                <div className="button" onClick={e => numClickHandler(e)}>5</div>
                <div className="button" onClick={e => numClickHandler(e)}>6</div>
                <div className="button operator" onClick={e => opClickHandler(e)}>-</div>
            </div>
            <div className="flex-container-row">
                <div className="button" onClick={e => numClickHandler(e)}>1</div>
                <div className="button" onClick={e => numClickHandler(e)}>2</div>
                <div className="button" onClick={e => numClickHandler(e)}>3</div>
                <div className="button operator" onClick={e => opClickHandler(e)}>+</div>
            </div>
            <div className="flex-container-row">
                <div className="button clear" onClick={ceClickHandler}>CE</div>
                <div className="button" onClick={e => numClickHandler(e)}>0</div>
                <div className="button equals double" onClick={eqClickHandler}>=</div>
            </div>
            </div>
        </>
    );
}

export default App;
