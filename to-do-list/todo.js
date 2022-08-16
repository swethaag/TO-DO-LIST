let todoele = document.getElementById("taskinfo");
let todolist = document.getElementById("tasklist");
// const btn = document.getElementById("add");

document.getElementById("add").onclick = function () {
  if (todoele.value.length === 0) {
    document.getElementById("error").innerHTML = "Enter a task";
  } else {
    document.getElementById("error").innerHTML = "";
    tasklist.innerHTML =
      tasklist.innerHTML +
      `<div class="task d-flex">
        <div id="work">${todoele.value}</div> 
        <button class="del bg-danger text-white mx-4 my-2">Delete</i></button>
      </div>`;
    let alltasks = document.querySelectorAll(".del");
    for (i = 0; i < alltasks.length; i++) {
      alltasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
    todoele.value = "";
  }
};
