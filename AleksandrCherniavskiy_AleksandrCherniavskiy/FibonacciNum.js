function fibonacciNum(numberOfElements) {
    if (numberOfElements == 1) return [1];
    if (numberOfElements == 2) return [1, 1];

    var arr = [1, 1];
    for (var i = 2; i < numberOfElements; i++) {
        arr[i] = arr[i -1] + arr[i - 2];
    }

    return arr;
}

console.log( fibonacciNum(12) );
   