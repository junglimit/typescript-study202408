
// 숫자 타입 number
// let age: Number; // (X)
let age: number;
age = 12;
age = 12.22;
// age = '32';

// 문자열 타입 string
// let userName: String;  // (X)
let userName: string = 'Hong';
// userName = 110;


// 논리타입 boolean
let isInstructor: boolean;
isInstructor = false;
// isInstructor = 'false';


// 배열 타입
let hobbies: string[];
hobbies = ['Cooking', 'Swimming'];
// hobbies = [123, 456];

// 객체 타입
let person: any;
person = {
  name: 'Kim',
  age: 30
};

let person2: {
  name: string,
  age: number
};

person2 = {
  name: 'Park',
  age: 44
};

// 객체 배열
let people: {
  name: string,
  age: number
}[];

people = [
  {
    name: 'Hong',
    age: 17
  },
  person2
  // , {
  //   name: 22,
  //   age: 50
  // }
];