import React, { useState, useRef, useEffect } from 'react'
import { pi, sqrt, pow, cbrt, abs, log, exp, evaluate, cos, sin, tan } from 'mathjs';
import './styles.css'

const Calculadora = () => {
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    useEffect(() => inputRef.current.focus());

    //Defino las funciones
    function handleClick(e){
        setResult(result.concat(e.target.name));
    }
  
    function raizCuadrada(){
        setResult(sqrt(result).toString());
    }
    
    function raizCubica(){
        setResult(cbrt(result).toString());
    }

    function raizN(){
        setResult(abs(result).toString());    
    }

    function factorialX(){
        setResult(Math.factorial(result).toString());
    }

    function elevadoAlCuadrado(){
        setResult(pow(result, 2).toString());
    }
    
    function potenciaCubica(){
        setResult(pow(result, 3).toString());
    }

    function potenciaN(){
        setResult(Math.evaluate([result , pow(setResult, result)]).toString());
    }

    function logN(){
        setResult(log(result).toString());
    }
  
    function logDiez(){
        setResult(Math.log10(result).toString());
    }
  
    function notacionExp(){
        setResult(exp(result).toString());
    }

    function coseno(){
        setResult(cos(result).toString());
    }
  
    function seno(){
        setResult(sin(result).toString());
    }

    function tangente(){
        setResult(tan(result).toString());
    }

    function porcentaje(){
        setResult(Math.evaluate(result * 100, setResult / result) ).toString();
    }

    function clear(){
        setResult('');
    }

    function numeroPi(){
        setResult(pi.toString());
    }

    function backspace(){
        setResult(result.slice(0, - 1));
    }
    
    function calculate(){
        try {
            setResult(evaluate(result).toString());
        } catch (error){
            setResult('SystemError');
        }
    }
    
  return (
    <div className='container text-center'>
        <div className='calculadora justify-content-center'>
            <div id="container-calculadora" className="operadores">
                <div className='pantalla'>
                    <div className='marca'>CASIO</div>
                    <div className='numeroserie'>DX-140ST</div>
                    <div className='display'>
                        <div className='visor'>
                            <input className='screen' type='text' value={result} ref={inputRef}/>                                    
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className='botones'>
                    <button className="btn" type="button" onClick={handleClick}>(</button>
                    <button className="btn" type="button" >)</button>
                    <button type="button" name='!' onclick={handleClick} onChange={factorialX}>x!</button>
                    <button type="button" name='x²' onclick={elevadoAlCuadrado}>x²</button>
                    <button type="button" name='²√' onClick={raizCuadrada}>²√</button>
                    <button type="button" name='√'  onClick={handleClick} onChange={raizN}>ⁿ√</button>

                    <button type="button" name='seno' onClick={seno}>sin</button>
                    <button type="button" name='coseno' onClick={coseno}>cos</button>
                    <button type="button" name='tangente' onClick={tangente}>tg</button>
                    <button type="button" name='x³' onClick={potenciaCubica}>x³</button>
                    <button type="button" name='³√' onClick={raizCubica}>³√</button>
                    <button type="button" name='^' onClick={handleClick} onChange={potenciaN}>xⁿ</button>

                    <button className="btn numero" type="button" name='1' onClick={handleClick}>1</button>
                    <button className="btn numero" type="button" name='2' onClick={handleClick}>2</button>
                    <button className="btn numero" type="button" name='3' onClick={handleClick}>3</button>
                        
                    <button className="btn" type="button" name='/' onClick={handleClick}>/</button>
                    <button className="btn" type="button" name='%' onClick={handleClick} onChange={porcentaje}>%</button>
                    <button type="button" name='ln()' onClick={logN}>ln</button>
                        
                    <button className="btn numero" type="button" name='4' onClick={handleClick}>4</button>
                    <button className="btn numero" type="button" name='5' onClick={handleClick}>5</button>
                    <button className="btn numero" type="button" name='6' onClick={handleClick}>6</button>

                    <button className="btn" type="button" name='*' onClick={handleClick}>*</button>
                    <button type="button" name='log()' onClick={logDiez}>log</button>
                    <button type="button" name='e' onClick={notacionExp}>e</button>
                        
                    <button className="btn numero" type="button" name='7' onClick={handleClick}>7</button>
                    <button className="btn numero" type="button" name='8' onClick={handleClick}>8</button>
                    <button className="btn numero" type="button" name='9' onClick={handleClick}>9</button>
                                    
                    <button className="btn" type="button" name='-' onClick={handleClick}>-</button>
                    <button id="ac" className='botonColor' type="button" name='clear' onClick={clear}>AC</button>
                    <button className="btn" type="button" name='.' onClick={handleClick}>.</button>

                    <button className="btn numero" type="button" name='0' onClick={handleClick}>0</button>
                    <button className="numero" type="button" name='π'onClick={numeroPi}>π</button>
                    <button className="btn" type="button" name='+' onClick={handleClick}>+</button>
                        
                    <button className='botonColor' type="button" onclick={backspace}>MR</button>
                    <button id="eval" className="igual" type="button" onClick={calculate}>=</button>
                </div>         
                <p>*****</p> 
            </div>
        </div>
    </div>
  )
}

export default Calculadora;
