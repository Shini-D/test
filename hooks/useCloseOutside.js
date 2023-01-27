import { useEffect, useState, useRef } from 'react'

const useCloseOutside = () => {
    const [isOpen, setIsOpen] = useState(false)
    const trigger = useRef()
    const toggleDropdown = () => setIsOpen(!isOpen)

    useEffect(()=>{
        const closeDropdown = e => {
            if(e.target !== trigger.current) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mouseup', closeDropdown)
        document.addEventListener('touchend', closeDropdown)

        return () => {
            document.removeEventListener('mouseup', closeDropdown)
            document.removeEventListener('touchend', closeDropdown)
        }
    }, [trigger])

    return [isOpen, toggleDropdown, trigger]
}

export default useCloseOutside