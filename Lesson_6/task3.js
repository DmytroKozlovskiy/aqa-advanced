function checkOrder(available, ordered) {
  if (available < ordered) {
    return 'Your order is too large, we don’t have enough goods'
  }
  if (ordered === 0) {
    return 'Your order is empty';
  }
  else {
    return 'The order is accepted';
  }
}
console.log(checkOrder(30, 20));