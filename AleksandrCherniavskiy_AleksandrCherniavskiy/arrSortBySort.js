function compareNumeric(a, b) {
    return a - b;
}

function sortArr(arr) {

    return arr.sort(compareNumeric);
}

arr1 = [3, -7, 11, 4, 0, -2, 1];
console.log( sortArr(arr1) );