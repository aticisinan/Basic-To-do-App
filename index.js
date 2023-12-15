/*
const addTaskButton = document.querySelector(".addTask");
const todoInput = document.querySelector(".todoInput");
const todosContainer = document.querySelector(".todos")

const toggleComplete = (event) => {
  const parentElement = event.currentTarget;
  event.currentTarget.innerText = "Todo";
  event.currentTarget.parentElement.classList.toggle("completed");
}



const renderTodoItem = (todoText) => {
  const todoItemElement = document.createElement("li")
  todoItemElement.classList.add("todoItem")
  
  const textElement = document.createElement("p")
  textElement.innerText = todoText
  textElement.classList.add("todoText");
  todoItemElement.appendChild(textElement);

  const completeButton = document.createElement("button")
  completeButton.classList.add("completeButton")
  completeButton.innerText = "Complete"
  completeButton.addEventListener("click", toggleComplete)
  todoItemElement.appendChild(completeButton);

  const deleteButton = document.createElement("button")
  deleteButton.classList.add("deleteButton")
  deleteButton.innerText = "Delete"
  todoItemElement.appendChild(deleteButton);


  todosContainer.appendChild(todoItemElement);
  todoInput.value = ""
  todoInput.focus();


}

const addTask = () => {
  if(todoInput.value === ""){
    alert("Lütfen Boş Alanı Doldur");
  }else {
    renderTodoItem(todoInput.value)
  }
}

addTaskButton.addEventListener("click", addTask);
*/














const addButton = document.querySelector(".addTask");
const addInput = document.querySelector(".todoInput");
const finalInput = document.querySelector(".todos");



const removeItem = (event) => {
  finalInput.removeChild(event.currentTarget.parentElement);
}

const completeItem = (event) => {
  alert("Tebrikler !!! Görevi Tamamlandiniz!");
  finalInput.removeChild(event.currentTarget.parentElement);
}


const renderGelenMetin = (todoText) => {

  const metinItemElement = document.createElement("li");
  metinItemElement.classList.add("metinItem")

  const metinText = document.createElement("p");
  metinText.innerHTML = todoText
  metinItemElement.appendChild(metinText)

  const yapildiButton = document.createElement("button");
  yapildiButton.innerHTML = "Complete"
  yapildiButton.addEventListener("click", completeItem);
  metinItemElement.appendChild(yapildiButton);
  
  const deletedButton = document.createElement("button");
  deletedButton.innerHTML = "Delete"
  deletedButton.addEventListener("click", removeItem);
  metinItemElement.appendChild(deletedButton);


  finalInput.appendChild(metinItemElement);
  addInput.value = ""
  addInput.focus()
}





const gelenMetin = () => {
  if(addInput.value === ""){
    alert("Lütfen Boş Alanlari Doldurunuz: ");
  } else {
  renderGelenMetin(addInput.value)
  }
}
addButton.addEventListener("click", gelenMetin);

