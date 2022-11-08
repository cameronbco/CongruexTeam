import React, { useEffect } from 'react'
import { BsSun, BsMoon } from 'react-icons/bs';
import { useLocalStorage } from '../../hooks';

const ThemeSwitcher = () => {
    const [storedTheme, setTheme] = useLocalStorage("theme");
    useEffect(() => {
        setTheme("dark");
    }, [setTheme]);

    return (
        <div>
            {storedTheme ? (
                <>
                    <button>Button here</button>
                </>
            ): (
                <div className='btn-container space-x-20 py-2'>
                    <button className='rounded-xl p-1 hover:bg-sky-800 hover:text-white'><BsSun size={36} /></button>
                    <button className='rounded-xl p-1 hover:bg-sky-900 hover:text-white'><BsMoon size={36} /></button>
                </div>
            )}
        </div>
    )
}

export default ThemeSwitcher;