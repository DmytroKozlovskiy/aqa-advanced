function delayLog(message, ms) {
  setTimeout(() => {
    console.log(message);
  }, ms);
}

delayLog('First text after 1s', 1000);
delayLog('Second text after 3s', 3000);
