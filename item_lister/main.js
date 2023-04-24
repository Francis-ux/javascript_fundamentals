let form = document.querySelector("#form"),
  item_list = document.querySelector("#items"),
  filter = document.querySelector("#filter");

//form submit event
form.addEventListener("submit", add_items);

item_list.addEventListener("click", remove_item);

filter.addEventListener("keyup", filter_items);
//add items
function add_items(e) {
  e.preventDefault();
  //delete event

  // get input value
  let new_item = document.querySelector("#item");
  //create new li element
  let li = document.createElement("li");
  //add class
  li.className = "list-group-item";
  //add text node with input value
  li.appendChild(document.createTextNode(new_item.value));
  // create delete btn
  let delete_btn = document.createElement("button");
  //   add class to delete btn
  delete_btn.className = "btn btn-danger btn-sm float-right delete";
  //append text node
  delete_btn.appendChild(document.createTextNode("X"));
  // append button to li
  li.appendChild(delete_btn);
  //   append li to items list
  item_list.appendChild(li);

  console.log(li);
}
// remove items function
function remove_item(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure you want to delete")) {
      li = e.target.parentElement;
      item_list.removeChild(li);
      // console.log(li);
    }
  }
}

function filter_items(e) {
  // covert text to lower case
  let text = e.target.value.toLowerCase();
  // get list items
  let items = item_list.getElementsByTagName("li");
  //   covert to an array
  Array.from(items).forEach((item) => {
    let item_name = item.firstChild.textContent;
    if (item_name.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
