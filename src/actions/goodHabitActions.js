export const ADD_HABIT = 'ADD_HABIT';

export const addGoodHabit = habit => ({
  type: ADD_HABIT,
  payload: habit
});
