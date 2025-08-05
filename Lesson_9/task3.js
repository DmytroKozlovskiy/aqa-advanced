let car1 = {
  brand: "Mercedes",
  model: "G63",
  year: 2020,
};

let car2 = {
  brand: "Audi",
  model: "Q7",
  owner: "John Dou",
};
let car3 = {
  ...car1,
  ...car2
}

console.log(car3);