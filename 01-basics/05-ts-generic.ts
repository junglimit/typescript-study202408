function insertAtBeginning(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

// 여기서 ts는 updatedArray가 number[]이라는 것을 추론하지 못한다.
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

// 따라서 이 코드가 작동된다.
updatedArray.push('hello');

function insertAtBeginning2<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

// 제너릭을 사용하면 any배열이 아닌 T타입배열로 추론하게됨
const updatedArray2 = insertAtBeginning2(demoArray, -1); // [-1, 1, 2, 3]

// updatedArray2.push('hello');
const strArray = insertAtBeginning2(['a','b'], 'z');
// strArray.push(100); // (X)
strArray.push('x');


