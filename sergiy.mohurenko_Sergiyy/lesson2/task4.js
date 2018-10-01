"use strict"
// реализовать функцию которая возвращает 
// массив с числами Фибоначчи,
// количество которых зависит от переданного
// значения при вызове функции
function fibonacciNumbers(number) {
  let fibonacci = [0, 1];
  
  if (number < 2) {
    console.log(fibonacci.slice(0, number));
  } else {
    for (let i = 2; i < number; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    console.log(fibonacci);
  }
}
fibonacciNumbers(35);
fibonacciNumbers(8);
fibonacciNumbers(1);
fibonacciNumbers(0);

