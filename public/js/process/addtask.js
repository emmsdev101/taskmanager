let selected_color = ""
async function  addCategory (){
    const api_url = "http://localhost:4000/task"

    const task_description = document.getElementById('task-description').value
    const category = document.getElementById('category').value
    const date = document.getElementById('date').value
    const time = document.getElementById('time').value

    const data = await fetch(api_url, {
        method: 'post',
        headers:{
            'Content-type': 'application/json'
        },
        body:JSON.stringify({
            description:task_description,
            category:category,
            task_date:date,
            task_time:time
        })
    })
    if(data.ok){
        alert("Successful")
        console.log(task_description)
        console.log(category)
        console.log(date)
        console.log(time)
        console.log(date+":"+time)
    }else{
        console.log(data.status)
    }
}
function setColor(index){
    selected_color = colors[index]
}
function editCategory(){
    
}