const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTodo() {
    if (inputBox.value === '') {
        alert('You must write something')
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveTodo();
}


listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveTodo();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveTodo();
    }
}, false)

function saveTodo() {
    if(listContainer){
        localStorage.setItem('data', listContainer.innerHTML);
    }
   
}
function showTodo(){
    const saveData = localStorage.getItem('data');
    if (saveData && listContainer){
       listContainer.innerHTML = saveData;
    }
    

}
showTodo();