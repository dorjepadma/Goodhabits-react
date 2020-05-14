export const postHabit = habit => {
  return fetch('http://localhost7890/api/v1,goodhabits', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(habit)
  })
    .then(res => res.json());
};

