let skinCareItems = [
  { name: 'Broad Spectrum Sunscreen', completed: false },
  { name: 'Sunglasses', completed: false },
  { name: 'Wide Brimmed Hat', completed: false },
  { name: 'Water', completed: false },
];

function getListItem(itemData, index) {
  const completedClass = (itemData.completed) ? 'complete' : 'incomplete';
  return `<li class="${completedClass}" id="${index}">${itemData.name}</li>`;
}

function updateList() {
  const listItems = skinCareItems.map(getListItem);

  $('ul#skinCareItems').html(listItems);
}

$('button#addbutton').on('click', () => {
  const valueItem = $('input#Add_Item').val();

  const newItem = {
    name: valueItem,
    completed: false,
  };

  skinCareItems.push(newItem);

  updateList();
});

$('button#deletebutton').on('click', () => {
  const incompleteSkinCareItems = skinCareItems.filter((item) => !item.completed);

  skinCareItems = incompleteSkinCareItems;

  updateList();
});

$('ul#skinCareItems').on('click', (event) => {
  const liClicked = event.target.id;

  const previousCompleteState = skinCareItems[liClicked].completed;

  skinCareItems[liClicked].completed = !previousCompleteState;

  updateList();
});

updateList();
