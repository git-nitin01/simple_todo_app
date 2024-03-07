import { useState, useEffect, useRef } from 'react';

const AddInput = ({todos, setTodos}) => {
    const [isClicked, setIsClicked] = useState(false)
    const [count, setCount] = useState(0)
    const inputRef = useRef(null)

    useEffect(() => {
        if(isClicked && inputRef.current.value) {
            setCount(count + 1)
            setTodos([...todos, {
                key: count,
                todo: inputRef.current.value
            }])
            setIsClicked(false)
        }
    }, [isClicked])

    const handleAddClick = () => {
        setIsClicked(true)
    }

    return (
        <>
            <input type="text" ref={inputRef}/>
            <button onClick={handleAddClick}>
                +
            </button>
        </>
    )
}

export default AddInput