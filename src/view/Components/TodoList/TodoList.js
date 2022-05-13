import React, { useEffect, useState } from 'react';
import './TodoList.css';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import styled from 'styled-components';
import TodoItem from '../TodoItem/TodoItem';
import AddTaskModal from '../AddTaskModal/AddTaskModal';
import { addNewTask, deletePermanent, deleteTask, getAllTask, getTrashTask, taskComplete } from '../../../utils/function';
import swal from 'sweetalert';

const TodoList = () => {

    // states
    const [allTasks, setAllTasks] = useState(null);
    const [trashList, setTrashList] = useState(null);
    // modal data (add new task)
    const [newTask, setNewTask] = useState({});
    // description box state
    const [editorText, setEditorText] = useState("");

    useEffect(() => {
        const tasks = getAllTask();
        setAllTasks(tasks);
        const trash = getTrashTask();
        setTrashList(trash);
    }, [])

    // task reload after event
    const taskReload = () => {
        const tasks = getAllTask();
        setAllTasks(tasks);

        const trash = getTrashTask();
        setTrashList(trash);
    }


    // get title from modal
    const getTaskTitle = (e) => {
        let task = newTask;
        task.title = e.target.value;
        setNewTask(task);
    }

    // on modal submit
    const handleModalSubmit = (e) => {
        e.preventDefault();

        // set value
        let task = newTask;
        task.id = new Date().getUTCMilliseconds();
        task.description = editorText;
        task.status = 'inProgress'
        setNewTask(task);

        console.log(newTask);
        // set to localstorage
        addNewTask(newTask)

        // reload task
        taskReload();

        // clear text
        setEditorText("");
        e.target.reset();
    }

    // handle update task
    const handleUpdateTask = (id) => {

        // alert for confimation
        swal({
            title: "Are you sure?",
            text: "Once updated, your task will be in completed tab!",
            icon: "warning",
            buttons: true,
            dangerMode: true,

        })
            .then((update) => {

                // confirmation
                if (update) {

                    // update task to ls
                    taskComplete(id);

                    // reload task
                    taskReload();

                    // show notification
                    swal("Poof! You task has been successfully added!.", {
                        icon: "success",
                        buttons: false,
                        timer: 1000
                    });

                } else {
                    // if cancel promp
                    swal("Your task not added yet!", {
                        buttons: false,
                        timer: 1000
                    });
                }
            });
    }

    // handle update task
    const handleDeleteTask = (id) => {

        // alert for confimation
        swal({
            title: "Are you sure?",
            text: "Once deleted, your task will be available in trash!",
            icon: "warning",
            buttons: true,
            dangerMode: true,

        })
            .then((deletd) => {

                // confirmation
                if (deletd) {

                    // delete task to ls
                    deleteTask(id)

                    // reload task
                    taskReload();

                    // show notification
                    swal("Poof! You task has been successfully deleted!.", {
                        icon: "success",
                        buttons: false,
                        timer: 1000
                    });

                } else {
                    // if cancel promp
                    swal("Your task not deleted yet!", {
                        buttons: false,
                        timer: 1000
                    });
                }
            });
    }
    // handle update task
    const handleDeletePermanent = (id) => {

        // alert for confimation
        swal({
            title: "Are you sure?",
            text: "Once deleted, your task will be permanently deleted!",
            icon: "warning",
            buttons: true,
            dangerMode: true,

        })
            .then((deletd) => {

                // confirmation
                if (deletd) {

                    // delete task to ls
                    deletePermanent(id)

                    // reload task
                    taskReload();

                    // show notification
                    swal("Poof! You task has been successfully deleted!.", {
                        icon: "success",
                        buttons: false,
                        timer: 1000
                    });

                } else {
                    // if cancel promp
                    swal("Your task not deleted yet!", {
                        buttons: false,
                        timer: 1000
                    });
                }
            });
    }


    return (
        <Container>
            <Tabs
                focusTabOnClick={false}>

                <TabList>
                    <Tab>All Tasks</Tab>
                    <Tab>Completed</Tab>
                    <Tab>In Progress</Tab>
                    <Tab>Trash</Tab>
                </TabList>

                <TabPanel>
                    {/* all tasks  */}

                    {
                        allTasks ? allTasks.map(item => <TodoItem key={item.id} data={item} handleUpdateTask={handleUpdateTask} handleDeleteTask={handleDeleteTask} handleDeletePermanent={handleDeletePermanent} />) : 'No Task Yet...'
                    }
                </TabPanel>

                <TabPanel>
                    {/* complete tasks  */}

                    {
                        allTasks ? allTasks.map(item => item.status === 'completed' && <TodoItem key={item.id} data={item} handleUpdateTask={handleUpdateTask} handleDeleteTask={handleDeleteTask} handleDeletePermanent={handleDeletePermanent} />) : 'No Task Yet...'
                    }
                </TabPanel>
                <TabPanel>
                    {/* in progress tasks  */}

                    {
                        allTasks ? allTasks.map(item => item.status == 'inProgress' && <TodoItem key={item.id} data={item} handleUpdateTask={handleUpdateTask} handleDeleteTask={handleDeleteTask} handleDeletePermanent={handleDeletePermanent} />) : 'No Task Yet...'
                    }
                </TabPanel>
                <TabPanel>
                    {/* trash list tasks  */}

                    {
                        trashList ? trashList.map(item => <TodoItem key={item.id} data={item} handleUpdateTask={handleUpdateTask} handleDeleteTask={handleDeleteTask} handleDeletePermanent={handleDeletePermanent} />) : 'No Task Yet...'
                    }

                </TabPanel>

            </Tabs>

            <AddTaskModal
                handleModalSubmit={handleModalSubmit}
                getTaskTitle={getTaskTitle}
                editorText={editorText}
                setEditorText={setEditorText} />
        </Container>
    );
};

export default TodoList;


const Container = styled.div`

`;