import { useAppDispatch } from '../hooc';
import {toggleComplete, removeTodo} from '../store/todoSlice';
import {FC} from "react";

interface TodoItemProps {
    id:string
    title:string
    completed:boolean
}



const TodoItem:FC<TodoItemProps> = ({ id, title, completed }) => {
    const dispatch = useAppDispatch();

    return (
        <li>
            <input
                type='checkbox'
                checked={completed}
                onChange={() => dispatch(toggleComplete( id ))}
            />
            <span>{title}</span>
            <span onClick={() => dispatch(removeTodo(id))}>&times;</span>
        </li>
    );
};

export default TodoItem;