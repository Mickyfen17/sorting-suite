export const split = arr => {
  if(arr.length === 1) {
    return arr;
  } else {
    let leftHalf = arr.slice(0, Math.floor(arr.length/2));
    let rightHalf = arr.slice(Math.floor(arr.length/2));
    return mergeSort(split(leftHalf), split(rightHalf));
  }
};

export const mergeSort = (left, right) => {
  let sorted = [];
  while(left.length || right.length) {
    if(left[0] < right[0]) {
      sorted.push(left.shift());
    } else if(left.length < 1){
      sorted.push(right.shift());
    } else if(right.length < 1){
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  return sorted;
};

// export default { split, mergeSort };
