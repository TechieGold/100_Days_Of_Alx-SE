const inputBox = document.getElementById('input-box') as HTMLInputElement;
const listContainer = document.getElementById('list-container') as HTMLElement;

function addTodo(): void {
    if (inputBox.value === '') {
        alert('You must write something');
    } else {
        const currentDate = new Date();
        const formattedDate = formatDate(currentDate);
        const formattedTime = formatTime(currentDate);
        
        let li = document.createElement('li');
        li.innerHTML = `${inputBox.value} - ${formattedTime} - ${formattedDate}`;
        listContainer.appendChild(li);
        
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
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement!.remove();
        saveTodo();
    }
}, false);

function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

function formatTime(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

function saveTodo(): void {
    if (listContainer) {
        localStorage.setItem('data', listContainer.innerHTML);
    }
}

function showTodo(): void {
    const saveData = localStorage.getItem('data');
    if (saveData && listContainer) {
        listContainer.innerHTML = saveData;
    }
}

showTodo();
