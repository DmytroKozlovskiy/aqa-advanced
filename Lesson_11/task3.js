// To do
function getTodo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json());
}

// Get user
function getUser() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json());
}

// Async/Await
async function fetchData() {
  try {
    const todo = await getTodo();   
    const user = await getUser();  

    console.log('Todo:', todo);
    console.log('User:', user);

    const allResults = await Promise.all([getTodo(), getUser()]);
    console.log('Promise.all results:', allResults);
    
    const raceResult = await Promise.race([getTodo(), getUser()]);
    console.log('Promise.race result:', raceResult);

  } catch (err) {
    console.error('Error:', err);
  }
}
fetchData();
