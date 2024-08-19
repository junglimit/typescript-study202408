

let userName: string | string[];

userName = 'Hong';
userName = ['Hong', 'Kim'];


// type alias
type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: 'Hong',
  age: 32
};

let people: Person[];

let course: string | number = 'Typescript Demo';

course = 12341;
