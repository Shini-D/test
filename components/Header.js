import Image from 'next/image'
import Link from 'next/link'
import LangSwitcher from './LangSwitcher'
import logo from '../public/images/logo.svg'

const Header = ({activeLang}) => {
  return (
    <header>
        <div className='block-content flex items-center justify-between py-2 lg:py-4'>
            <Link href="/" className="relative aspect-[39/8] h-7 lg:h-9">
                <Image src={logo} alt="Disruptiverse" fill sizes="100%" priority />
            </Link>
            <LangSwitcher activeLang={activeLang}/>
        </div>
    </header>
  )
}

export default Header