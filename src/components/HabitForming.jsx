import React, { useState } from 'react';
import { postHabit } from '../services/GoodHabitAPI';
import { useDispatch } from 'react-redux';
import { addGoodHabit } from '../actions/goodHabitActions';
import styles from './Display.css';

const HabitForming = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goal, setGoal] = useState(1);


  const handleSubmit = event => {
    event.preventDefault();
    addGoodHabit({ title, setDescription, goal })
      .then(habit => {
        dispatch(addGoodHabit(habit));

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
