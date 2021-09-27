$("#post").on("click", function(e) {
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
})

$("#clear").on("click", function() {
    var allTodos = document.getElementsByName("todo");
    allTodos.forEach(todo => todo.checked = false);
})

$("#mark").on("click", function() {
    var allTodos = document.getElementsByName("todo");
    allTodos.forEach(todo => todo.checked = true);
})

$("#delete").on("click", function() {
    var list = document.getElementById("list");
    list.innerHTML = "";
})