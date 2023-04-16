let pass = document.querySelector("#password"),
  msg = document.querySelector("#message"),
  str = document.querySelector("#strength"),
  form = document.querySelector("form"),
  btn = document.querySelector("#btn");

pass.addEventListener("input", password_strength);

function password_strength() {
  if (pass.value.length > 0) {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }

  if (pass.value.length < 4) {
    set_strength_msg("weak");
    set_password_border_color("red");
    set_message_color("red");
  } else if (pass.value.length >= 4 && pass.value.length < 8) {
    set_strength_msg("medium");
    set_password_border_color("yellow");
    set_message_color("yellow");
  } else if (pass.value.length >= 8) {
    set_strength_msg("strong");
    set_password_border_color("green");
    set_message_color("green");
  }
}
function set_strength_msg(msg) {
  str.innerHTML = msg;
}
function set_password_border_color(color) {
  pass.style.borderColor = color;
}
function set_message_color(color) {
  msg.style.color = color;
}
