const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos (){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo (event){
    const li = event.target.parentElement; // 우리가 삭제하고 싶은 내용
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo){
    const li = document.createElement("li"); 
    li.id = newToDo.id;
    const span = document.createElement("span"); 
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span); 
    li.appendChild(button);
    span.innerText = newToDo.text;
    toDoList.appendChild(li); 
}

function handleToDoSubmit (event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObject = {
        text: newToDo,
        id: Date.now()
    }
    toDos.push(newToDoObject);
    paintToDo(newToDoObject);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
// savedToDos 가 null이 될 수 있다. (localStorage가 비어있어서)
if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
