import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import HomeLanding from '../components/HomeLanding'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Roadmap from '../components/Roadmap';
import Footer from '../components/Footer';
// import { Inter } from '@next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function Home(props) {

  const activeLang = props._nextI18Next.initialLocale

  const {asPath } = useRouter();
  const [localUrl, setLocalUrl] = useState("")

  useEffect(() => {
    loadLS()
  }, [])

   function loadLS(){
      let LSUrl =   localStorage.getItem('linkUrl')

      if(LSUrl) {
        setLocalUrl(LSUrl)
       }
  }



  return (
    <>
      <Head>
        <title>Disruptiverse</title>
        <meta name="description" content="The Disruptive Metaverse" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className='relative'>
        <HomeLanding path={localUrl || asPath} activeLang={activeLang}/>
        <Roadmap/>
        <Footer style="absolute bottom-0 left-0 w-full"/>
      </main>
    </>
  )
}
