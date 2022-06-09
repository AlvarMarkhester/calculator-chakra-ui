import React, { useReducer } from 'react';
import CalculatorUI from './CalculatorUI';
import reducer from './Logic';

const initialState = {
  currentOperand: '',
  previousOperand: '',
  operator: '',
  evaluated: false,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <CalculatorUI state={state} dispatch={dispatch} />;
}

export default App;
