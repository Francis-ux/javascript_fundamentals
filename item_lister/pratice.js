let form = document.querySelector("#form"),
  item_list = document.querySelector("#items"),
  filter = document.querySelector("#filter");

form.addEventListener("submit", add_items);
item_list.addEventListener("click", remove_item);
filter.addEventListener("keyup", filter_items);
function add_items(e) {
  e.preventDefault();
  // new items
  let new_item = document.querySelector("#item");
  //check if the new item input is empty
  if (new_item.value != "") {
    // create li element
    let li = document.createElement("li");
    // add class name to li
    li.className = "list-group-item";
    // append new item to li
    li.appendChild(document.createTextNode(new_item.value));
    // append li to item list
    item_list.appendChild(li);
    // create delete btn
    delete_btn = document.createElement("button");
    // add class name to delete btn
    delete_btn.className = "btn btn-danger btn-sm float-right delete";
    // create text next for delete btn
    delete_btn.appendChild(document.createTextNode("X"));
    // append delete btn to li
    li.appendChild(delete_btn);
  }
}
function remove_item(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Do you want to delete this item?")) {
      li = e.target.parentElement;
      item_list.removeChild(li);
    }
  }
}
function filter_items(e) {
  // console.log(e.target.value.toLowerCase());
  let text = e.target.value.toLowerCase();
  // get all li element by tag name assign it to items;
  let items = item_list.getElementsByTagName("li");
  //covert the li html collection to array
  Array.from(items).forEach((item) => {
    // assign the content from item to item_name
    let item_name = item.firstChild.textContent;
    if (item_name.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
