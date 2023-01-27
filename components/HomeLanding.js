import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Button from './Button'
import LinkGenerator from './LinkGenerator'
import logo from '../public/images/logo.svg'
import starA from '../public/images/stars-1.svg'
import starB from '../public/images/stars-2.svg'
import starC from '../public/images/stars-3.svg'
import starD from '../public/images/stars-4.svg'
import Planet from './svg/Planet'
import ImgParallax from './ImgParallax'
import LangSwitcher from './LangSwitcher'

export default function HomeLanding({path, activeLang}) {

    const {t} = useTranslation()

    return(
        <div className='relative bg-black overflow-hidden'>

            <div className='w-full absolute top-0 left-0 z-50 flex justify-between p-7'>
                <LangSwitcher activeLang={activeLang}/>
                <LinkGenerator/>
            </div>

            {path && path != "/" && <span className='hidden items-center px-2 py-0 rounded-lg bg-light bg-opacity-20 text-light opacity-70 text-xs absolute top-4 left-4'> {" " + path}</span>}

            <ImgParallax image={starA} speed={4}/>
            <ImgParallax image={starB} speed={3}/>
            <ImgParallax image={starC} speed={2}/>
            <ImgParallax image={starD} speed={1}/>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-dark h-1/2"></div>

          <div className="block-content flex flex-wrap flex-col lg:flex-row-reverse items-center justify-center min-h-screen py-4 relative">

              <div className="w-full max-w-2xl lg:max-w-none mx-auto lg:mx-0 lg:w-3/5 animated tran-op [--dist-y:30px] lg:[--dist-y:0] lg:[--dist-x:30px] [--d:1.2s]">
                  <Planet extLink="http://world.disruptiverse.com/" buttonText={t('svgBtn')}/>
              </div>

              <div className="lg:w-2/5 text-center lg:text-left text-white">

                  <div className="relative w-4/5 aspect-[39/8] mx-auto mb-4 lg:mx-0 lg:mb-6 animated tran-op [--dist-y:30px] lg:[--dist-y:0] lg:[--dist-x:-30px]">
                    <Image src={logo} alt="Disruptiverse" fill sizes="100%" priority />
                  </div>
                  <p className="sm:text-xl lg:text-2xl 2xl:text-3xl font-medium max-w-lg mb-8 lg:mb-10 mx-auto lg:mx-0 animated tran-op [--dist-y:30px] lg:[--dist-y:0] lg:[--dist-x:-30px] [--d:0.3s]">{t('heroText')}</p>

                  <div className="grid max-w-xs mx-auto sm:max-w-none sm:mx-0 sm:grid-cols-3 gap-2 text-center animated tran-op [--dist-y:30px] lg:[--dist-y:0] lg:[--dist-x:-30px] [--d:0.6s]">

                      <Button url='https://app.disruptiverse.com/' text={t('heroBtn1')} styles='py-2.5 px-1' target='blank'/>
                      <Button  url={ path !== "/"? "https:/disruptiverse.net/sponsor" + path : "https://disruptiverse.net/"} text={t('heroBtn1')} styles='py-2.5 px-1' target='blank'/>
                      <Button type='line' url='https://disruptiverse.net/collectionsProfile/0xe3fd599b6308d8284daba891b14708695e931442/1' text={t('heroBtn1')} styles='py-2.5 px-1' target='blank'/>

                  </div>

              </div>

          </div>
      </div>
    )
}