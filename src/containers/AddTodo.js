import React from 'react';

const AddTodo = () => {
    let input

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
            }}>
                <input />
                <button type="submit">添加按钮</button>
            </form>
        </div>
    )
}

export default AddTodo