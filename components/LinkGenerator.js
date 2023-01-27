import { useTranslation } from 'next-i18next'
import { useEffect, useState} from "react"
import { useRouter } from 'next/router'


export default function LinkGenerator() {

    const {t} = useTranslation()

    const {asPath } = useRouter();
    const router = useRouter()
    const origin =
        typeof window !== 'undefined' && window.location.origin
            ? window.location.origin
            : '';
    const URL = `${origin}`;

    const  [panel, setPanel] = useState(false)
    function toggleButton (){
        panel ? setPanel (false) : setPanel(true)

    }
    const [linkUrl, setLinkUrl] = useState("");
    const [field, setField] = useState(false)
    const [refresh, setRefresh] = useState(false)

     function handleGenerate (e){
            e.preventDefault()
            const url=   e.target[0].value
            const urlCom = url.replace('https://disruptiverse.net/sponsor/', "")


            if(url.includes("https://disruptiverse.net/sponsor/") || url === "" ){
                setLinkUrl(urlCom)
                localStorage.setItem("linkUrl", urlCom);
                router.push(urlCom)

            } else{
                alert(t('generateAlert'))
            }


      }
      function handleRefresh(){
        setRefresh(true)
        setLinkUrl("")
        localStorage.setItem("linkUrl","");


      }

      function handleForm(e){
        if(e.target.value.length > 5){
            setField(true)
        } else{setField(false)}
      }



      useEffect(() => {
        loadLocalStorage()
      }, [])



     function  loadLocalStorage(){
        // reset filter selected
        let LSUrl = localStorage.getItem('linkUrl')
        if(LSUrl) {
            setLinkUrl(LSUrl )
         }
     }

    return(
        <div className="relative w-full">

            {panel && <div onClick={() => setPanel (false) }className="overlay fixed w-screen h-screen bg-dark top-0 left-0 bg-opacity-5"></div>
}
            <button onClick={toggleButton} className={` ${panel ? "bg-primary-100" : "bg-dark"} hover:scale-105 transition-all border-2 border-primary-100 ml-auto  relative rounded-full h-10 w-10 flex justify-center items-center`}>
                <svg  width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.77685 17.3839C4.1662 17.7738 4.62877 18.0829 5.13797 18.2935C5.64716 18.5041 6.19296 18.612 6.74398 18.611C7.29513 18.612 7.84104 18.5041 8.35037 18.2935C8.8597 18.0829 9.32242 17.7738 9.71196 17.3839L12.0857 15.0093L10.8988 13.8225L8.5251 16.197C8.0521 16.6679 7.41184 16.9323 6.7444 16.9323C6.07697 16.9323 5.43671 16.6679 4.9637 16.197C4.4924 15.7242 4.22776 15.0839 4.22776 14.4163C4.22776 13.7488 4.4924 13.1084 4.9637 12.6356L7.33825 10.2619L6.15139 9.07506L3.77685 11.4488C2.99104 12.2365 2.54974 13.3037 2.54974 14.4163C2.54974 15.529 2.99104 16.5962 3.77685 17.3839ZM16.8339 10.2619C17.6193 9.47399 18.0603 8.40686 18.0603 7.29436C18.0603 6.18186 17.6193 5.11472 16.8339 4.3268C16.0462 3.541 14.979 3.0997 13.8664 3.0997C12.7537 3.0997 11.6865 3.541 10.8988 4.3268L8.5251 6.70135L9.71196 7.88821L12.0857 5.51366C12.5587 5.04277 13.1989 4.7784 13.8664 4.7784C14.5338 4.7784 15.1741 5.04277 15.6471 5.51366C16.1184 5.98645 16.383 6.62679 16.383 7.29436C16.383 7.96193 16.1184 8.60227 15.6471 9.07506L13.2725 11.4488L14.4594 12.6356L16.8339 10.2619Z" fill="white"/>
                    <path d="M7.33735 15.0102L6.14966 13.8233L13.2733 6.70053L14.4602 7.88822L7.33735 15.0102Z" fill="white"/>
                </svg>
            </button>

            <div className={`${panel ? "block top-12" : "hidden top-6"} transition-all delay-300 bg-silver max-w-xs px-8 py-4 rounded ml-auto absolute top-full right-0`}>

                <form   onSubmit={handleGenerate } >

                    {linkUrl ? <><CopyComponent url={linkUrl} base={URL} />  <button onClick={handleRefresh} className=" font-link w-full text-right  font-semibold mt-4 uppercase text-primary-100 text-sm">{t('generateBtn')}</button></>
                    : <>
                    <h6>{t('referralUrl')}</h6>
                    <input onChange={handleForm} name="urlNet"  className=" bg-silver border border-o border-light w-full px-4 py-2 rounded mt-2 mb-2 placeholder:opacity-80" placeholder={t('referralPlaceholder')}/>
                    <button type="submit" disabled={!field}    className="    font-link disabled:opacity-50 bg-primary-100 hover:bg-primary-200'font-semibold uppercase text-white rounded py-2 px-4 max-w-xs">{t('generateBtn')}
                    </button>
                    </>
                    }
                </form>


            </div>
        </div>
    )
}

const CopyComponent = ({url, base})=> {
    
    const {t} = useTranslation()

    const [copied, setCopied] = useState(false)

    const [link,setLink] = useState("")


    useEffect(() => {
      setLink(base + "/" + url)
    }, [url])


    function clip() {
        setCopied(true)
        navigator.clipboard.writeText(base + "/" + url);
        setTimeout(() => {
            setCopied(false)
          }, 1500);
      }

return(
    <div>
        <div >
        <h6 className="hidden">{t('copyClipboard')}</h6>
        <div onClick={clip} className="flex items-stretch mt-2 hover:scale-105 hover:shadow-md transition-all cursor-pointer">


        <input defaultValue={link} disabled  className=" focus:outline-none   bg-silver border border-light border-r-0 border-opacity-20  w-full pl-4 py-2  rounded  rounded-r-none  placeholder:opacity-80 " placeholder={t('referralPlaceholder')}/>
        <a  className=" inline-block bg-primary-100  hover:bg-primary-200 border border-l-0 border-light  border-opacity-20  font-semibold uppercase text-white rounded rounded-l-none py-2 px-4 max-w-xs">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2H10C8.897 2 8 2.897 8 4V8H4C2.897 8 2 8.897 2 10V20C2 21.103 2.897 22 4 22H14C15.103 22 16 21.103 16 20V16H20C21.103 16 22 15.103 22 14V4C22 2.897 21.103 2 20 2ZM4 20V10H14L14.002 20H4ZM20 14H16V10C16 8.897 15.103 8 14 8H10V4H20V14Z" fill="white"/>
        <path d="M6 12H12V14H6V12ZM6 16H12V18H6V16Z" fill="white"/>
        </svg>

        </a>


        </div>
        {copied && <div className="flex mt-4 rounded bg-[#30885b] bg-opacity-50 text-light px-4 py-1">
        <svg className="mr-2" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.4899 2.25729C6.97587 2.25729 2.48987 6.74329 2.48987 12.2573C2.48987 17.7713 6.97587 22.2573 12.4899 22.2573C18.0039 22.2573 22.4899 17.7713 22.4899 12.2573C22.4899 6.74329 18.0039 2.25729 12.4899 2.25729ZM12.4899 20.2573C8.07887 20.2573 4.48987 16.6683 4.48987 12.2573C4.48987 7.84629 8.07887 4.25729 12.4899 4.25729C16.9009 4.25729 20.4899 7.84629 20.4899 12.2573C20.4899 16.6683 16.9009 20.2573 12.4899 20.2573Z" fill="#ffff"/>
        <path d="M10.4888 13.8443L8.18983 11.5493L6.77783 12.9653L10.4908 16.6703L17.1968 9.96429L15.7828 8.55029L10.4888 13.8443Z" fill="#ffff"/>
        </svg>
        {t('copyOk')}

            </div>}
        </div>


    </div>
)
}