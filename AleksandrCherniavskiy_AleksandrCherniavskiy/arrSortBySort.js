function compareNumeric(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function sortArray(array) {

    return array.sort(compareNumeric);
}

arr1 = [3, -7, 11, 4, 0, -2, 1];
console.log( sortArray(arr1) );