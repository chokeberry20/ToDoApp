let inputBox = document.getElementById('input-box');
let taskContainer = document.getElementById('task-container');
let saveButton = document.getElementById('save-button');

saveButton.addEventListener("click", function () {
    if (inputBox.value === '') {
        alert("Please, provide your task!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskContainer.insertBefore(li, taskContainer.firstChild);
        inputBox.value = '';
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData()
    }
})

taskContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN" || e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        saveData()
    }
})

function saveData(){
    localStorage.setItem('Data', taskContainer.innerHTML);
}

function showData(){
    taskContainer.innerHTML = localStorage.getItem('Data');
}

showData();