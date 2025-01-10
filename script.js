// Task Lists
const pendingTasks = document.getElementById("pending-tasks");
const completedTasks = document.getElementById("completed-tasks");

// Add Task Button Event
document.getElementById("add-task-btn").addEventListener("click", addTask);

function addTask() {
  const title = document.getElementById("task-title").value.trim();
  const desc = document.getElementById("task-desc").value.trim();

  if (title === "" || desc === "") {
    alert("Please fill in all fields!");
    return;
  }

  // Create Task Element
  const taskElement = document.createElement("li");
  taskElement.className = "task";
  taskElement.innerHTML = `
    <div>
      <strong>${title}</strong>
      <p>${desc}</p>
      <small>Added: ${new Date().toLocaleString()}</small>
    </div>
    <div>
      <button class="complete-btn">Complete</button>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;

  // Add Event Listeners
  taskElement.querySelector(".complete-btn").addEventListener("click", () => completeTask(taskElement));
  taskElement.querySelector(".edit-btn").addEventListener("click", () => editTask(taskElement));
  taskElement.querySelector(".delete-btn").addEventListener("click", () => taskElement.remove());

  pendingTasks.appendChild(taskElement);
  clearForm();
}

function completeTask(taskElement) {
  // Move to Completed Tasks
  taskElement.querySelector(".complete-btn").remove(); // Remove Complete Button
  taskElement.querySelector(".edit-btn").remove();     // Remove Edit Button
  const timeStamp = taskElement.querySelector("small");
  timeStamp.innerHTML = `Completed: ${new Date().toLocaleString()}`;

  completedTasks.appendChild(taskElement);
}

function editTask(taskElement) {
  // Fetch current details
  const title = taskElement.querySelector("strong").innerText;
  const desc = taskElement.querySelector("p").innerText;

  // Populate form with current task details
  document.getElementById("task-title").value = title;
  document.getElementById("task-desc").value = desc;

  // Remove the task after editing
  taskElement.remove();
}

function clearForm() {
  document.getElementById("task-title").value = "";
  document.getElementById("task-desc").value = "";
}
