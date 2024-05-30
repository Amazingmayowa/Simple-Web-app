document.addEventListener('DOMContentLoaded', function() {
    const addItemButton = document.getElementById('addItemButton');
    const itemInput = document.getElementById('itemInput');
    const itemList = document.getElementById('itemList');

    addItemButton.addEventListener('click', function() {
        const newItemText = itemInput.value.trim();
        if (newItemText !== '') {
            const newItem = document.createElement('li');
            newItem.textContent = newItemText;
            itemList.appendChild(newItem);
            itemInput.value = '';
        }
    });

    itemInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addItemButton.click();
        }
    });
});
