var tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
var newtaskInput = document.querySelector("#newtask-input");
var tasksContainer = document.querySelector("#tasks-container");
var addButton = document.querySelector("#newtask-button");
function addNewTask() {
    if (newtaskInput.value.trim()) {
        var newTask = {
            name: newtaskInput.value,
            status: false,
        };
        tasks.push(newTask);
        newtaskInput.value = "";
        saveTasksToLocalStorage();
        renderTasks();
    }
}
function renderTasks() {
    tasksContainer.innerHTML = "";
    tasks.forEach(function (task, index) {
        var newChild = document.createElement("li");
        // div de marcação
        var checkTaskDiv = document.createElement("div");
        checkTaskDiv.id = "checkTask";
        checkTaskDiv.className = task.status ? "checked" : "unchecked";
        checkTaskDiv.textContent = task.status ? "✓" : "✗";
        checkTaskDiv.addEventListener("click", function () {
            task.status = !task.status;
            saveTasksToLocalStorage();
            renderTasks();
        });
        // texto
        var text = document.createElement("p");
        text.textContent = task.name;
        text.classList.add(task.status ? "textChecked" : "textUnchecked");
        // div de exclusão
        var deleteTaskDiv = document.createElement("div");
        deleteTaskDiv.id = "deleteTask";
        deleteTaskDiv.textContent = "X";
        deleteTaskDiv.addEventListener("click", function () {
            tasks.splice(index, 1); //
            saveTasksToLocalStorage();
            renderTasks();
        });
        newChild.appendChild(checkTaskDiv);
        newChild.appendChild(text);
        newChild.appendChild(deleteTaskDiv);
        tasksContainer.appendChild(newChild);
    });
}
function saveTasksToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
renderTasks();
addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener("click", addNewTask);
