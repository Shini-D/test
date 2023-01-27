import { useRouter } from 'next/router'
import Link from 'next/link'
import useCloseOutside from '../hooks/useCloseOutside'
import Image from 'next/image'
import LangArrow from './svg/LangArrow'

const LangSwitcher = ({activeLang}) => {

    const { locales, asPath } = useRouter()
    let activeLangText = null
    const langs = [
        {
            label: 'Eng',
            locale: 'en',
            flag: 'flag-usa.svg',
            isActive: false
        },
        {
            label: 'Esp',
            locale: 'es',
            flag: 'flag-spain.svg',
            isActive: false
        },
    ]

    switch (activeLang) {
        case 'en':
            activeLangText = langs[0].label
            langs[0].isActive = true
            break
        case 'es':
            activeLangText = langs[1].label
            langs[1].isActive = true
            break
    }

    const [isOpen, toggleLangs, langBtn] = useCloseOutside()

    const buttonActive = (isOpen) ? 'active' : '';
    const optionsActive = (isOpen) ? 'active' : ''

  return (
    <div className="lang-switcher relative z-10 mr-0.5 lg:mr-0 lg:ml-8">
        <button ref={langBtn} onClick={toggleLangs} className={`lang-btn fill-white text-white bg-transparent border border-primary-100 rounded py-3 px-4 ${buttonActive}`}>
            <span className="text-sm leading-none uppercase font-bold pointer-events-none">{activeLangText}</span>
            <LangArrow/>
        </button>
        <div className={`lang-options bg-black rounded ${optionsActive}`}>
            {langs.map((lang, index) => (
                (!lang.isActive) &&
                <Link key={index} href={asPath} locale={lang.locale} passHref scroll={false} legacyBehavior>
                    <a className='lang-op text-white/75 hover:text-white'>
                        <div className="relative w-5 mr-1.5 aspect-[3/2]">
                            <Image src={`/images/flags/${lang.flag}`} fill alt=""/>
                        </div>
                        <span className='inline-block'>{lang.label}</span>
                    </a>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default LangSwitcher