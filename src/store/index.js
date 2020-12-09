import { createStore } from 'redux';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const actions = {
  increment: () => ({ type: INCREMENT }),
  decrement: () => ({ type: DECREMENT })
}

const reducer = (counter, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log(counter);
      return  counter + 1 ;
    case DECREMENT:
      console.log(counter);
      return counter - 1;
    default: 
      return counter;
  }
}

export const store = createStore(reducer, 0);
export default store;