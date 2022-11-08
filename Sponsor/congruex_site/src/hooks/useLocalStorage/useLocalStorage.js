import { useState } from 'react'

const useLocalStorage = (key, init_val) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : init_val;
        } catch (err) {
            console.log(err);
            return init_val;
        }
    });
    
    const setValue = val => {
        try {
            const valToStore = val instanceof Function ? val(storedValue) : val;
            setStoredValue(valToStore);
            window.localStorage.setItem(key, JSON.stringify(valToStore));
        } catch (err) {
            console.log(err);
        }
        window.localStorage.setItem(key, val);
        setStoredValue(val);
    }
  
    return [storedValue, setValue];
}

export default useLocalStorage;