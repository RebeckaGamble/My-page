import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    });

    const handleChange = e => {
        setInput(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
        {props.edit ? ( 
        <>
            <input 
                placeholder="Update your item" 
                value={input} name="text" 
                onChange={handleChange} 
                type="text" 
                ref={inputRef} 
                className='todo-input edit' 
            />
            <button onClick={handleSubmit} className='todo-button edit'>Uppdatera</button>
        </>
        ) : ( 
        <>
            <input 
                placeholder="Lägg till en syssla"
                value={input} name="text"
                onChange={handleChange}
                type="text" 
                className='todo-input' 
                ref={inputRef} 
            />
            <button onClick={handleSubmit} className='todo-button'>Lägg till</button>
        </>
        )
        }
    </form>
  )
}

export default TodoForm