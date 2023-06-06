const modal = document.getElementById('container');
const btn = document.getElementById('btn');
const span = document.getElementsByClassName('close')[0];

btn.addEventListener('click', () => {
    modal.style.display = 'block';
})

span.addEventListener('click', () => {
    modal.style.display = 'none';
})