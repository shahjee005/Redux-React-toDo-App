import * as React from 'react';
import { connect } from 'react-redux';
import './dolist.css';

import { addTodo, changeInput, finishTodo, deleteTodo } from '../../action/todoAction';
import Todo from '../Todos/todos';

const mapStateToProps = (state: any) => ({
    todos: [...state.todoReducer.todos],
    input: state.todoReducer.input,
})
const mapDispatchToProps = (dispatch: any) => ({
    onClick: (input: any) => {
        dispatch(addTodo({
            title: input.title,
            done: false,
        }))
    },
    onDelete: (index: number) => {
        dispatch(deleteTodo(index));
    },
    onInput: (value: string) => {
        dispatch(changeInput(value));
    },
    onFinish: (index: number) => {
        dispatch(finishTodo(index));
    }
});

interface props {
    onClick: (input: any) => void;
    onInput: (value: string) => void;
    onDelete: (index: number) => void;
    onFinish: (index: number) => void;
    todos: any;
    input: any;
}

const TodoList = ({ onClick, onInput, onDelete, onFinish, todos, input }: props) => {
    return (
        <div className='todoList'>
            <div className='input'>
                <input type="text" placeholder='Type your text here' value={input.title} onChange={(e: any) => onInput(e.target.value)} />
                <button onClick={() => onClick(input)}>Add </button>
            </div>
            {
                todos.map((todo: any) =>
                    <Todo key={todo.no} onDelete={onDelete} onFinish={onFinish}  {...todo} />
                )
            }
        </div>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList);