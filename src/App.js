import { useState } from "react";

 
 export const App = () => {

     const initialState = {
         firstNumber:'',
         symbol:'',
         secondNumber:'',
         result:0
     }

     const [state, setState] = useState(initialState)

     const {firstNumber, symbol, secondNumber, result} = state
     const numbers =  ['.',9,8,7,6,5,4,3,2,1,0,]
     const symbols = ['+', '-', '*', '/', '=']



     const func = symb => {
         
         if(firstNumber){
             if(symb === '='){
                 calculate()
             }else if(firstNumber[firstNumber.length - 1] === '.'){
                 setState({...state, firstNumber:firstNumber.slice(0,-1), symbol:symb})
             }else{
                 setState({...state, symbol:symb})
                 calculate(symb)
             }
         } 
     }


     
     const calculate = (symb) => {
         if(symbol === '+'){
             setState({...state, symbol:symb, result:+firstNumber + +secondNumber,  firstNumber:+firstNumber + +secondNumber, secondNumber:''})
         }else if(symbol === '-'){
            setState({...state, symbol:symb,  result:+firstNumber - +secondNumber, firstNumber:+firstNumber - +secondNumber, secondNumber:''})
         }else if(symbol === '*'){
            setState({...state, symbol:symb, result:+firstNumber * +secondNumber, firstNumber:+firstNumber * +secondNumber, secondNumber:''})
         }else if(symbol === '/'){
            setState({...state, symbol:symb, result:+firstNumber / +secondNumber, firstNumber:+firstNumber / +secondNumber, secondNumber:''})
         }
     }


console.log(state);
     const plusNumber = (value) => {
       
         if(symbol === '' ){
             if(value === '.'   && !firstNumber){
                let num = '0.'
                 setState({...state, firstNumber:num})
             }else if(firstNumber[0] === '0' && firstNumber[1] === undefined && +value > 0){
                 setState({...state, firstNumber:value})
             }
             else if(firstNumber.includes('.') && value === '.'  ){
                setState({...state, firstNumber:firstNumber})
             }else if(firstNumber[0] === '0' && firstNumber.length === 1 && value === '0' ){
                setState({...state, firstNumber:firstNumber})
             }else{
                 setState({...state, firstNumber:firstNumber + value})
             }
         }else{
             if(!secondNumber && value === '.'){
                 setState({...state, secondNumber:secondNumber})
             }else if(secondNumber[0] === '0' && value === '0'){
                 setState({...state, secondNumber:secondNumber})
             }
             else if(secondNumber.includes('.') && value === '.'){
                setState({...state, secondNumber:secondNumber})
             }else if(secondNumber [0] === '0' && secondNumber [1] === undefined && +value > 0){
                setState({...state, secondNumber :value})
            }
             else{
                 setState({...state,   secondNumber: secondNumber + value})
             }
         }   
     }

   
    
  return(
      

    <div>
        <h1>{firstNumber}{symbol}{secondNumber}</h1>
        <h2>{result}</h2>
            {
                numbers.map(number => <button  onClick={() => plusNumber(number.toString())} key={number}>{number}</button>)
            }
            {
                symbols.map(item => <button  onClick = {() => func(item.toString())} key={item}>{item}</button>)
            }
            <button onClick={() => setState({...initialState, symbol: '', firstNumber:'', secondNumber:'', result:0})}>AC</button>
            
            
    </div>
     
   
      
  )
  }

export default App
