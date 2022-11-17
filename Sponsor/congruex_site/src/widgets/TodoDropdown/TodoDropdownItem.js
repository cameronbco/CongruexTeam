import React, { useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

export function TodoItems({item}) {
    return (
        <>
            <div><span className='font-semibold'>Title: </span>{item.title}</div>
            <div><span className='font-semibold'>Description: </span>{item.description}</div>
            <div><span className='font-semibold'>Status: </span>{item.isComplete ? "Completed" : "Not Completed"}</div>
        </>
    )
}

export default function TodoDropdownItem({item}) {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <div>
            <div className='task_section' onClick={handleClick}>
                <div className='flex space-x-2 font-bold text-2xl svg-bold p-1 inline-flex items-center rounded-md hover:bg-gray-300 hover:cursor-pointer'> 
                    <div>{item.name}</div>
                    <div>{open ? <AiOutlineUp /> : <AiOutlineDown />}</div>
                </div>
                {open && (
                    <div className='body'>
                        {item.todoListItems.map((item, id) => <TodoItems key={id} item={item} />)}
                    </div>
                )}
            </div>
        </div>
    )
}