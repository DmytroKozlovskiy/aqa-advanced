// To do 
function getTodo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json());
}
getTodo()
  .then(data => console.log(data));

  // Get user
function getUser() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json());
} 
getUser()
  .then(data => console.log(data));


  // Promise all
  Promise.all([getTodo(), getUser()])
  .then(results => {
    console.log('Promise.all results:', results); 
  })
  .catch(err => console.error('Error in Promise.all:', err));

  // Promise race
  Promise.race([getTodo(), getUser()])
  .then(result => {
    console.log('Promise.race result:', result); 
  })
  .catch(err => console.error('Error in Promise.race:', err));