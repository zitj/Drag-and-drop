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
    list.addEventListener('dragstart', (e) => {
        list.style.background = 'rgb(250, 250, 250)';
    });
    list.addEventListener('dragover', (e) => {
        e.preventDefault();
        list.classList.add('overdragged');
        list.style.background = 'rgb(250, 250, 250)';
    });
    list.addEventListener('dragleave', (e) => {
        list.classList.remove('overdragged');
        list.style.background = 'white';
    });
});

document.addEventListener('dragend', function (event) {
    event.target;
    event.target.style.transform = 'rotate(0deg) scale(1)';
});

buttons.forEach((button) =>
    button.addEventListener('click', (e) => {
        let greatGrandparent = button.parentElement.parentElement.parentElement;
        items.forEach((item) => {
            item.style.transform = 'rotate(0deg) scale(1)';
        });

        if (greatGrandparent.className !== 'deletedItems') {
            document
                .querySelector('.deletedItems')
                .children[1].appendChild(button.parentElement);
        }
        if (greatGrandparent.classList.contains('deletedItems')) {
            document
                .querySelector('.importantList')
                .children[1].appendChild(button.parentElement);
        }
    })
);
