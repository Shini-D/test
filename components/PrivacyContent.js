import { useTranslation } from 'next-i18next'
import Link from 'next/link';
import PrivacySection from '../components/PrivacySection';

const PrivacyContent = () => {

    const {t} = useTranslation()

    const getText = (tKey, identifier='p') => {
        const length = t(`${tKey}.length`)
        const texts = Array.from(Array(length).keys(),n=>t(`${tKey}.${identifier}${n+1}`))
        return texts
    }

    return (
        <div className='block-content lg:max-w-screen-lg num-count'>
            <h1 className='h1 font-semibold font-title text-white text-center mb-5 lg:mb-14'>{t('privacyTitle')}</h1>

            <p className='mb-4'>{t('privacyInitial.p1')} <Link href={`mailto:${t('privacyInitial.p2')}`}>{t('privacyInitial.p2')}</Link> {t('privacyInitial.p3')}</p>

            <PrivacySection title={t('privacy1Title')} texts={getText('privacy1Text')}/>
            <PrivacySection title={t('privacy2Title')} texts={getText('privacy2Text')}/>
            <PrivacySection title={t('privacy3Title')} texts={getText('privacy3Text')}/>
            <PrivacySection title={t('privacy4Title')} texts={getText('privacy4Text')}/>
            <PrivacySection title={t('privacy5Title')} texts={getText('privacy5Text')}/>
            <PrivacySection title={t('privacy6Title')} texts={getText('privacy6Text')}/>
            <PrivacySection title={t('privacy7Title')} texts={getText('privacy7Text')}/>
            <section className="num-increment mb-6 lg:mb-10 last:mb-0">
                <h2 className="h4 text-white before:num-result mb-4">{t('privacy8Title')}</h2>
                <p className="mb-3 last:mb-0">{t('privacy8Text.p1')}</p>
                <ol className='list-[lower-alpha] pl-5 mb-3 last:mb-0]'>
                    {getText('privacy8Text.p2', 'ol').map((item, index) => (
                        <li key={index} className="mb-2 lg:mb-3 last:mb-0">{item}</li>
                    ))}
                </ol>
            </section>
            <PrivacySection title={t('privacy9Title')} texts={getText('privacy9Text')}/>
        </div>
    )
}

export default PrivacyContent