function fibonacciNum(num) {
    if (num == 1) return [1];
    if (num == 2) return [1, 1];

    var arr = [1, 1];
    for (var i = 2; i < num; i++) {
        arr[i] = arr[i -1] + arr[i - 2];
    }

    return arr;
}

console.log( fibonacciNum(12) );