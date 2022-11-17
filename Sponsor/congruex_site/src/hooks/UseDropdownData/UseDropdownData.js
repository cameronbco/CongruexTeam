import { useEffect, useState } from 'react'

function UseDropdownData() {
    const [item, setItem] = useState([]);
    //set link here
    const api_link = "PUT LINK HERE"

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await fetch(api_link);
                const data = await response.json();
                setItem(data);
                fetchItem();
            } catch (err) {
                console.log(err);
            } 
        }
    }, [])

    return { item };
}

export default UseDropdownData