type TaskProps = {
  name: string;
  status: boolean;
};

const tasks: TaskProps[] = JSON.parse(localStorage.getItem("tasks") || "[]");
const newtaskInput = document.querySelector(
  "#newtask-input"
) as HTMLInputElement;
const tasksContainer = document.querySelector(
  "#tasks-container"
) as HTMLElement;
const addButton = document.querySelector("#newtask-button");

function addNewTask() {
  if (newtaskInput.value.trim()) {
    const newTask: TaskProps = {
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

  tasks.forEach((task, index) => {
    const newChild = document.createElement("li");

    // div de marcação
    const checkTaskDiv = document.createElement("div");
    checkTaskDiv.id = "checkTask";
    checkTaskDiv.className = task.status ? "checked" : "unchecked";
    checkTaskDiv.textContent = task.status ? "✓" : "";

    checkTaskDiv.addEventListener("click", () => {
      task.status = !task.status;
      saveTasksToLocalStorage();
      renderTasks();
    });

    // texto
    const text = document.createElement("p");
    text.textContent = task.name;
    text.className = task.status ? "textChecked" : "textUnchecked";

    // div de exclusão
    const deleteTaskDiv = document.createElement("div");
    deleteTaskDiv.id = "deleteTask";
    deleteTaskDiv.textContent = "X";

    deleteTaskDiv.addEventListener("click", () => {
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

addButton?.addEventListener("click", addNewTask);
