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

             setState({...state, symbol:symb})
             
             calculate(symb)
         }
       
        
        
     }


     
     const calculate = (symb) => {
         if(symbol === '+'){
             setState({...state, symbol:symb, result:firstNumber + secondNumber,  firstNumber:firstNumber + secondNumber, secondNumber:''})
         }else if(symbol === '-'){
            setState({...state, symbol:symb,  result:firstNumber - secondNumber, firstNumber:firstNumber - secondNumber, secondNumber:''})
         }else if(symbol === '*'){
            setState({...state, symbol:symb, result:firstNumber * secondNumber, firstNumber:firstNumber * secondNumber, secondNumber:''})
         }else if(symbol === '/'){
            setState({...state, symbol:symb, result:firstNumber / secondNumber, firstNumber:firstNumber / secondNumber, secondNumber:''})
         }
     }


console.log(state);
     const plusNumber = (value) => {
         if(symbol === ''){
             setState({...state, firstNumber:+(firstNumber + value)})
         }else{
             setState({...state,   secondNumber: +(secondNumber + value)})
         }
         
         
     }

   
    
  return(
      

    <div>
        <h1>{firstNumber}{symbol}{secondNumber}</h1>
        <h2>{result}</h2>
            {
                numbers.map(number => <button value={number} onClick={(e) => plusNumber(e.target.value)} key={number}>{number}</button>)
            }
            {
                symbols.map(item => <button value={item} onClick = {(e) => func(e.target.value)} key={item}>{item}</button>)
            }
            <button onClick={() => setState({...initialState, symbol: '', firstNumber:'', secondNumber:'', result:0})}>AC</button>
            
            
    </div>
     
   
      
  )
  }

export default App
