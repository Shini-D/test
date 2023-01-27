import Image from 'next/image'
import Button from './Button'
import logo from '../public/images/logo.svg'
import Planet from './svg/Planet'

const Hero = ({path}) => {
  return (
    <>
    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-dark h-1/2"></div>

    <div className="block-content flex flex-wrap flex-col lg:flex-row-reverse items-center justify-center min-h-screen py-4 relative">

        <div className="w-full max-w-2xl lg:max-w-none mx-auto lg:mx-0 lg:w-3/5 animated tran-op [--dist-y:30px] lg:[--dist-y:0] lg:[--dist-x:30px] [--d:1.2s]">
            <Planet extLink="http://world.disruptiverse.com/"/>
        </div>

        <div className="lg:w-2/5 text-center lg:text-left text-white">

            <div className="relative w-4/5 aspect-[39/8] mx-auto mb-4 lg:mx-0 lg:mb-6 animated tran-op [--dist-y:30px] lg:[--dist-y:0] lg:[--dist-x:-30px]">
            <Image src={logo} alt="Disruptiverse" fill sizes="100%" priority />
            </div>
            <p className="sm:text-lg lg:text-xl 2xl:text-2xl max-w-lg mb-8 lg:mb-10 mx-auto lg:mx-0 animated tran-op [--dist-y:30px] lg:[--dist-y:0] lg:[--dist-x:-30px] [--d:0.3s]">The only blockchain metaverse 100% ready for oculus quest</p>

            <div className="grid max-w-xs mx-auto sm:max-w-none sm:mx-0 sm:grid-cols-3 gap-2 text-center animated tran-op [--dist-y:30px] lg:[--dist-y:0] lg:[--dist-x:-30px] [--d:0.6s]">

                <Button url='https://app.disruptiverse.com/' text='Launch' styles='py-2.5 px-1' target='blank'/>
                <Button  url={ path !== "/"? "https:/disruptiverse.net/sponsor" + path : "https://disruptiverse.net/"} text='Marketplace' styles='py-2.5 px-1' target='blank'/>
                <Button type='line' url='https://disruptiverse.net/collectionsProfile/0xe3fd599b6308d8284daba891b14708695e931442/1' text='Buy Now' styles='py-2.5 px-1' target='blank'/>

            </div>

        </div>

    </div>
    </>
  )
}

export default Hero