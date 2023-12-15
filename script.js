const BtnElement = document.getElementById('add-new-list-btn')
const InputElement = document.getElementById('input-text')
const ListElement = document.getElementById('list-items')

BtnElement.addEventListener('click', function () {
    const Text = InputElement.value;
    const listItem = document.createElement('li');
    const checkBox = document.createElement('input');
    const TodoText = document.createElement('label');
    listItem.classList.add('list-item')

    checkBox.addEventListener('change', function() {
        if (checkBox.checked) {
            TodoText.textContent = "completed  " + Text
        } else {
            TodoText.textContent = Text;
        }
    })

    TodoText.textContent = Text;
    checkBox.type = 'checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(TodoText);
    ListElement.appendChild(listItem)
    console.log(Text)
})