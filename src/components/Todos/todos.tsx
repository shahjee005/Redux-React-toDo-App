import * as React from 'react';
import './todos.css';

interface props {
    no: number;
    title: string;
    done: boolean;
    onDelete: (index: number) => void;
    onFinish: (index: number) => void;
}

const Todo = (props: props) => {
    console.log(props.done)
    const done = (props.done) ? 'todo done' : 'todo'
    return (
        <div className={done}>
            <div className='block no'>{`Task.${props.no}`}</div>
            <div className='block checkbox'>
                <input type="checkbox" defaultChecked={props.done} onChange={() => props.onFinish(props.no)} />
            </div>
            <div className='block title'>{`${props.title}`}</div>
            <div className='block delete'>
                <div onClick={() => props.onDelete(props.no)}>
                    ❌
                </div>
            </div>
        </div>
    )
}

export default React.memo(Todo);