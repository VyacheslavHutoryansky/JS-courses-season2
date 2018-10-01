"use strict"
// реализовать функцию которая 
// принимает произвольный массив и 
// возвращает отсортированный по возрастанию,
// сделать двумя способами, через метод sort
// и через цикл for
let arrayOne = [1, 0, 19, 3, 6, 5];
let arrayTwo = [1, 17, 3, 9, 5];
let arrayThree = [9, 27, 0, 6, -5];

function sortNumbers(array){
    console.log(array.sort(compare));
}

function compare(firstElement, secondElement) {
    return firstElement - secondElement;
}

sortNumbers(arrayOne);

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let min = i;
        for (let j = +i; j < array.length; j++) {
             if (array[j] < array[min])
              min = j; 
            }
        let element = array[min];
        array[min] = array[i]; 
        array[i] = element;
    }
    console.log(array);
}
selectionSort(arrayTwo);
selectionSort(arrayThree);
