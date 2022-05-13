import React from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import parse from 'html-react-parser';

const TodoItem = ({ data,handleUpdateTask,handleDeleteTask,handleDeletePermanent }) => {

    const { id, title, description, status } = data;

    let isTrash = data?.isTrash
    console.log(isTrash);

    return (
        <Container>
            <PostDetails>
                <PostHeader>
                    <h2>{title}</h2>
                    <span>
                        {
                            status == 'inProgress' ? <CompleteBtn onClick={()=> handleUpdateTask(id)}>Complete</CompleteBtn> : null
                        }
                        {
                            !isTrash ? <DeleteBtn onClick={()=> handleDeleteTask(id)}>Delete</DeleteBtn> : <DeleteBtn onClick={()=> handleDeletePermanent(id)}>Delete</DeleteBtn>
                        }
                    </span>
                </PostHeader>
                <PostDescription>{parse(`${description}`)}</PostDescription>

               {
                   isTrash ? null :  <PostFooter>

                   {
                       status == 'inProgress' ? <StatsWraper color='var(--theme-primary)'>
                           <FaCheck size={12} /> <span>in progress</span>
                       </StatsWraper> : <StatsWraper color='green'>
                           <FaCheck size={12} /> <span>completed</span>
                       </StatsWraper>
                   }

               </PostFooter>
               }

            </PostDetails>
        </Container>
    );
};

export default TodoItem;



const Container = styled.div`
    margin-bottom: 30px;
    padding: 20px;
    background: var(--background-secondary);
    box-shadow: 0 1px 5px -1px rgb(0 0 0 / 13%);

`;

const PostDetails = styled.div`
    flex: 1;
`;
const PostHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    h2{
        color: var(--theme-secondary);
        size: 22px;
        font-weight: 600;
        transition: .4s;

        &:hover{
            color: var(--theme-primary);
        }
    }

    span{

        button{
            height: 23px;
            padding: 0px 16px;
            font-size: 12px;
            color: #fff;
            border: none;
            cursor: pointer;
        }
    }

    @media (max-width: 992px){
        margin-bottom: 25px;

        h2{
            font-size: 22px;
        }

    }
    @media (max-width: 688px){
        margin-bottom: 25px;

        h2{
            font-size: 19px;
        }
        button{
            margin-top: 3px;
        }

    }
`;

const CompleteBtn = styled.button`
margin-right: 10px;
background: green;
`;
const DeleteBtn = styled.button`
background: var(--theme-secondary);
`;

const PostDescription = styled.p`
    font-size: 15px;
    line-height: 30px;
    color: var(--font-secondary);
    padding-bottom: 30px;
    border-bottom: 2px solid var(--background);
`;
const PostFooter = styled.div`
    display: flex;
    padding-top: 15px; 
`;
const StatsWraper = styled.div`
    margin-right: 20px;
    font-size: 13px;

    color: ${(props) => props.color ? props.color : 'var(--font-secondary)'};
`;