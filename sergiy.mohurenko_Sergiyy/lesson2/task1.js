"use strict"
// реализовать функцию которая вернет
// сумму элементов произвольного массива
let myArray = [1, 2, 3, 4, 5];
function arraySum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
} 
arraySum(myArray);