let users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Bob", age: 35 },
  { id: 4, name: "Alice", age: 40 },
]
for (let {id, name, age} of users) {
  console.log(id, name, age);
}
