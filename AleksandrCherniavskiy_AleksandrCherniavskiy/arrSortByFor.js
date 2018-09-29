function sortArr(arr) {
    if (arr.length == 0) return [];

    var a = [], b = [], p = arr[0];
    for (var i = 1; i < arr.length; i++) {

        if (arr[i] < p) a[a.length] = arr[i];
        else b[b.length] = arr[i];
    }

    return sortArr(a).concat( p,sortArr(b) );
}

arr1 = [3, -7, 11, 4, 0, -2, 1];
console.log( sortArr(arr1) );