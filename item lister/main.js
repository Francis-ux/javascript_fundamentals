//EXAMINE THE DOCUMENT OBJECT
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title ="Manipulating the DOM";
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

//GET ELEMENTS BY ID

// let headerTitle = document.getElementById('header-title');
// let mainHeader = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = "DOM Manipulation";
// headerTitle.innerText = "Dom Manipulation 2";
// headerTitle.innerHTML = "<h3> Hello </h3>";
// mainHeader.style.borderBottom = "20px solid red";

// GET ELEMENTS BY CLASS NAME;
// let items = document.getElementsByClassName("list-group-item");
// console.log(items);
// items[0].textContent = "This is the first line";
// items[0].style.textTransform = "UpperCase";
// items[0].style.fontWeight = "bold";
// items[0].style.backgroundColor = "yellow";

// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "gray";
// }

// GET ELEMENT BY TAG NAME
// let li = document.getElementsByTagName("li");
// console.log(li);
// li[0].textContent = "This is the first line";
// li[0].style.textTransform = "UpperCase";
// li[0].style.fontWeight = "bold";
// li[0].style.backgroundColor = "yellow";

// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "gray";
// }

// QUERY SELECTOR
// let header = document.querySelector("#main-header");
// header.style.borderBottom = "5px solid red";

// let input = document.querySelector("input");
// input.value = "Hello world";

// let submit = document.querySelector(".col button");
// submit.textContent = "SEND";

// let first_item = document.querySelector(".list-group-item:first-child");
// first_item.style.backgroundColor = "red";

// let last_item = document.querySelector(".list-group-item:last-child");
// last_item.style.backgroundColor = "blue";

// let second_item = document.querySelector(".list-group-item:nth-child(2)");
// second_item.style.color = "red";

// QUERY SELECTOR ALL
let p = document.querySelectorAll("p");
console.log(p);
p[0].textContent = "Add Items to connect to wallet";

let odd = document.querySelectorAll("li:nth-child(odd)");
let even = document.querySelectorAll("li:nth-child(even)");


for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "pink";
  even[i].style.backgroundColor = "skyblue";
}
