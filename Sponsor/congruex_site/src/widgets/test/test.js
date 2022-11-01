import { useEffect, useRef, useState } from "react";
import './test.css';

export default function Test() {
    const [isOpen, setIsOpen] = useState(true);
    const btnRef = useRef();

    useEffect(() => {
        const closeDropdown = e => {
            if (!btnRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.body.addEventListener('click', closeDropdown);
        return () => document.body.removeEventListener('click', closeDropdown);
    }, []);

    return (
        <div ref={btnRef} className='dropdown_container'>
            <button onClick={() => setIsOpen(!isOpen)}>All Options</button>
            <div className={'dropdown ' + (isOpen ? 'closed': 'open')}>
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
            </div>
        </div>
    )
}