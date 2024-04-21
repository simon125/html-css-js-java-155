/**
 * ZMIENNE
 *
 * var
 *
 *
 * const
 * let
 *
 */

// String imię = 'sfdsdf';
// const imie = "John";
// let nazwisko = "Doe";
// console.log(nazwisko);

// imie="hej";

// nazwisko = "test";
// nazwisko = 123123;

// var test = "test";
// console.log(test);

/**
 * console.log
 *
 * narzędzia deweloperskie
 */

/**
 * typy danych
 *
 * prymitywne:
 * string
 * number
 * boolean
 *
 * undefined
 * null
 *
 * typy referencyjne
 * obiekty
 * tablice
 * funkcje
 *
 */
const zmiennaNumber = 123;
const zmiennaNumber2 = 123.123;

const zmiennaString = "test";
const zmiennaString1 = "test1";
const zmiennaString2 = `połaczony

string: ${zmiennaString}  ${zmiennaNumber2}`;

// po kropce można dostać się do metod lub pól dostępnych na zmiennej - różne
// typy mają różne dostpne metody i pola
// zmiennaString2.

/**
 * funkcje warunkowe
 *
 *
 */

const wiek = 2;

if (wiek >= 18) {
  console.log("Masz więej niż 18 lat");
} else if (wiek < 18 && wiek > 10) {
  console.log("Jesteś nastolatkiem");
} else {
  console.log("masz poniżej 10 lat");
}

/**
 * Zadanie:
 * Napisz warunek który będzie sprawdzał
 * czy zmienna age jest większa niż 18 jeżeli tak wyświetl w konsoli informacje że user jest dorosły
 * w przeciwnym wypadku wyświetl wiadomosc odwrotną
 *
 * dodatkowo sprawdzaj czy wiek ma znaczenie dodając sprawdzenie w warunku zmiennej doesAgeMatter
 */

/**
 * struktury danych
 * obiekty (słowniki) i tablice
 */

// obiekt

const user = {
  name: "Jane",
  lastName: "Doe",
  age: 20,
  isAdult: true,
  hobbies: ["programowanie", "zakupy", "czytanie ksiażek"],
};

// egzotyczny przykład co można w JS
// const arr = [1,2,"asdf",{},true,[[[[[]]]]]];

console.log(user);

// user.age

const user1 = {
  name: "John",
  age: 30,
};

const user2 = {
  name: "John",
  age: 30,
};

const user3 = user1;

console.log(user1 === user2); // false
console.log(user1 === user3); // true

/**
 * Porównywanie obiektów za pomocą JSONa
 *
 * 1) serializacja obiektów do JSONa
 * 2) porównać te 2 JSONy
 */

// const obj1 = {
//   test: 'test'
// }

// const obj2 = {
//   test: 'test'
// }

// JSON.stringify(obj1) === JSON.stringify(obj2);

/**
 * Obiekty są porównywane za pomocą referencji nie jest porównywana struktura
 */

/**
 * Zdanie:
 * Utwórz obiekt (literał obiekt/słownik) user który będzie posiadał
 * następujące pola:
 *
 * name: string
 * lastName: string
 * age: number
 * todos: array of strings
 *
 *
 * Zadanie:
 * Utwórz listę/tablicę obiektów typu user niech lista będzie zawierała 3 elementy/obiekty
 *
 * rezultat możesz wykonsolować za pomocą console.table(users)
 */

const user11 = {
  name: "imie1",
  lastName: "nazwsko1",
  age: 23,
  todos: [],
};
const user22 = {
  name: "imie2",
  lastName: "nazwsko2",
  age: 34,
  todos: [],
};
const user33 = {
  name: "imie3",
  lastName: "nazwsko3",
  age: 54,
  todos: [],
};
const arr = [user1, user2, user3];

console.table(arr);

/**
 * pętle
 *
 * for, while, do while
 *
 * funkcje wyższego rzędu
 *
 * map, filter, forEach
 */

// while(){}

// do{}while();

for (let i = 0; i < 10; i++) {
  console.log("test");
}

const arr1 = [
  {
    name: "imie1",
    lastName: "nazwsko1",
    age: 23,
    todos: [],
  },
  {
    name: "imie2",
    lastName: "nazwsko2",
    age: 34,
    todos: [],
  },
  {
    name: "imie3",
    lastName: "nazwsko3",
    age: 54,
    todos: [],
  },
];

let sumaLat = 0;

for (let i = 0; i < arr1.length; i++) {
  // sumaLat = arr1[i].age + sumaLat;
  sumaLat += arr1[i].age;
}

const sredniaWieku = sumaLat / arr1.length;

console.log(sredniaWieku);

let sumaLat1 = 0;

arr1.forEach((user, index) => {
  console.log(index); // w raze potrzeby w lambdzie przekazanej do forEacha mamy dostęp do:
  // elementu z danego obrotu pętli (1 parametr), idnedxdu z danego obrotu pętli (2 parametr)

  sumaLat1 += user.age;
});

/**
 * Zadanie
 * Przeiteruj się przez tablicę userów
 * i sprawdż czy userzy są dorośli (age > 18) jeżeli tak ustaw nowo dodane pole isAdult na true
 * w przeciwnym wypadku ustaw je na false
 */

const testObj = {
  key1: "test",
};
// edycja istniejącej wartości
testObj.key1 = "testtets";
// sposób 1: dodanie klucza do obiektu z jednoczensym przypisaniem wartości
testObj.key2 = 123;
console.log(testObj);

// sposób 2: dodanie klucza do obiektu z jednoczensym przypisaniem wartości
testObj["key3"] = true;
console.log(testObj);

const u1 = {
  name: "Bill",
  lastName: "Cosby",
  age: 13,
};

const u2 = {
  name: "Bill",
  lastName: "Cosby",
  age: 23,
};

const u3 = {
  name: "John",
  lastName: "Rambo",
  age: 70,
};

const u4 = {
  name: "Janet",
  lastName: "Jackson",
  age: 15,
};

const userzy = [u1, u2, u3, u4];

// userzy.forEach((user) => {
//   if (user.age > 18) {
//     user.isAdult = true;
//   } else {
//     user.isAdult = false;
//   }
// });

userzy.forEach((user) => {
  user.isAdult = user.age > 18;
});

console.table(userzy);

/**
 * funkcje
 *
 * function
 *
 * arrow functions
 */

function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

const suma = addTwoNumbers(10, 20); // 30
console.log(suma);

// const multiplyTwoNumbers = function(){
// }

// Funckja strzałkowa (lamba) z ciałem funkcji
// const multiplyTwoNumbers = (number1, number2) => {
//   return number1 * number2;
// };

// Funckja strzałkowa (lamba) bez ciała funkcji
const multiplyTwoNumbers = (number1, number2) => number1 * number2;

const result = multiplyTwoNumbers(20, 20);

console.log(result);

/**
 * Zadanie:
 * stwórz funkcje isUserAdult zwracająca true lub false w zależności czy user przekazany w parametrze ma age>18
 *
 * ** obsłuż przypadek gdy do funkcji przekazane są nie poprawne dane
 *
 * Zadanie:
 * stwórz funkcje getAvarageAge która przyjmie tablicę użytkowników i zwróci średnią arytmetyczną wieku użytkówników
 *
 *
 * ** Zadanie
 * stwórz funckje getNumbersOfAdultsPerGender która przyjmie tablicę/listę użytkowników i zwróci obiekt
 * z dwoma kluczami numberOfAdultMales i numberOfAdultFemales
 *
 * {
 *    numberOfAdultMales: 25,
 *    numberOfAdultFemales: 12
 * }
 *
 *
 */

function getNumbersOfAdultsPerGender() {
  /**
   * Miejsce na Twój kod
   */
  return {
    numberOfAdultMales: undefined,
    numberOfAdultFemales: undefined,
  };
}
