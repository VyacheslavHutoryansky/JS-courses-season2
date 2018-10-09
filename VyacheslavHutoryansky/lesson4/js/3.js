function diffInArray(arr1, arr2) {
    return difference = arr1.filter(x => arr2.indexOf(x) == -1);
}

console.log("Результат arr1: ");
console.log(diffInArray([1, 2, 3, 4], [7, 6, 5, 4, 3]));
console.log("Результат arr2: ");
console.log(diffInArray([7, 6, 5, 4, 3], [1, 2, 3, 4]));
