const bubbleSort = arr => {
  if(!Array.isArray(arr)) {
    throw new Error("Must pass in an array");
  }
  for(let i = 0; i < arr.length; i++) {
    for(let j = 1; j < arr.length; j++) {
      let curr = arr[j-1];
      let next = arr[j];
      if(curr > next) {
        arr[j-1] = next;
        arr[j] = curr;
      }
    }
  }
  return arr;
};

export default bubbleSort;
