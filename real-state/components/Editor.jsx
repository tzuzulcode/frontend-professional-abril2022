import React, { useCallback } from 'react'
import {createReactEditorJS} from 'react-editor-js'
import Header from "@editorjs/header"

const ReactEditorJS = createReactEditorJS()

export default function Editor({instance}) {

    const tools = {
        header:Header
    }

    const initialize = useCallback((ins)=>{
        console.log(ins)
        instance.current = ins
    },[])
    return (
        <ReactEditorJS onInitialize={initialize} tools={tools}/>
    )
}
