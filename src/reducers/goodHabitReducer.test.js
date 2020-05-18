import { addGoodHabit } from '../actions/goodHabitActions';
import reducer from './goodHabitReducer';

describe('it is a reducer for Good Ha its', () => {
  it('handles ADD_HABIT', () => {
    const state = []; 
    const action = addGoodHabit({
      _id: 'xtothexof9',
      title: 'a good habit',
      description: 'coding every day',
      goal: 21,
      progress: 0
    });

    const newState = reducer(state, action);

    expect(newState).toEqual([
      {
        _id: 'xtothexof9',
        title: 'a good habit',
        description: 'coding every day',
        goal: 21,
        progress: 0
      }
    ]);
  }); 
});
