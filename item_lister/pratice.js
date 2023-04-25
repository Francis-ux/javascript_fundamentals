let form = document.querySelector("#form"),
  item_lists = document.querySelector("#items"),
  filter = document.querySelector("#filter");

// add event
form.addEventListener("submit", add_items);
item_lists.addEventListener("click", remove_item);
filter.addEventListener("keyup", filter_items);

// add items function
function add_items(e) {
  e.preventDefault();
  // new list item
  let new_item = document.querySelector("#item");
  if (new_item.value != "") {
    //create li element
    let li = document.createElement("li");
    //add class name to element
    li.className = "list-group-item";
    //append child and create text node
    li.appendChild(document.createTextNode(new_item.value));
    // create delete button element
    let delete_btn = document.createElement("button");
    // create class name for delete btn
    delete_btn.className = "btn btn-danger btn-sm float-right delete";
    //append and create text node to delete btn
    delete_btn.appendChild(document.createTextNode("X"));
    //append delete btn to li
    li.appendChild(delete_btn);
    //append li to item lists
    item_lists.appendChild(li);
    // reset the new item value to empty
    new_item.value = "";
  }
}
// remove items function
function remove_item(e) {
  // if the event target class name contain class of delete
  if (e.target.classList.contains("delete")) {
    // confirm if the user want to delete the item
    if (confirm("Do you want to really delete this item?")) {
      // get the parent element of the delete class
      li = e.target.parentElement;
      // removing the child node form the parent node
      item_lists.removeChild(li);
    }
  }
}

function filter_items(e) {
  // convert the even target value to lowercase and assign it to a variable
  let text = e.target.value.toLowerCase();
  let items = item_lists.getElementsByTagName("li");
  //convert html collection to array
  Array.from(items).forEach((value) => {
    let item_name = value.firstChild.textContent;
    if (item_name.toLowerCase().indexOf(text) != -1) {
      value.style.display = "block";
    } else {
      value.style.display = "none";
    }
  });
  // console.log(items);
}
