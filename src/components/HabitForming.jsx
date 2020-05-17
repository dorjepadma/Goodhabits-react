import React, { useState } from 'react';
import { goodHabit } from '../services/GoodHabitAPI';
import styles from './Display.css';

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
    <form className= {styles.display} onSubmit={handleSubmit}>
      
      <input type='text' value={title} onChange={({ target }) => setTitle(target.value)} placeholder='Good Habits' />
      <textarea value={description} onChange={({ target }) => setDescription(target.value)} placeholder='What is your new habit'></textarea>
      <input type='number' value={goal} onChange={({ target }) => setGoal(target.value)} placeholder='it takes consistency'></input>
      <button>New Habit</button>
      
    </form>
  );
};
export default HabitForming;
