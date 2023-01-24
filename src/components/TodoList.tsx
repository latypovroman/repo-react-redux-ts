import React from 'react';
import { useTypedSelector } from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const TodoList: React.FC = () => {
    const { todos, loading, error, page, limit } = useTypedSelector((state) => state.todo);
    const { fetchTodos, setTodoPage } = useActions();
    const pages = [1, 2, 3, 4, 5];

    React.useEffect(() => {
        fetchTodos(page, limit);
    }, [page])

    if (loading) {
        return <h2>Идет загрузка....</h2>
    }

    if (error) {
        return <h2>{`Произошла ошибка: ${error}`}</h2>
    }

    return (
        <div>
            {
                todos.map(todo => <div key={todo.id}>{`${todo.id} - ${todo.title}`}</div>)
            }
            {
                pages.map(p =>
                    <span
                        onClick={() => setTodoPage(p)}
                        key={p}
                        style={{border:p === page ? "2px solid green" : "1px solid gray", padding: 2}}
                    >
                        {p}
                    </span>)
            }
        </div>
    );
};

export default TodoList;