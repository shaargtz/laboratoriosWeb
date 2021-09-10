var post = document.getElementById("post");
post.addEventListener("click", postTodo);

var clear = document.getElementById("clear");
clear.addEventListener("click", clearList);

var mark = document.getElementById("mark");
mark.addEventListener("click", markTodo);

var del = document.getElementById("delete");
del.addEventListener("click", deleteTodo);

function postTodo(e) {
    console.log("hola")
    e.preventDefault();

    var todo = document.getElementById("todo");
    var temp = todo.value;
    
    todo.value = "";
    
    var list = document.getElementById("list");
    var div = document.createElement("div");
    var checkbox = document.createElement("input");
    var label = document.createElement("label");

    checkbox.type = "checkbox";
    checkbox.name = "todo";
    label.textContent = temp;

    div.appendChild(checkbox);
    div.appendChild(label);

    list.appendChild(div);
}

function clearList() {
    var allTodos = document.getElementsByName("todo");
    allTodos.forEach(todo => todo.checked = false);
}

function markTodo() {
    var allTodos = document.getElementsByName("todo");
    allTodos.forEach(todo => todo.checked = true);
}

function deleteTodo() {
    var list = document.getElementById("list");
    list.innerHTML = "";
}