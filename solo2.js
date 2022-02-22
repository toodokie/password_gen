// let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let numbers = "0123456789";
// let symbols = "!@#$%^&*_-+=";

const password_ele = document.getElementById("pwd_txt");
const password_ele_2 = document.getElementById("pwd_txt2");
const password_ele_3 = document.getElementById("pwd_txt3");
const password_ele_4 = document.getElementById("pwd_txt4");

var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZacdefghijklnopqrstuvwxyz0123456789";
const special_chars = "@#$%^&*";
const generate = document.getElementById("generate");

const clipboard = document.getElementById("clipboard");
const clipboard2 = document.getElementById("clipboard2");
const clipboard3 = document.getElementById("clipboard3");
const clipboard4 = document.getElementById("clipboard4");

var pwd_length = document.getElementById("slider");

// 1 password
generate.addEventListener("click", () => {
  let password = "";
  var checked = document.getElementById("checkbox").checked;
  var final_string = string;
  console.log(checked);
  if (checked) {
    final_string += "@#$%^&*";
  }
  for (var i = 0; i < pwd_length.value; i++) {
    let pwd = final_string[Math.floor(Math.random() * final_string.length)];
    password += pwd;
  }
  password_ele.innerText = password;
  final_string = string;
});
// 2 password
generate.addEventListener("click", () => {
  let password = "";
  var checked = document.getElementById("checkbox").checked;
  var final_string = string;
  console.log(checked);
  if (checked) {
    final_string += "@#$%^&*";
  }
  for (var i = 0; i < pwd_length.value; i++) {
    let pwd = final_string[Math.floor(Math.random() * final_string.length)];
    password += pwd;
  }
  password_ele_2.innerText = password;
  final_string = string;
});
// 3 password
generate.addEventListener("click", () => {
  let password = "";
  var checked = document.getElementById("checkbox").checked;
  var final_string = string;
  console.log(checked);
  if (checked) {
    final_string += "@#$%^&*";
  }
  for (var i = 0; i < pwd_length.value; i++) {
    let pwd = final_string[Math.floor(Math.random() * final_string.length)];
    password += pwd;
  }
  password_ele_3.innerText = password;
  final_string = string;
});

// 4 password
generate.addEventListener("click", () => {
  let password = "";
  var checked = document.getElementById("checkbox").checked;
  var final_string = string;
  console.log(checked);
  if (checked) {
    final_string += "@#$%^&*";
  }
  for (var i = 0; i < pwd_length.value; i++) {
    let pwd = final_string[Math.floor(Math.random() * final_string.length)];
    password += pwd;
  }
  password_ele_4.innerText = password;
  final_string = string;
});

clipboard.addEventListener("click", () => {
  navigator.clipboard.writeText(password_ele.innerText);
  alert("Password copied to clipboard");
});

clipboard2.addEventListener("click", () => {
  navigator.clipboard.writeText(password_ele_2.innerText);
  alert("Password copied to clipboard");
});

clipboard3.addEventListener("click", () => {
  navigator.clipboard.writeText(password_ele_3.innerText);
  alert("Password copied to clipboard");
});

clipboard4.addEventListener("click", () => {
  navigator.clipboard.writeText(password_ele_4.innerText);
  alert("Password copied to clipboard");
});
