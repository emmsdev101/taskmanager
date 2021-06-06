function category_item(props){
    var category_item = document.createElement('div');     
    var category_title = document.createElement('p');     
    var button_edit =  document.createElement('button');
    var button_del =  document.createElement('button');
    var pencil_icon = document.createElement("i");
    var del_icon = document.createElement("i");
    var category_button = document.createElement('div')

    // adding class to elements
    category_item.className += "category-item";
    pencil_icon.className += "fas fa-pencil-alt fa-sm";
    del_icon.className += "fas fa-trash fa-sm";
    category_button.className += "category-item-button"

    // adding id to elements
    category_title.id ="category-title"
    // adding content to element
    category_title.innerHTML = props.title;
    category_title.style.backgroundColor = props.color


    // grouping elements
    button_edit.appendChild(pencil_icon)
    button_del.appendChild(del_icon)

    category_button.appendChild(button_edit)
    category_button.appendChild(button_del)

    category_item.appendChild(category_title)
    category_item.appendChild(category_button)

    // adding events

    button_del.addEventListener('click',function(ev){
        category_item.remove()
    })
    button_edit.addEventListener('click',function(ev){
        isEdit = true
    })
    button_edit.setAttribute('data-target','#add-category-modal')
    button_edit.setAttribute('data-toggle', 'modal')





    return category_item
}