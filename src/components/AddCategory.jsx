import React from 'react'
import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('')
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const newInputValue = inputValue.trim();

        if(newInputValue === 0) return;
        onNewCategory(newInputValue);
        setInputValue('');
    }
    
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifts"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
