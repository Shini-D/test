import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Header from '../components/Header';
import PrivacyContent from '../components/PrivacyContent';

export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
      },
    };
  }

const privacy = (props) => {

    const activeLang = props._nextI18Next.initialLocale

    return (
        <>
            <Head>
                <title>Disruptiverse - Privacy Policy</title>
                <meta name="description" content="The Disruptive Metaverse" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className='text-primary-50 lg:text-lg'>
                <Header activeLang={activeLang}/>
                <PrivacyContent/>
            </main>
        </>
    )
}

export default privacy