console.log('We are connected!');
const lists = document.querySelectorAll('ul');
const items = document.querySelectorAll('.item');
const colons = document.querySelectorAll('.colon');
const buttons = document.querySelectorAll('.deleteBtn');

let isLeft = true;

items.forEach((el) => {
    el.addEventListener('mousedown', (event) => {
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
    });
    el.addEventListener('mouseup', (event) => {
        event.currentTarget.style.transform = 'rotate(0deg) scale(1)';
    });
    lists.forEach((list) => {
        el.addEventListener('dragstart', (event) => {
            el.classList.add('dragging');
        });
        el.addEventListener('dragend', (event) => {
            el.classList.remove('dragging');
            list.style.background = 'white';
            if (list.className == 'overdragged') {
                list.appendChild(el);
            }
        });
    });
});

lists.forEach((list) => {
    list.addEventListener('dragover', (e) => {
        e.preventDefault();
        const draggable = document.querySelector('.dragging');
        list.classList.add('overdragged');
        list.style.background = 'rgb(244, 244, 244)';
        // list.appendChild(draggable);
    });
    list.addEventListener('dragleave', (e) => {
        list.classList.remove('overdragged');
        list.style.background = 'white';
    });
});

// document.addEventListener(
//     'dragover',
//     function (event) {
//         event.preventDefault();
//     },
//     false
// );
// document.addEventListener(
//     'dragenter',
//     function (event) {
//         if (event.target.className == 'colon') {
//             event.target.style.background = 'purple';
//         }
//     },
//     false
// );
// document.addEventListener(
//     'dragleave',
//     function (event) {
//         // reset background of potential drop target when the draggable element leaves it
//         if (event.target.className == 'colon') {
//             event.target.style.background = '';
//         }
//     },
//     false
// );
document.addEventListener('dragend', function (event) {
    event.target;
    event.target.style.transform = 'rotate(0deg) scale(1)';
});

buttons.forEach((el) =>
    el.addEventListener('click', (e) => {
        items.forEach((item) => {
            item.style.transform = 'rotate(0deg) scale(1)';
        });
    })
);
