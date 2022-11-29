import { useEffect } from 'react'


// Usage:
// const btn_ref = useRef();
// const [isOpen, setIsOpen] = useState(false);
// useOnClickOutside(btn_ref, () => setIsOpen(false));
// then put btn_ref in the div that will be detecting outside clicks to auto close
function useOnClickOutside(ref, handler) {
    useEffect(() => {
        const listener = (e) => {
            if (!ref.current || ref.current.contains(e.target)) {
                return;
            }
            handler(e);
        };
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        }
    }, [ref, handler])
}

export default useOnClickOutside