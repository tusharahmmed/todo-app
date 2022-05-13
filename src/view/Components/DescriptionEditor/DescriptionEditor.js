import React from 'react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import styled from 'styled-components';


const DescriptionEditor = (props) => {

    // set text to state
    const setEditorText = props?.setEditorText;
    const editorText = props?.editorText;

    return (
        <EditorWraper>
            <CKEditor
                editor={ClassicEditor}
                data={editorText}
                onChange={(event, editor) => {
                    const data = editor.getData()
                    setEditorText(data);
                }}
            />
        </EditorWraper>
    );
};

export default DescriptionEditor;



const EditorWraper = styled.div`
    margin: 0px;
    padding-bottom: 20px;
`;