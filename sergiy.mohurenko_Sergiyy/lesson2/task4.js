"use strict"
// реализовать функцию которая возвращает 
// массив с числами Фибоначчи,
// количество которых зависит от переданного
// значения при вызове функции
function fibonacciNumbers(n) {
  let fib = [0, 1];
  if (n < 2) {
    console.log(fib.slice(0, n));
  } else {
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log(fib);
  }
}
fibonacciNumbers(35);
fibonacciNumbers(8);
fibonacciNumbers(1);
fibonacciNumbers(0);

