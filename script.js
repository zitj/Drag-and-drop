console.log('We are connected!');
const lists = document.querySelectorAll('ul');
const items = document.querySelectorAll('.item');
const colons = document.querySelectorAll('.colon');
const buttons = document.querySelectorAll('.deleteBtn');

let isLeft = true;

items.forEach((el) =>
    el.addEventListener('mousedown', (event) => {
        console.log(el.clientWidth);
        console.log(event);
        if (event.clientX >= 750) {
            isLeft = false;
        } else {
            isLeft = true;
        }
        if (isLeft) {
            event.currentTarget.style.transform = 'rotate(-2deg) scale(1.02)';
        } else {
            event.currentTarget.style.transform = 'rotate(2deg) scale(1.02)';
        }
    })
);
items.forEach((el) => {
    el.addEventListener('mouseup', (event) => {
        event.currentTarget.style.transform = 'rotate(0deg) scale(1)';
    });
});

document.addEventListener('dragend', function (event) {
    event.target;
    event.target.style.transform = 'rotate(0deg) scale(1)';
});

buttons.forEach((el) =>
    el.addEventListener('click', (e) => {
        console.log(e.currentTarget);
        items.forEach((item) => {
            item.style.transform = 'rotate(0deg) scale(1)';
        });
    })
);
