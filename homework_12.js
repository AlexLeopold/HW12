"use strict";

let input = document.getElementById("userInput");
let toDo = document.getElementById("toDoList");
let done = document.getElementById("doneList");
let rejected = document.getElementById("rejectedList");
let confirm = document.getElementById("btn-confirm");
let cancel = document.getElementById("btn-cancel");
let ulFirst = document.getElementById("first");
let ulSecond = document.getElementById("second");
let ulThird = document.getElementById("third");
let checked = document.querySelectorAll("checked");
let templDone = document.getElementById("templateDone");
// let btn-reject = document.getElementById("reject");

function confirmFunc() {
  if (input != "" && input != null) {
    const newLi = document.createElement("li");
    newLi.innerHTML = `${input.value}<input type="checkbox" id="checkbox" /><button class="reject">&#10007;</button>
    `;
    ulFirst.appendChild(newLi);
    document.getElementById("userInput").value = "";
  }
}

function enterFunc(event) {
  var x = event.keyCode;
  if (x == 13) {
    confirmFunc();
  }
}

confirm.addEventListener("click", confirmFunc);

cancel.addEventListener("click", () => {
  document.getElementById("userInput").value = "";
});



function transferToDone () {
    
}

// function transferToRejected () {

// }
