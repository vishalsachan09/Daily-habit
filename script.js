let habits = JSON.parse(localStorage.getItem("habits")) || [];

function renderHabits() {
  const list = document.getElementById("habitList");
  list.innerHTML = "";
  habits.forEach((habit, index) => {
    const li = document.createElement("li");
    li.className = habit.done ? "done" : "";
    li.innerHTML = `
      <span onclick="toggleDone(${index})">${habit.name}</span>
      <button onclick="deleteHabit(${index})">❌</button>
    `;
    list.appendChild(li);
  });
}

function addHabit() {
  const input = document.getElementById("habitInput");
  if (input.value.trim() !== "") {
    habits.push({ name: input.value, done: false });
    input.value = "";
    saveAndRender();
  }
}

function deleteHabit(index) {
  habits.splice(index, 1);
  saveAndRender();
}

function toggleDone(index) {
  habits[index].done = !habits[index].done;
  saveAndRender();
}

function saveAndRender() {
  localStorage.setItem("habits", JSON.stringify(habits));
  renderHabits();
}

renderHabits();
