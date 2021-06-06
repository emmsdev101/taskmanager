function taskItem(content){
    var task_item = document.createElement('div')
    var task_item_inner = document.createElement('div')
    var task_decription = document.createElement('div')
    var task_item_heading = document.createElement('h6')
    var task_item_description = document.createElement('p')
    var task_menu = document.createElement('div')
    var delete_icon = document.createElement('i')
    var task_category = document.createElement('h1')

    task_item.className += "task-item"

    task_item_inner.className += "task-item-inner" 
    task_decription.className += "task-description"
    task_item_heading.className += "task-item-heading"
    task_item_description.className += "task-item-description"
    task_menu.className += "task-menu"
    delete_icon.className += "fa fa-ellipsis-v"
    task_category.className += 'task-category'

    task_decription.appendChild(task_item_heading)
    task_decription.appendChild(task_item_description)
    task_menu.appendChild(delete_icon)

    task_item.appendChild(task_category)
    task_item.appendChild(task_menu)  
    task_item_inner.appendChild(task_decription)
      

    task_item.appendChild(task_item_inner)

    task_item_heading.innerHTML = content.heading
    task_item_description.innerHTML = content.description
    task_category.innerHTML += 'B'
    return task_item
} 
    
//     <div class="task-item">
//     <input type="checkbox" class="item-mark" name="" id="">
//     <div class="task-item-inner">
//         <div class="task-description">
//             <h6 class="task-item-heading">10 AM</h6>
//             <p class="task-item-description">MEETING WITH NEW INVESTOR</p>
//         </div>
//         <div class="task-menu">
//             <i class="fa fa-times"></i>
//         </div>
//     </div>
// </div>
// }