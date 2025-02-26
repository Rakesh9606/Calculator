import {useState} from 'react';
import '../cal.css'
const Calculator = () =>{

     const [value , setValue] = useState('');
     const update = (e) => setValue(value + e.target.innerHTML);
     const reset = () => setValue("");
     const evaluate = () => setValue(eval(value));
     const squareRoot = () => setValue(Math.sqrt(value));
     const xSquare = () => setValue(value*value);
     const xCube = () => setValue(value*value*value);
     const del = () => setValue(value.toString().slice(0,-1));

        return (

            <div className = "calculator">
                <input type="text" placeholder='0' value={value}/>

                <div>

                    <button id="AC" onClick={reset}>AC</button>
                    <button id="DEL" onClick={del}>DEL</button>
                    <button id="green" >±</button>
                    <button id="green">%</button>
                    <button id="green" onClick={update}>/</button>
                </div>

                <div>
                    <button onClick={squareRoot}>√</button>
                    <button onClick={update}>7</button>
                    <button onClick={update}>8</button>
                    <button onClick={update}>9</button>
                    <button id="green" onClick={update}>*</button>
                </div>

                <div>
                    <button onClick={xSquare}>x²</button>
                    <button onClick={update}>4</button>
                    <button onClick={update}>5</button>
                    <button onClick={update}>6</button>
                    <button id="green" onClick={update}>-</button>
                </div>

                <div>
                    <button onClick={xCube}>x3</button>
                    <button onClick={update}>1</button>
                    <button onClick={update}>2</button>
                    <button onClick={update}>3</button>
                    <button id="green" onClick={update}>+</button>
                </div>

                <div>
                    <button >1/x</button>
                    <button onClick={update}>00</button>
                    <button onClick={update}>0</button>
                    <button onClick={update}>.</button>
                    <button id="equal" onClick={evaluate}>=</button>
                </div>

            </div>

            )

    }
export default Calculator;