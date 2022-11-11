import React, { useEffect, useState } from 'react'

function UseComponentVisible({ name = 'default_viewable_state', children }) {
    const visible_state = JSON.parse(localStorage.getItem(name)) || false;
    const [isComponentVisible, setIsComponentVisible] = useState(visible_state);

    function toggleComponent() {
        setIsComponentVisible(!isComponentVisible);
    }
    var btn = isComponentVisible ? "Hide" : "Show"

    useEffect(() => {
        localStorage.setItem(name, isComponentVisible);
    },[isComponentVisible]);

    return (
        <div>
            <button onClick={toggleComponent} className='text-orange-400 hover:bg-white hover:text-black rounded-md p-1'>{btn}</button>
            {isComponentVisible && children}
        </div>
    );
}

export default UseComponentVisible;