import React, { useEffect, useRef, useState } from 'react'

export default function useComponentVisible(init_isVisible) {
    const [isComponentVisible, setIsComponentVisible] = useState(init_isVisible);
    const reference = useRef(null);

    const handleClickOutside = (e) => {
        if (reference.current && !reference.current.contains(e.target)) {
            setIsComponentVisible(false);
        }
    };
    
    useEffect(() => {

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return { reference, isComponentVisible, setIsComponentVisible};
}
