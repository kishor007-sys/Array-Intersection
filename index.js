const arr1 = [1,2,3,4,5,6];
const arr2 = [1,3,5,7];

const arr3 = arr1.filter((data) => arr2.includes(data));
console.log(arr3)