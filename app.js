// targetting 'add a new todo section - .add class'
const add = document.querySelector('.add');
// telling what todo after 'new todo' added
add.addEventListener('submit', e => {
    e.preventDefault();
    const todo = add.add.value.trim();


});