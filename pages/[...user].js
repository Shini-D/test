import { useRouter } from 'next/router'
import Head from 'next/head'
import HomeLanding from '../components/HomeLanding';


export default function PageUser() {
    const router = useRouter()





    return(
        <>
        <Head>
            <title>Disruptiverse</title>
            <meta name="description" content="The Disruptive Metaverse" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <HomeLanding path={router.asPath} />
        </>
    )
}
