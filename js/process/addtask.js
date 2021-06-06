let selected_color = ""
function addCategory(){

    const task_description = document.getElementById('task-description').value
    const category = document.getElementById('category').value
    const date = document.getElementById('date').value
    const time = document.getElementById('time').value

    console.log(task_description)
    console.log(category)
    console.log(date)
    console.log(time)
}
function setColor(index){
    selected_color = colors[index]
}
function editCategory(){
    
}