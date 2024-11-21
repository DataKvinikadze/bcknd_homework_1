// console.log("Hello");

// 1
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
let [amount, negative] = [0, 0];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 0) {
    amount += 1;
  } else if (nums[i] < 0) {
    negative += nums[i];
  }
}
console.log([amount, negative]);

// 2

for (let i = 0; i < nums.length; i++) {
  nums[i] *= 2;
}

const devided = nums.filter((element) => element % 3 === 0);

console.log(devided);

// 3

const arr = [19, 5, 42, 2, 77];

const sum = (arr = []) => {
  arr.sort((a, b) => a - b);
  console.log(arr);
  return arr[0] + arr[1];
};
console.log(sum(arr));

// 4

let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
const LargerArr = [];

const getLargerNumbers = (arr1 = [], arr2 = []) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] >= arr2[i]) {
      LargerArr[i] = arr1[i];
    } else {
      LargerArr[i] = arr2[i];
    }
  }
  return LargerArr;
};

console.log(getLargerNumbers(arr1, arr2)); // Returns [23, 64, 53, 17, 88]

// 5
const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// * Get an array of all names
const names = characters.map((element) => element.name);
console.log(names);

// *  Get an array of all first names
const firstNames = characters.map((element) => element.name.split(" ")[0]);
console.log(firstNames);

// * დააჯგუფეთ თვალის ფერის მიხედვით, გამოიყენეთ რედიუსი და უნდა მიიღოთ შემდეგი შედეგი:

const reduced = characters.reduce((acc, character) => {
  const color = character.eye_color;
  if (acc[color]) {
    acc[color]++;
  } else {
    acc[color] = 1;
  }
  return acc;
}, {});

console.log(reduced);

// {blue: 2, brown: 1, yellow: 1}
