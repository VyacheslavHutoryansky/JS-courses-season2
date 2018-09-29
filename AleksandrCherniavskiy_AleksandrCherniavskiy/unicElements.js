function unicElemArr(arr) {
    var result = [];

    nextIteration:
        for (var i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) == -1) {
            result.push(arr[i]);
        }
        else continue nextIteration;
        }

        return result;
}

arr1 = [1, 1, 2, 3, 1, 2];
arrNew = unicElemArr(arr1);
console.log(arrNew);