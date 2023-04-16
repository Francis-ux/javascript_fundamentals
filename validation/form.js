// console.log(window);
//  console.log(document.querySelectorAll('.form-group'));
// let items = document.querySelectorAll('.form-group');
// items.forEach((items)=>{
//    console.log(items);
// })
// let mode = true;
// let btn = document.querySelector(".btn");
// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (mode == true) {
//     document.querySelector(".form").classList.add("dark");
//     mode = false;
//   } else if (mode == false) {
//     document.querySelector("form").classList.remove("dark");
//   }
//   mode = true;
// });
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let form = document.querySelector("#form");
let btn = document.querySelector(".btn");
let msg = document.querySelector(".msg");
let userList = document.querySelector(".list");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (username.value == "" || password.value == "") {
    msg.classList.add("error-msg");
    msg.innerHTML = "Input cannot be empty";
    setTimeout(() => {
      msg.remove();
    }, 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${username.value}: ${password.value}`)
    );
    userList.appendChild(li);
  }
}
