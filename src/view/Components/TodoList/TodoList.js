import React from 'react';
import './TodoList.css';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import styled from 'styled-components';
import TodoItem from '../TodoItem/TodoItem';
import AddTaskModal from '../AddTaskModal/AddTaskModal';

const TodoList = () => {
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
                    {/* recent question  */}
                    {/* {
                        (allPost.length > 0) ? allPost.map(item => <PostItem key={item._id} data={item} />) : ''
                    } */}
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                </TabPanel>

            </Tabs>

            <AddTaskModal />
        </Container>
    );
};

export default TodoList;


const Container = styled.div`

`;