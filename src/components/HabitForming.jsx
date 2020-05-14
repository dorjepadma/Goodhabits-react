import React, { useState } from 'react';
import { goodHabit } from '../services/GoodHabitAPI';

const HabitForming = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goal, setGoal] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    goodHabit({ title, setDescription, goal })
      .then(goodHabit => {

      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={title} onChange={({ target }) => setTitle(target.value)} placeHolder='Good Habits' />
      <textarea value={description} onChange={({ target }) => setDescription(target.value)} placeHolder='What is your new habit'></textarea>
      <input type='number' value={goal} onChange={({ target }) => setGoal(target.value)} placeHolder='it takes consistency'></input>
      <button>New Habit</button>
    </form>
  );
};
export default HabitForming;
