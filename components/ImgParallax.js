import Image from "next/image"
import {useEffect, useRef} from 'react'

const ImgParallax = ({image, speed}) => {
    
    const img = useRef()
    useEffect(() => {
        document.addEventListener('mousemove', e =>{
            const scale = 0.005
            const x = (window.innerWidth - e.pageX * speed) * scale
            const y = (window.innerHeight - e.pageY * speed) * scale

            const el = img.current

            el.style.transform = `translateX(${x}px) translateY(${y}px)`
        })
    },[img])

    return (
        <Image ref={img} src={image} alt="" fill className="background"/>
    )
}

export default ImgParallax