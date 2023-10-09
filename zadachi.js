//`1) Напишите функцию, возвращающую случайное число в интервале
//от минимального значения до максимального. Числа могут быть отрицательными

function callRandomN(min, max) {
  return Math.ceil((Math.random() * (max - min) * min) / Math.abs(min));
}

function randOfArr(arr) {
  return arr[Math.ceil(Math.random() * (arr.length - 1))];
}

randOfArr(
  "Сделайте функцию, которая будет возвращать случайный элемент из массива.".split(
    " "
  )
);

//2)  Напишите функцию, которая получающую на вход id и признак,
// отвечающий за тип возвращаемого значения.
//В зависимости от значения признака, верните или объект URL текущей страницы,
// в query у которого значение будет добавлено значение входного параметра id,
// или строковое представление URL адреса

function queryURL(id, mark = "str") {
  let objUrl = new URL(document.location.href);
  objUrl.searchParams.set("id", id);

  if (mark === "obj") {
    return objUrl;
  }
  return objUrl.href;
}

//3) Напишите функцию принимающей на вход массив гномов вида:[{},{}]
// И возвращающий объект вида{0:{},1:{}}

let arr = [
  {
    id: 0,
    name: "Thorin",
    yearOfBirth: 2746,
  },
  {
    id: 1,
    name: "Fili",
    yearOfBirth: 2859,
  },
  {
    id: 2,
    name: "Kili",
    yearOfBirth: 2864,
  },
];

let obj = {
  0: {
    name: "Thorin",
    yearOfBirth: 2746,
  },
  1: {
    name: "Fili",
    yearOfBirth: 2859,
  },
  2: {
    name: "Kili",
    yearOfBirth: 2864,
  },
};

function changeArrInObj(arr) {
  let obj = {};
  for (let i of arr) {
    let keys = Object.keys(i);
    obj[i.id] = {};
    for (let j of keys) {
      if (j !== "id") {
        obj[i.id][j] = i[j];
      }
    }
  }
  return obj;
}

// 4) Используя функцию fetch() получите и выведите на экран весь массив  Планет,
// вселенной Star Wars ( используйте публичный API https://swapi.dev/ )

let response1 = fetch("https://swapi.dev/api");
if (response1.ok) {
  let res = fetch("https://swapi.dev/")
    .then((res) => res)
    .then((res) => console.log(res.text()));

  console.log(res);
} else {
  // alert("Ошибка HTTP: " + response1.status);
}

//5)  * Лягушка сидит на лестничной площадке. Перед ней лестница.
//  Лягушка может прыгнуть вниз на 1 или 2 ступеньки.
// Напишите функцию, которая будет выводить на экран все возможные
// последовательности прыжков лягушки до конца лестницы,
// в зависимости от количества ступенек.
// Количество ступенек принимать входным параметром.
//  Пример: лягушка сидит перед лестницей из 3-х ступенек.
// Она может допрыгать следующими последовательностями прыжков:
// a.  1,2
// b.  2,1
// c.  1,1,1

// function variableJump(num) {
//   let jamp = 0;
//   if (num === 1) {
//     return ["1"];
//   } else if (num === 2) {
//     return ["1,1", "2"];
//   }
// }

function countJump(num, arr = []) {
  if (num === 1) {
    let vJ1 = ["1"];
    if (arr.length) {
      return arr.map((el) => el + "," + vJ1[0]);
    }
    return vJ1;
  } else if (num === 2) {
    let vJ2 = ["1,1", "2"];
    if (arr.length) {
      return arr.map((el) => el + "," + vJ2[1]);
    }
    return vJ2;
  } else {
    return [
      ...countJump(1, countJump(num - 1)),
      ...countJump(2, countJump(num - 2)),
    ];
  }
}
// console.log(countJump(5));

console.time("d");
variableJumps(20);
console.timeEnd("d");
console.time("c");
countJump(20);
console.timeEnd("c");

function variableJumps(num) {
  if (num === 1) {
    return ["1"];
  } else if (num === 2) {
    return ["1,1", "2"];
  } else {
    let jumps = [];
    for (let i = 1; i <= 2; i++) {
      let remainingJumps = variableJumps(num - i);
      for (let j = 0; j < remainingJumps.length; j++) {
        jumps.push(remainingJumps[j]+','+i);
      }
    }
    return jumps;
  }
}
console.log(variableJumps(5))
//6)  * Клавиатура телефона. Реализуйте функцию,
// которая принимает на вход последовательность из цифр от 2-х до 9 и выводит
// на экран все сочетания букв, которые мог бы предложить телефон. Пример:
// входной аргумент: 23 вывод: ad,ae,af,bd,be,bf,cd,ce,cf
set
let keyboard = {
  1: [],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r"],
  8: ["s", "t", "u"],
  9: ["w", "x", "y", "z"],
};

function createArr(num, obj, arr = []) {
  let strNum = num.toString();
  let i = strNum.length;
  let res = [];
  if (i === 1 && !arr.length) {
    res = obj[strNum[0]];
    return res;
  }
  if (i > 1 && !arr.length) {
    arr = obj[+strNum[0]];
    for (let j = 0; j < arr.length; j++) {
      for (let i = 0; i < obj[+strNum[1]].length; i++) {
        res.push(arr[j] + obj[+strNum[1]][i]);
      }
    }
    return res;
  }
  if (i > 0 && arr.length) {
    for (let j = 0; j < arr.length; j++) {
      for (let i = 0; i < obj[+strNum[1]].length; i++) {
        res.push(arr[j] + obj[+strNum[1]][i]);
      }
    }
    return res;
  }
}

function strLetters(num, obj, arr = []) {
  let strNum = num.toString();
  let res = createArr(num, obj, arr);
  if (strNum.length - 1 > 1) {
    return strLetters(+strNum.slice(1), obj, res);
  }
  return res;
}
console.log(strLetters(233,keyboard))
// функция возвращает тип обьекта
/**
 *
 * @param {} obj
 * @returns //'prototype'
 */
function whatIsObj(obj) {
  //Object.prototype.toString.call(obj).match(/\[object\s(\w+)]/)[1];
  return {}.toString.call(obj).split(" ")[1].replace("]", "").toLowerCase();
}
whatIsObj("");

// ф-я string => HTML Obj

function strInHtml(str) {
  return new DOMParser().parseFromString(str, "text/html").body;
}


function hi (){
  return 'hello'
}