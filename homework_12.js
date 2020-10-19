"use strict";

let main = document.getElementById("main-container");
let list = document.getElementById("lists");
let input = document.getElementById("userInput");
let toDo = document.getElementById("toDoList");
let done = document.getElementById("doneList");
let rejected = document.getElementById("rejectedList");
let confirm = document.getElementById("btn-confirm");
let cancel = document.getElementById("btn-cancel");
let ulFirst = document.getElementById("first");
let ulSecond = document.getElementById("second");
let ulThird = document.getElementById("third");
let checked = document.getElementById("checkbox");
var templateDone = document.getElementById("templateDone");
var templDoneHTML = templateDone.innerHTML;
var listHTMl = "";

console.log(templateDone);
console.log(templDoneHTML);

function confirmFunc() {
  if (input != "" && input != null) {
    const newLi = document.createElement("li");
    newLi.innerHTML = `<label>${input.value}<input type="checkbox" id="checkbox"/><button class="reject">&#10007;</button>
    </label>`;
    ulFirst.appendChild(newLi);
    document.getElementById("userInput").value = "";
  }
}

function cancelFunc() {
  document.getElementById("userInput").value = "";
}

input.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "Enter":
      confirmFunc();
      break;
    case "Escape":
      cancelFunc();
      break;
  }
});

confirm.addEventListener("click", confirmFunc);

cancel.addEventListener("click", cancelFunc);

list.onclick = function transferToDone(event) {
  let target = event.target;
  if (target.checked) {
    listHTMl += templDoneHTML.replace(
      "{{newLi}}",
      target.closest("li").innerHTML
    );
    list.innerHTML += listHTMl;
  }
};
