function sumElemArr(arr) {
    var sum = 0;

    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

arr1 = [1, 0, 2, 3];
console.log( sumElemArr(arr1) );
