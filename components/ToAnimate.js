import {useEffect, useRef, useState} from 'react'

const ToAnimate = ({children, styles='', tag='div'}) => {

    const animated = useRef()
    const [animClass, setAnimClass] = useState('')
    
    useEffect(() => {
        let initAnimOffset = (window.innerWidth > 768) ? 200 : 40
        const initWindowCurrent = window.scrollY + window.innerHeight
        const initTrigger = animated?.current.getBoundingClientRect().top + window.scrollY + initAnimOffset
        if (initWindowCurrent > initTrigger) setAnimClass('animated')

        window.addEventListener('scroll', () => {
            let animOffset = (window.innerWidth > 768) ? 200 : 40
            const windowCurrent = window.scrollY + window.innerHeight
            const trigger = animated?.current.getBoundingClientRect().top + window.scrollY + animOffset
            if (windowCurrent > trigger) setAnimClass('animated')
        })
    }, [animated])

    switch (tag) {
        case 'li':
            return ( <li ref={animated} className={`${animClass} ${styles}`}>{children}</li> )
        case 'ul':
            return ( <ul ref={animated} className={`${animClass} ${styles}`}>{children}</ul> )
        case 'h2':
            return ( <h2 ref={animated} className={`${animClass} ${styles}`}>{children}</h2> )
        case 'h3':
            return ( <h3 ref={animated} className={`${animClass} ${styles}`}>{children}</h3> )
        case 'p':
            return ( <p ref={animated} className={`${animClass} ${styles}`}>{children}</p> )
        default:
            return ( <div ref={animated} className={`${animClass} ${styles}`}>{children}</div> )
    }
}

export default ToAnimate