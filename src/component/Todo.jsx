import React, { useReducer, useState} from 'react'

const initState = {
    edit: false,
    remove: false
}

const reducer = (state, action) => {
    switch(action) {
        case 'edit':
            return {...state, edit: !state.edit}
        case 'remove':
            return {...state, remove: true}
        default:
            return state
    }
}

function Todo({todo}) { 
    const [todoVal, setTodoVal] = useState(todo)
    const [state, dispatch] = useReducer(reducer, initState)

    const inputChangeHandler = (event) => {
        setTodoVal(event.target.value)
    }

    return (
        !state.remove && <li>
            {!state.edit ? <span>{todoVal}</span> : <input type='text' value={todoVal} onChange={inputChangeHandler}/>}
            <button onClick={() => dispatch('edit')}>Edit</button>
            <button onClick={() => dispatch('remove')}>Remove</button>
        </li>
    )
}

export default Todo