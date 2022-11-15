import { useEffect, useState } from 'react';

// gives option to toggle component visibility
// need "id" provided to remember each state, otherwise default is used
// wrap any component inside function to add visibility id & logic
function UseComponentVisible({ id = 'default-viewable-state', children }) {
    // default visibility is set to false
    const [isComponentVisible, setIsComponentVisible] = useState(() => {
        return JSON.parse(localStorage.getItem(id)) || false;
    });

    useEffect(() => {
        localStorage.setItem(id, isComponentVisible);
    },[isComponentVisible]);

    return (
        <div>
            {isComponentVisible && children}
        </div>
    );
}

export default UseComponentVisible;