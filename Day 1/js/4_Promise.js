function delayedUpperCase(input) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof input === "string") {
        resolve(input.toUpperCase());
      } else {
        reject(input);
      }
    }, 500);
  });
}

let promise = delayedUpperCase("velsof");
  
promise.then(res => console.log(res))  
  .catch(e => console.log(e));

let promise2 = delayedUpperCase(42);

promise2.then(res => console.log(res))
  .catch(e => console.log(e)); 