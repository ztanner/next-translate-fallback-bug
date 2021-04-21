import React from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

import Header from '../components/header'

export default function Home() {
  const { t } = useTranslation('home')

  return (
    <>
      <Link href="/nested/1">
        <a>View Bug URL</a>
      </Link>
    </>
  )
}
