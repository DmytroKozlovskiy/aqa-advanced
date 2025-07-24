function divide(numerator, denominator) {
  if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    throw new Error('Both arguments must be numbers!');
  }
  if (denominator === 0) {
    throw new Error('Cannot divide by zero!');
  }
  return numerator / denominator;
}

// Виклик 1
try {
  console.log(divide(10, 5));
} catch (error) {
  console.error(error.message);
} finally {
  console.log('Робота завершена');
}

// Виклик 2
try {
  console.log(divide('10', 5));
} catch (error) {
  console.error(error.message);
} finally {
  console.log('Робота завершена');
}

// Виклик 3
try {
  console.log(divide(10, 0));
} catch (error) {
  console.error(error.message);
} finally {
  console.log('Робота завершена');
}
