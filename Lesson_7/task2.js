function countNumber(num) {
  console.log(num)
  if (num > 0) {
    countNumber(num - 1)
  }
}
countNumber(5)


