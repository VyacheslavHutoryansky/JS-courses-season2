"use strict"
// реализовать функцию
// которая возвращает массив
// с уникальными элементами [1,1,2,3,1,2] => [1,2,3]
let array = [1,1,2,3,1,2];

function uniqueNumbers(arr) {
  let result = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}


console.log(uniqueNumbers(array));