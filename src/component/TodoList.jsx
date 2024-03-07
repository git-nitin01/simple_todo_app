import Todo from "./Todo"

const TodoList = ({todos}) => {
    return (
        <>
            <ul>
                {todos.map(({key, todo}) => (
                    <Todo key={key} todo={todo}/>
                ))}
            </ul>
        </>
    )
}

export default TodoList