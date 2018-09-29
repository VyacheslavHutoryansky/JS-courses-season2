"use strict"
// реализовать функцию которая 
// принимает произвольный массив и 
// возвращает отсортированный по возрастанию,
// сделать двумя способами, через метод sort
// и через цикл for
let arr1 =[1,0,19,3,6,5];
let arr2 =[1,17,3,9,5];

function sortNumbers(arr){
    console.log(arr.sort(compare));
}

function compare(a, b) {
    return a - b;
  }
sortNumbers(arr1);

function SelectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
             if (arr[j] < arr[min])
              min = j; 
            }
        let element = arr[min];
        arr[min] = arr[i]; 
        arr[i] = element;
    }
    console.log(arr);
}
SelectionSort(arr2);
