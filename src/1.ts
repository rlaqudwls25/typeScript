export {};

const value: number[] = [1, 2, 3];
const value2: Array<number> = [1, 2, 3];

// value.push("a");  value는 number만 푸쉬할 수 있다.
// value.push(1)

const data: [string, number] = ["msg", 1];

// data[0].substr(1);
// data[1].substr(1); number에는 substr 형식이 없다.

let v1: undefined = undefined;
let v2: null = null;
let v3: undefined | number = undefined;

// v2 = 123; null이기 때문에 값이 들어갈 수 없다.
// v3 = 123;
interface props {
  name: string;
}
let a1: props = { name: "jin" }; // ojbect는 interface를 통하여 타입 지정 가능

type Width = string | number;
let width: Width = 100;

enum Fruit {
  Apple,
  Banana = 5,
  Orange,
}
// enum의 각 원소는 이름과 값이 양방향으로 매핑이 된다.(원소에 숫자를 할당할 경우 문자면 단방향)
// enum은 객체로 존재한다.

enum Language {
  Korean = "ko",
  Japan = "ja",
}

// console.log(Fruit);
// console.log(Fruit[0]);

// console.log(Language);
