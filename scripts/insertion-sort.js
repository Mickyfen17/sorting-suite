const insertionSort = arr => {
  for(let i = 0; i < arr.length; i++) {
    let sorted = arr[i];
    let unsorted = arr[i+1];
    if(sorted > unsorted) {
      [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
      insertionSort(arr);
    }
  }
  return arr;
};

// const insertionSort = arr => {
//   arr.forEach((value, i) => {
//     let sorted = arr[i];
//     let unsorted = arr[i+1];
//     if(sorted > unsorted) {
//       [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
//       insertionSort(arr);
//     }
//   });
//   return arr;
// };

export default insertionSort;
