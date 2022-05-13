import React from 'react';
import './AddTaskModal.css';
import styled from 'styled-components';
import DescriptionEditor from '../DescriptionEditor/DescriptionEditor';

const AddTaskModal = (props) => {

    const { editorText, setEditorText, handleModalSubmit, getTaskTitle } = props;

    return (

        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title form-title" id="exampleModalLabel">Add Task</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleModalSubmit}>

                            <InputWraper>
                                <Label>Question Title <span>*</span></Label>
                                <input type="text" onBlur={getTaskTitle} required />
                            </InputWraper>

                            <InputWraper>
                                <Label>Details <span>*</span></Label>

                                <span>
                                    <DescriptionEditor editorText={editorText} setEditorText={setEditorText} />
                                    <PostBtn type='submit' data-bs-dismiss="modal" aria-label="Close">Save Task</PostBtn>
                                </span>

                            </InputWraper>

                        </form>
                    </div>
                    {/* <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Send message</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default AddTaskModal;






const InputWraper = styled.div`
    margin-bottom: 30px;

input{
    width: 100%;
    padding: 8px 8px 8px 8px;
    background: var(--background);
    border: none;
    line-height: 24px;
    color: var(--theme-secondary);
    border-radius: 2px;

    &:focus{
        border: none;
        outline: none;
        
    }
}

`;
const Label = styled.label`
    margin-bottom: 10px;
    display: inline-block;
    color: var(--font-secondary);
    span{
        color: var(--theme-primary);
    }
`;


const PostBtn = styled.button`
    width: 100%;
    text-align: center;
    background: var(--theme-primary);
    color: #fff;
    border: none;
    padding: 10px 0px;
    margin-top: 20px;
    border-radius: 2px;
    font-weight: 600;
    cursor: pointer;
    font-size: 16px;
    
`;