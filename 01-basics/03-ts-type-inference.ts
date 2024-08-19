let age = 25;
// age = 'hello'; // 오류: 'string' 형식은 'number' 형식에 할당할 수 없습니다.


function add(a: number, b: number) {
  return a + b;
}

let result = add(10, 20);

// result = false;

let hobbies = ['Sports', 'Cooking'];

hobbies.push('Reading'); // 정상
// hobbies.push(42); // 오류: 'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.

let person = {
  name: 'Alice',
  age: 30,
};

// person = {
//   name: 123,
//   age: '33'
// };

// person.age = '44';


