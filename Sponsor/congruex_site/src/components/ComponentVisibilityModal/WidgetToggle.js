import { useEffect, useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';


function WidgetToggle({name = '', id = 'default_viewable_state' }) {
    // const visible_state =  false;
    const [isComponentVisible, setIsComponentVisible] = useState(() => {
        return JSON.parse(localStorage.getItem(id)) || false;
    });
    var btn = isComponentVisible ? <AiFillEye size={18} /> : <AiFillEyeInvisible className='text-gray-400' size={18} />
    function toggleComponent() {
        setIsComponentVisible(!isComponentVisible);
    }
    useEffect(() => {
        localStorage.setItem(id, isComponentVisible);
    },[isComponentVisible]);

    return (
        <div>
            <button onClick={toggleComponent} className='flex justify-center items-center text-orange-400 hover:text-black hover:bg-blue-100 rounded-md inline-block p-1 sm:w-full sm:max-w-lg'>
                <span>{name}</span>
                {btn}
            </button>
        </div>
    )
}

export default WidgetToggle