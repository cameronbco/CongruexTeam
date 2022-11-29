import React, { useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Divider } from '@mui/material';

function TodoItems({item, itemNum}) {
    return (
        <>
            <div><span className='font-semibold'>Title: </span>{item.title}</div>
            <div><span className='font-semibold'>Description: </span>{item.description}</div>
            <div><span className='font-semibold'>Status: </span>{item.isComplete === false ? <CheckBoxOutlineBlankIcon /> : <CheckBoxIcon />}</div>
            {/* add divider if element is not last */}
            {item.id + 1 !== itemNum ? <Divider /> : null}
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
            <div className='task_section'>
                <div onClick={handleClick} className='w-ful space-x-2 font-bold text-2xl inline-flex p-1 content-center items-center rounded-md hover:bg-gray-300 hover:cursor-pointer'> 
                    <div>{item.name}</div>
                    <div>{open ? <AiOutlineUp /> : <AiOutlineDown />}</div>
                </div>
                {open && (
                    <div className='body'>
                        {item.todoListItems.map((items, id) => 
                            <TodoItems key={id} item={items} itemNum={item.todoListItems.length}/>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}