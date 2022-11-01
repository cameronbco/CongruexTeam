import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineDown } from 'react-icons/ai';
import './dropdownmenu.css';

export default function DropdownMenuItem({item}) {
    const [open, setOpen] = useState(false);

    if (item.childrens) {
        return (
            <div className={open ? 'menu-item open' : 'menu-item'}>
                <div className='menu-title'>
                    <p className='menu-title' onClick={() => setOpen(!open)}>
                        <span>
                            {item.title}
                        </span>
                        <AiOutlineDown/>
                    </p>
                </div>
                <div className='menu-content' style={{ "font-family": "Serif", "margin": "20px"}}>
                    <p className='menu-content-list'>{ item.childrens.map((child, index) => <DropdownMenuItem key={index} item={child} />) }</p>
                </div>
            </div>
        )
    } else {
        return (
            <p>
                <a><Link to={ item.path || '/' }>
                    <span>
                        {item.title}
                    </span>
                </Link></a>
            </p>
        )
    }
}
