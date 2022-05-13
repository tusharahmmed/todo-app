// add new task
const addNewTask = (data) => {
    let updatedTasks = [];
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // add new task
    updatedTasks = [...tasks, data];

    // set localstorage
    const updatedJson = JSON.stringify(updatedTasks);
    localStorage.setItem("tasks",updatedJson);
}

// get all task
const getAllTask = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    
    return tasks;
}
// get all task
const getTrashTask = () => {
    const tasks = JSON.parse(localStorage.getItem('trashList'));
    
    return tasks;
}


// update status
const taskComplete = (id) => {
    console.log(id);

    const allTasks = getAllTask();

    allTasks.forEach(item => {
        if(item.id == id){
            item.status = 'completed'
        }
    });

    // set localstorage
    const updatedJson = JSON.stringify(allTasks);
    localStorage.setItem("tasks",updatedJson);
}

// delete task item
const deleteTask = (id) => {

    const allTasks = getAllTask();

    const result = allTasks.filter(item => item.id !== id);
    const deletedItem = allTasks.filter(item => item.id == id);
    deletedItem[0].isTrash = true;
    
    // update tasklist localstorage
    const updatedJson = JSON.stringify(result);
    localStorage.setItem("tasks",updatedJson);

    // set to trash list
    let updatedTrash = [];
    let trashList = getTrashTask();

    updatedTrash = [...trashList, ...deletedItem]

    // update trash list localstorage
    const updatedTrashJson = JSON.stringify(updatedTrash);
    localStorage.setItem("trashList",updatedTrashJson);
}

// permanently delete item

const deletePermanent = (id) => {

const allTasks = getTrashTask();

const result = allTasks.filter(item => item.id !== id);

// update tasklist localstorage
const updatedJson = JSON.stringify(result);
localStorage.setItem("trashList",updatedJson);
}

export {
    addNewTask,
    getAllTask,
    taskComplete,
    deleteTask,
    getTrashTask,
    deletePermanent
}