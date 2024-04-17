const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask()
{
    if(inputBox.value=='')
    {
        alert("Nothing todo?") // if nothing has types in the bar
    }
    else
    {
        let li = document.createElement("li") // to create a list
        li.innerHTML = inputBox.value; // to add the task written in the bar
        listContainer.appendChild(li); // to add the list to the list container
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = ""; // to delete the task written 
    saveData();
}
    listContainer.addEventListener("click", function(e){

    if(e.target.tagName == "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

