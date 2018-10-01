function sortArray(array) {
    if (array.length == 0) return [];

    var subArrayOfSmallerElements = [], subArrayOfLargerElements = [], supportingElment = array[0];
    for (var i = 1; i < array.length; i++) {

        if (array[i] < supportingElment) subArrayOfSmallerElements[subArrayOfSmallerElements.length] = array[i];
        else subArrayOfLargerElements[subArrayOfLargerElements.length] = array[i];
    }

    return sortArray(subArrayOfSmallerElements).concat( supportingElment,sortArray(subArrayOfLargerElements) );
}

arr1 = [3, -7, 11, 4, 0, -2, 1];
console.log( sortArray(arr1) );