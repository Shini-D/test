import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import React from 'react'

const Footer = ({style=""}) => {

    const {t} = useTranslation()

    return (
        <footer className={style}>
            <div className="px-7 py-2 text-center">
                <Link href="/privacy">{t('privacyTitle')}</Link>
            </div>
        </footer>
    )
}

export default Footer