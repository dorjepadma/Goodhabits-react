import { ADD_HABIT } from '../actions/goodHabitActions';

export default function reducer(state = [], action) {
  switch(action.type) {
    case ADD_HABIT:
      return [...state, action.payload];
    default: 
      return state;
  }
}
