
//synchronous all the instructions are printed out in order
const second = () => {
//is a function that we can use a callback and also a time
setTimeout(() => {
  console.log('Async here');
}, 2000);
}

const first = () => {
  console.log('Hey there');
  second();
  console.log('The end')
}



first();
