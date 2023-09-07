// 23.9.6 복습

/* const person = new Object();

console.log(person);

person.name = "Lee";
person.sayHello = function () {
  console.log("Hi! My name is" + this.name);
};

console.log(person);
person.sayHello();

console.log("-------------------------------");

const strObj = new String("Lee");
console.log(typeof strObj); // object
console.log(strObj); // String {"Lee"}
console.log(Object.keys(strObj));
console.log(Object.values(strObj));
console.log(Object.entries(strObj));
 */

/* function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1);
console.log(circle1.getDiameter());
console.log(circle2.getDiameter()); */

// 생성자 함수
function Circle(radius) {
  // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 인스턴스의 생성
const circle1 = new Circle(5); // 반지름이 5인 Circle 객체를 생성
const circle2 = new Circle(10); // 반지름이 10인 Circle 객체를 생성

const circle3 = Circle(15);

console.log(circle3);
