import Link from "next/link"

const Button = ({type='', url, text, styles='', target=''}) => {

    const clsType = (type=='line') ? 'border border-white bg-transparent hover:border-primary-100 hover:bg-primary-100' : 'bg-primary-100 hover:bg-primary-200'
    const tar = (target=='blank') ? '_blank' : '_self'

    return (
        <Link href={url} legacyBehavior>
            <a target={tar} className={`btn 2xl:text-xl font-link font-semibold uppercase text-white rounded ${clsType} ${styles}`} >{text}</a>
        </Link>
    )
}

export default Button