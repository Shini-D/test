import { useTranslation } from 'next-i18next'
import RoadStep from "./RoadStep"
import Dashes from "./svg/Dashes"
import landscape from "../public/images/landscape.svg"
import Image from "next/image"
import ToAnimate from "./ToAnimate"

const Roadmap = () => {

    const {t} = useTranslation()

    const getText = (tKey) => {
        const length = t(`${tKey}.length`)
        const texts = Array.from(Array(length).keys(),n=>t(`${tKey}.p${n+1}`))
        return texts
    }

    const roadmap = [
        {
            month: t('step1Month'),
            active: true,
            line: false,
            list: getText('step1Text')
        },
        {
            month: t('step2Month'),
            active: false,
            line: false,
            list: getText('step2Text')
        },
        {
            month: t('step3Month'),
            active: false,
            line: false,
            list: getText('step3Text')
        },
        {
            month: t('step4Month'),
            active: false,
            list: getText('step4Text')

        }
    ]

    return (
        <section className="relative overflow-hidden">

            <Image src={landscape} alt="" fill className="opacity-30 scale-[200%] md:scale-125 lg:scale-100 pointer-events-none"/>
            <div className="absolute left-[10%] bottom-0 translate-y-[85%] w-4/5 h-48 lg:h-96 bg-primary-100 rounded-[50%] blur-4xl"></div>

            <div className="block-content max-w-5xl py-14 lg:pt-24 lg:pb-52">
                <ToAnimate tag='h2' styles="flex items-center justify-center mb-8 lg:mb-20 opacity">
                    <span className="w-10 lg:w-16 2xl:w-20">
                        <Dashes/>
                    </span>
                    <span className="h2 font-semibold font-title ml-2 lg:ml-5">Roadmap</span>
                </ToAnimate>

                <div className="relative grid grid-cols-1 gap-[var(--g)] max-w-lg lg:max-w-none mx-auto lg:mx-0 [--g:theme(spacing.7)] lg:[--g:theme(spacing.10)] [--dot:theme(spacing.6)] md:[--dot:theme(spacing.8)] lg:[--dot:theme(spacing.10)] 2xl:[--dot:theme(spacing.12)]">
                    {roadmap.map((step, index) => (
                        <RoadStep key={index} month={step.month} items={step.list} isActive={step.active} isLineActive={step.line}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Roadmap