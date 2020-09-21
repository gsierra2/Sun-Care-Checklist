
let skinCareItems = [
    {name: 'Broad Spectrum Sunscreen',completed: false},
    {name: 'Sunglasses',completed: false},
    {name: 'Wide Brimmed Hat',completed: false},
    {name: 'Water',completed: false}
]

function getListItem(itemData, index) { 
    
    const completedClass = (itemData.completed) ? 'complete' : 'incomplete'
    return `<li class="${completedClass}" id="${index}">${itemData.name}</li>`
}

function updateList () {
   
    let listItems = skinCareItems.map(getListItem)

    $('ul#skinCareItems').html(listItems)
}

$('button#addbutton').on('click', function() {
   
    let valueItem = $('input#Add_Item').val()

    let newItem = {
        name: valueItem,
        completed:false
    };

    skinCareItems.push(newItem)
    
   updateList();
});

$('button#deletebutton').on('click', function() {
    
    const incompleteSkinCareItems = skinCareItems.filter(function (item){
        
        return !item.completed

    });
    
    skinCareItems = incompleteSkinCareItems;

    updateList();
});


$('ul#skinCareItems').on('click', function(event){
   
    const liClicked = event.target.id

    const previousCompleteState = skinCareItems[liClicked].completed;


    skinCareItems[liClicked].completed = !previousCompleteState;
    
    updateList();
})

updateList();