import { addGoodHabit } from './goodHabitActions';

describe('good habits actions', () => {
  it('creates a ADD_HABIT action', () => {
    const action = addGoodHabit({
      _id: 'xtothexof9',
      title: 'a good habit',
      description: 'coding every day',
      goal: 21,
      progress: 0
    });

    expect(action).toEqual({
      type: 'ADD_HABIT',
      payload: { 
        _id: 'xtothexof9',
        title: 'a good habit',
        description: 'coding every day',
        goal: 21,
        progress: 0
      }
    });
  });
});
