const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'item new';
    ul.appendChild(li);
});

const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', e => {
        e.target.remove();
    });
});
ul.addEventListener('click', e => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
})