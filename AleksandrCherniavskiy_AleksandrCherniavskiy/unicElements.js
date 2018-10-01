function uniqueElementsArray(array) {
    var result = [];

    nextIteration:
        for (var i = 0; i < array.length; i++) {
        if (result.indexOf(array[i]) == -1) {
            result.push(array[i]);
        }
        else continue nextIteration;
        }

        return result;
}

arr1 = [1, 1, 2, 3, 1, 2];
arrayNew = uniqueElementsArray(arr1);
console.log(arrayNew);