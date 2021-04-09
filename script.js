console.log('We are connected!');
const lists = document.querySelectorAll('ul');
const items = document.querySelectorAll('.item');
const colons = document.querySelectorAll('.colon');
const buttons = document.querySelectorAll('#deleteBtn');

console.log(items);
console.log(lists);
console.log(colons);
console.log(buttons);

items.forEach((el) =>
    el.addEventListener('click', (e) => {
        console.log(e.currentTarget.id);
    })
);
buttons.forEach((el) =>
    el.addEventListener('click', (e) => {
        console.log(e.currentTarget);
    })
);
