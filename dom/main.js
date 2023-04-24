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
// let p = document.querySelectorAll("p");
// console.log(p);
// p[0].textContent = "Add Items to connect to wallet";

// let odd = document.querySelectorAll("li:nth-child(odd)");
// let even = document.querySelectorAll("li:nth-child(even)");

// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "pink";
//   even[i].style.backgroundColor = "skyblue";
// }

// TRAVERSING THE DOM

let item_list = document.querySelector(".list-group");
// parentNode
// console.log(item_list.parentNode);
// item_list.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(item_list.parentNode.parentNode.parentNode);

// parentElement
// console.log(item_list.parentNode);
// item_list.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(item_list.parentElement.parentElement.parentElement);

// childNodes
// console.log(item_list.childNodes);

// children
// console.log(item_list.children);
// item_list.children[0].style.backgroundColor = "red";

//firstElementChild
// console.log(item_list.firstElementChild);
// item_list.firstElementChild.textContent ="Hello world";

//lastElementChild
// console.log(item_list.lastElementChild.textContent = "Hello 4");
//nextElementSibling
// console.log(item_list.nextElementSibling);
//previousElementSibling
// console.log(item_list.previousElementSibling);
// item_list.previousElementSibling.style.color = "#f4f4f4";
//Create Elements
// let new_div = document.createElement("div");
// new_div.className = "sandra";
// new_div.id = "micheal";
// new_div.setAttribute("title","love");
// new_div_text = document.createTextNode("Hello world");
// new_div.appendChild(new_div_text);
// let container = document.querySelector(".container");
// let span =  document.querySelector("container span");

// new_div.style.fontSize= "50px";
// new_div.style.color="red";
// console.log(new_div);

// container.insertBefore(new_div,span);

// Event listeners

// let button = document.querySelector("#button");
// button.addEventListener("click", button_clicked);

// function button_clicked(e) {
//   //target
//   //   console.log(e);
//   //   console.log(e.target);
//   //   console.log(e.target.id);
//   //   console.log(e.target.className);
//   //   console.log(e.target.classList);
//   //type of event
//   //   console.log(e.type);
//   //position of the mouse from the window
//   //   console.log(e.clientX);
//   //   console.log(e.clientY);
//   //   position of the mouse from the actual element that we inside of
//   //   console.log(e.offsetX);
//   //   console.log(e.offsetY);
//   // keyboard holing down keys
//   console.log(e.ctrlKey);
//   console.log(e.shiftKey);
//   console.log(e.altKey);
// }

// let button = document.querySelector("#button");
// let box = document.querySelector("#box");
// let output = document.querySelector("#output");
// button.addEventListener("click",run_event); //click
// button.addEventListener("dblclick",run_event); //double click
// button.addEventListener("mousedown",run_event);
// button.addEventListener("mouseup",run_event); //click on release
// box.addEventListener("mouseenter",run_event);
// box.addEventListener("mouseleave",run_event);

// box.addEventListener("mouseover",run_event);
// box.addEventListener("mouseout",run_event);

// box.addEventListener("mousemove", run_event);

// function run_event(e) {
//   //   console.log("EVENT TYPE " + e.type);
// //   console.log(`EVENT TYPE: ${e.type}`);
// //   output.innerHTML = `<h3>MouseX:${e.offsetX}</h3><h3> MouseY:${e.offsetY} </h3>`;
// //   box.style.backgroundColor = `rgb(${e.offsetY},${e.offsetY},${
// //     e.clientY + e.clientX
// //   })`;
// //   document.body.style.backgroundColor = `rgb(${e.offsetY},${e.offsetY},${
// //    e.clientY + e.clientX
// //  })`;
// }

// keyboard
let item_input = document.querySelector("input[type='text']");
let form = document.querySelector("form");
let select = document.querySelector("select");
// item_input.addEventListener("keydown", run_event);
// item_input.addEventListener("keyup", run_event);
// item_input.addEventListener("keypress", run_event);
// item_input.addEventListener("focus", run_event);
// item_input.addEventListener("blur", run_event);

// item_input.addEventListener("cut", run_event);
// item_input.addEventListener("paste", run_event);
// select.addEventListener("change", run_event);
form.addEventListener("submit",run_event);
function run_event(e) {
  e.preventDefault();
  console.log(`EVENT TYPE: ${e.type}`);
//   console.log(e.target.value);
  //   output.innerHTML = `<h3>MouseX:${e.offsetX}</h3><h3> MouseY:${e.offsetY} </h3>`;
  //   box.style.backgroundColor = `rgb(${e.offsetY},${e.offsetY},${
  //     e.clientY + e.clientX
  //   })`;
  //   document.body.style.backgroundColor = `rgb(${e.offsetY},${e.offsetY},${
  //    e.clientY + e.clientX
  //  })`;
}
