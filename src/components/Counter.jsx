import { useState, useReducer } from 'react';
const Counter = () => {
    //const [count, setCount] = useState(0);
    //const [numberToChangeBy, setNumberToChangeBy] = useState(1);



    const initialState = { 
      count: 0, 
      inputNum: 1
    }; //similar to useState(0) in which we set initial state to 0

    const reducer = (state, action) => {//contains logic to update state

      switch (action.type){ //update based on what action we wanna perform
        case 'increment': 
          return {...state, count: state.count + action.payload}//if increment, update current state + 1
        case 'decrement': 
          return {...state, count: state.count - action.payload}//if decrement, update current state - 1
        case 'update': 
          return {...state, inputNum: parseInt(action.payload, 10)}
        case 'reset': //reset if action.type='reset'
            return {count: 0, inputNum: 1}; 
          default: 
            throw console.error("invalid action.type")
      }
    }//the reducer function inputs current state, outputs(returns) updated state

      const [state, dispatch] = useReducer(reducer, initialState); //dispatch passes action, along with current state, to reducer

      const incrementBy = () => {
        dispatch({
          type: 'increment', 
          payload: state.inputNum
           
        })
      }
      const decrementBy = () => {
        dispatch({
          type: 'decrement', 
          payload: state.inputNum
           
        })
      }
      const handleInput = (e) => {
        dispatch({
        type: 'update', 
        payload: e.target.value, 
      })
      }











    return (<div className="App">
    <pre className="rainbow box text-center">Value {state.count}</pre>
    <div className="flex gap center">
        <button className="button-box" value = {state.count} onClick={incrementBy}><span className="huge">+</span>Increment by {state.inputNum}</button>
        <button className="button-box" value = {state.count} onClick={decrementBy}><span className="huge">-</span>Decrement by {state.inputNum}</button></div>
        <p className="flex gap center"><label className="button-box" htmlFor="number">Number to Increment/Decrement by </label><input className="input-box" 
         onChange={handleInput}
        type="number" value={state.inputNum} 
        name="number" id="number" /></p>
  </div>);
}

export default Counter;