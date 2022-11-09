import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineDown } from 'react-icons/ai';
import './dropdownmenu.css';

export default function DropdownMenuItem({item}) {
    const [open, setOpen] = useState(false);

    if (item.childrens) {
        return (
            <div className={open ? 'menu-item open' : 'menu-item'}>
                <div className='menu-title' onClick={() => setOpen(!open)}>
                    <p className='menu-title'>
                        {item.title}
                        <AiOutlineDown/>
                    </p>
                </div>
                <div className='menu-content' style={{ "font-family": "Serif", "margin": "10px"}}>
                    <p className='menu-content-list'>{ item.childrens.map((child, index) => <DropdownMenuItem key={index} item={child} />) }</p>
                </div>
            </div>
        )
    } else {
        return (
            <p>
                {/* this make sure whatever is passed in will have a defualt path
                if one is not specified */}
                <a><Link to={ item.path || '/' }>
                    <span>
                        {item.title}
                    </span>
                </Link></a>
            </p>
        )
    }
}