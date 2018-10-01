function fibonacciNum(numberOfElements) {
    if (numberOfElements == 1) return [1];
    if (numberOfElements == 2) return [1, 1];

    var arrayOfElementsFibonacci = [1, 1];
    for (var i = 2; i < numberOfElements; i++) {
        arrayOfElementsFibonacci[i] = arrayOfElementsFibonacci[i -1] + arrayOfElementsFibonacci[i - 2];
    }

    return arrayOfElementsFibonacci;
}

console.log( fibonacciNum(12) );
