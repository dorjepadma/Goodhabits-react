export const goodHabit = habit => {
  return fetch(`${process.env.API_URL}/api/v1,goodhabits`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(habit)
  })
    .then(res => res.json());
};

