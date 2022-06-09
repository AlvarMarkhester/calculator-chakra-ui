function calculate(a, b, op) {
  switch (op) {
    case '+':
      return parseFloat(a) + parseFloat(b);
    case 'x':
      return a * b;
    case '-':
      return a - b;
    case '/':
      return a / b;
    default:
      throw new Error();
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_DIGIT':
      if (state.evaluated) {
        return {
          ...state,
          currentOperand: action.digit,
          evaluated: false,
        };
      }
      if (state.currentOperand === '0' && action.digit !== '.') {
        return state;
      }
      if (action.digit === '.' && state.currentOperand.includes('.')) {
        return state;
      }
      return {
        ...state,
        currentOperand: String(state.currentOperand) + action.digit,
      };
    case 'ADD_OPERATOR':
      if (
        state.currentOperand === '.' ||
        (state.currentOperand === '' && state.operator === '')
      ) {
        return state;
      }
      if (state.operator !== '' && state.currentOperand === '') {
        return {
          ...state,
          operator: action.operator,
        };
      }
      if (state.previousOperand === '') {
        return {
          ...state,
          currentOperand: '',
          previousOperand: state.currentOperand,
          operator: action.operator,
        };
      }
      return {
        ...state,
        currentOperand: '',
        previousOperand: calculate(
          state.previousOperand,
          state.currentOperand,
          state.operator
        ),
        operator: action.operator,
      };
    case 'CLEAR':
      return {
        ...state,
        currentOperand: '',
        previousOperand: '',
        operator: '',
        evaluated: false,
      };
    case 'CLEAR_ENTRY':
      if (state.evaluated)
        return {
          ...state,
          currentOperand: '',
          previousOperand: '',
          operator: '',
          evaluated: false,
        };
      if (state.currentOperand === '') {
        return state;
      }
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    case 'EVALUATE':
      if (state.previousOperand === '' || state.currentOperand === '')
        return state;
      return {
        currentOperand: calculate(
          state.previousOperand,
          state.currentOperand,
          state.operator
        ),
        previousOperand: '',
        operator: '',
        evaluated: true,
      };
    default:
      throw new Error();
  }
}

export default reducer;
