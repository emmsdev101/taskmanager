let Tasks = []

const api_url = 'http://localhost:4000/task'
window.onload = function(){
    renderTasks()
    initViews()
   
}
const initViews = ()=> {
    
}
const fetchTasks = async ()=>{
    const data = await fetch(api_url + '/category/Work')
    if (data.ok){
        const tasks = await data.json()
        return tasks
    }else{
        console.log(data.status)
        return false
    }
   
}
const renderTasks = async()=>{
    const TaskView = document.getElementById('task-list-view')
    const date = new Date()
    const formatted_date = date.getFullYear() + '-' + ('0'+(date.getMonth()+1)).slice(-2) + '-' + ('0'+date.getDate()).slice(-2)
    Tasks =  await fetchTasks()
    Tasks.forEach(task => {
        const task_data = {
            heading: task.task_date,
            description:task.description,
            category:task.category
        }
        const task_item_view = taskItem(task_data)
        TaskView.appendChild(task_item_view)
    });
}
