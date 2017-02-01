const bubbleSort = arr => {
  for(let i = 0; i < arr.length; i++) {
    let prev = arr[i];
    let curr = arr[i+1];
    if(prev > curr) {
      [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
      bubbleSort(arr);
    }
  }
  return arr;
};

// const bubbleSort = arr => {
//   arr.forEach((value, i) => {
//     let prev = arr[i];
//     let curr = arr[i+1];
//     if(prev > curr) {
//       [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
//       bubbleSort(arr);
//     }
//   });
//   return arr;
// };

export default bubbleSort;
