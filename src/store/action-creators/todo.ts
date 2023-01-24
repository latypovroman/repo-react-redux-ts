import { TodoAction, TodoActionTypes } from "../../types/todo";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({ type: TodoActionTypes.FETCH_TODOS});
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos/", {
                params: { _page: page, _limit: limit }
            });
            dispatch({ type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data });
        } catch(err) {
            dispatch({
                type: TodoActionTypes.FETCH_TODOS_ERROR,
                payload: `Ошибка при загрузке списка дел ${err}`
            })
        }

    }
}

export function setTodoPage(page: number): TodoAction {
    return { type: TodoActionTypes.SET_TODOS_PAGE, payload: page }
}