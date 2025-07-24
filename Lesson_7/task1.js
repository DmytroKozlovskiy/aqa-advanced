/* function handleNum (num, handleEven, handleOdd) {
  if (num % 2 === 0) {
    handleEven()
  } else {
    handleOdd()
  }
}
function handleEven () {
  console.log('Number is even')
}
function handleOdd () {
  console.log('Number is odd')
}
handleNum(6, handleEven, handleOdd) */

// Також спробував варінт стрілочною функцією:

const handleNum = (num, handleEven, handleOdd) => num % 2 === 0 ? handleEven() : handleOdd()
const handleEven = () => console.log('Number is even')
const handleOdd = () => console.log('Number is odd')
handleNum(7, handleEven, handleOdd)
  