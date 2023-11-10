import { useState, useEffect, useReducer } from "react";
import TodoFooter from "./footer/TodoFooter";
import TodoForm from "./form/TodoForm";
import TodoItems from "./items/TodoItems";
import reducer from "./reducer/Reducer";
import API from "../../api/todos"

const TodoList = () => {
    const [todos, dispatch] = useReducer(reducer, []);
    const [text, setText] = useState("")
    const [editId, setEditId] = useState(null)

    const getAllTodos = async () => {
        try {
            const res = await API.get("/todos")
            dispatch({ type: "GET_TODOS", payload: res.data })
        } catch (err) {
            console.error('Error:', err.message);
        }
    }

    const addTodo = async () => {
        try {
            await API.post("/todos",
                dispatch({
                    type: "ADD_TODO",
                    payload: { text: text }
                }))
        } catch (err) {
            console.error('Error:', err.message)
        }
    }

    const deleteTodo = async (todo) => {
        try {
            await API.delete(`/todos/${todo.id}`);
            dispatch({
                type: "DELETE_TODO",
                payload: todo.id
            });
            await getAllTodos()
        } catch (err) {
            console.error('Error:', err.message)
        }
    }

    useEffect(() => {
        getAllTodos()
    }, [])

    return (
        <section className="bg-white rounded-lg leading-[3] mt-[7rem] max-w-full">
            <div className="w-[700px]">
                <TodoForm
                    text={text}
                    editId={editId}
                    setEditId={setEditId}
                    setText={setText}
                    onAdd={(todo) => addTodo(todo)}
                />
                <TodoItems
                    todos={todos}
                    onDelete={(todoId) => deleteTodo(todoId)}
                    onChange={(newTodo) => dispatch({ type: "CHECK_TODO", payload: newTodo })}
                />
                <TodoFooter
                    todos={todos}
                    onClearCompleted={() => dispatch({ type: "CLEAR_COMPLETED" })}
                />
            </div>
        </section>
    );
};

export default TodoList;
