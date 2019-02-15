/*
Copyright © Ditpowuh 2018 Copyright Holder All Rights Reserved | All comments are from me
*/

var default_title = "Welcome!";
var default_text = "Hi there! Welcome to Ditpowuh's Online Text Editor made with HTML/CSS/JS. Your saved text will automatically be loaded.";

if (localStorage.length === 0) {
  localStorage.title = default_title;
  localStorage.text = default_text;
}
document.getElementById("heading").innerHTML = localStorage.title;
document.getElementById("content").innerHTML = localStorage.text;

function save() {
  localStorage.title = document.getElementById("heading").innerHTML;
  localStorage.text = document.getElementById("content").innerHTML;
}

function reset() {
  document.getElementById("heading").innerHTML = default_title;
  document.getElementById("content").innerHTML = default_text;
  save();
}

function unbeforeunload {
  return;
}
