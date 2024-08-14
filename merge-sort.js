// This is my self made merge sort algorithm,
// designed to sort an array of numbers efficiently
function mergeSort(arr) {
  // base case
  if (arr.length == 1) {
    return arr;
  }
  let half = Math.ceil(arr.length / 2);
  let rightSide = arr.slice(half, arr.length);
  let leftSide = arr.slice(0, half);
  return mergeAlgo(mergeSort(rightSide), mergeSort(leftSide));
}

// functionality of merging and sorting two arrays
function mergeAlgo(arr1, arr2) {
  let newArr = [];
  while (arr1.length >= 1 && arr2.length >= 1) {
    arr1[0] <= arr2[0] ? newArr.push(arr1.shift()) : newArr.push(arr2.shift());
  }
  return newArr.concat(arr1, arr2);
}

console.log('mergeSort:  ' + mergeSort([10, 3, 1, 5, 4, 7, 6, 8, 9, 2]));
