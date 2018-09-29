"use strict"
// реализовать функцию
// которая возвращает массив
// с уникальными элементами [1,1,2,3,1,2] => [1,2,3]
let array = [1,1,2,3,1,2];

function uniqueNumbers(arr) {
  let result = [];
  nextInput:
    for (let i = 0; i < arr.length; i++) {
      let str = arr[i]; 
      for (let j = 0; j < result.length; j++) {
        if (result[j] == str) continue nextInput;
      }
      result.push(str);
    }
  return result;
}
console.log(uniqueNumbers(array));