/**
 * DOM przeglądarka interpretuje kod HTML i dostarcza obiekt, który JS jest w stanie odczytywać i modyfikować
 */

/**
 * obiekt document
 */

// document.body  // po kropce możemy dostać wiele pól związanych z naszym dokumentem
// najlepszą formą sprawdzenia co jest dostępne w obiekcie document jest sprawdzenie go w konsolo deweloperskiej w przeglądarce

/**
 * Tworzenie elementu
 *
 * 1) createElement
 *
 * 2) template string (backticki - znaki pojedynczego cudzysłowia po klawiszem esc) + właściwość innerHTML
 *
 */

/**
 * 1 sposób
 */

const divElement = document.createElement("div");

const h2Element = document.createElement("h2");

h2Element.innerText = "Hello world";

const mainElement = document.querySelector("main");

mainElement.appendChild(h2Element);

/**
 * 2 sposób
 */

const superFunckjaLiczaca = () => 1900;

const articleElement = document.createElement("article");

articleElement.innerHTML = `
    <h2>Hello World</h2>
    <p>Test paragraph</p>
    <p>Kwota przelewu: ${superFunckjaLiczaca()}</p>
    <input type="password" />
`;

mainElement.appendChild(articleElement);

/**
 * Pobieranie elementów z dokumentu HTML
 */

// 1) metoda querySelector

// 2) metoda getElementById

/**
 * manipulowanie classami - lista klas jest dostępna pod polem classList
 * dodatkowo można manipulować tymi klasami przy pomocy dużej gamy metod dostępnej też pod tym polem
 */

// divElement.classList.add("super-div");

// divElement.classList.contains('super-div'); // sprawdzanie czy klasa instenieje zwraca true/false

// divElement.classList.replace("super-div", "super-span");

// divElement.classList.remove('super-div')

/**
 * Wstawianie elementu / osadzanie w dokumencie
 *
 * appendChild - metoda dostępna na każdym elemencie HTMLowym/Nodzie
 *
 * innerHTML - pole/właściwosć elementów HTMLowych/Nodów do której mozemy przypisać html napisanego za pomocą stringa
 *
 */

document.body.appendChild(divElement);

/**
 * Usuwanie elementu - metoda remove dostępna na elemencie HTML/Nodzie
 */

// document.body.remove()

/**
 * Eventy, event listnery - interakcja z UI
 */

// document.querySelector('#firstButton')
// eventListera można wywołać bezpośrednio po pobraniu elementu
// document.getElementById('firstButton').addEventListener();

// const firstButton = document.getElementById("firstButton");

// firstButton.addEventListener("click", (event) => {
//   console.log(event);
//   console.log("Click");
//   event.target.parentNode.parentNode.remove();
//   //   event.target.remove();
// });

const usersStaticTable = document.getElementById("usersStaticTable");
// event obiekt reprezentujący co/gdzie/kiedy się zadziało
usersStaticTable.addEventListener("click", (event) => {
  console.log("klik w obrębie tbody");
  // event.target - referencja do klikniętego elementu
  console.log(event.target.classList);

  if (event.target.classList.contains("deleteButton")) {
    // na pewno user klikną w przycisk
    event.target.parentNode.parentNode.remove();
  }
});

const users = [];

const dynamicUserForm = document.getElementById("dynamicUserForm");

dynamicUserForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const user = Object.fromEntries(formData);

  users.push(user);

  const dynamiUsers = document.getElementById("dynamic-users");

  let html = "";

  users.forEach((user) => {
    html =
      html +
      `<tr><td>${user.name}</td><td>${user.lastname}</td><td>${user.age}</td><td></td></tr>`;
  });

  dynamiUsers.innerHTML = html;
  event.clear();
});
