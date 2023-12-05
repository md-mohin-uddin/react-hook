import React, { useState } from 'react';

export default function Todo() {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState(null);
    const handleInput = (e) => {
        const input = e.target.value;
        const updateWarning = input.includes('.js') ?
            'you need javascript skill to complete the task.do you have it?' :
            null;
        setTodo(input);
        setWarning(updateWarning);

    }

    return (
        <div>
            <p>{todo}</p>
            <p>
                <textarea name='todo' value={todo} onChange={handleInput}></textarea>
            </p>
            <h3>{warning || 'good choice'}</h3>
        </div>
    );
}
