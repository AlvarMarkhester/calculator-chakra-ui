var operators = {
  '+': (a, b) => parseFloat(a) + parseFloat(b),
  x: (a, b) => a * b,
  '-': (a, b) => a - b,
  '/': (a, b) => a / b,
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_DIGIT':
      if (state.currentOperand === '0' && action.digit !== '.') {
        return state;
      }
      if (action.digit === '.' && state.currentOperand.includes('.')) {
        return state;
      }
      return {
        ...state,
        currentOperand: state.currentOperand + action.digit,
      };
    case 'ADD_OPERATOR':
      if (
        state.previousOperand !== '' ||
        state.currentOperand === '' ||
        state.currentOperand === '.'
      ) {
        return state;
      }
      return {
        currentOperand: '',
        previousOperand: state.currentOperand,
        operator: action.operator,
      };
    case 'CLEAR':
      return {
        currentOperand: '',
        previousOperand: '',
        operator: '',
      };
    case 'CLEAR_ENTRY':
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
        currentOperand: operators[state.operator](
          state.previousOperand,
          state.currentOperand
        ),
        previousOperand: '',
        operator: '',
      };
    default:
      throw new Error();
  }
}

export default reducer;
