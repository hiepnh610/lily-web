import React, { ReactNode } from 'react'
import Head from 'next/head'

import MainLogo from '../../images/logo'

type Props = {
  children?: ReactNode
  title?: string
}

const GuessLayout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <header className="py-6">
      <div className="w-16 mx-auto">
        <MainLogo />
      </div>
    </header>

    <div className="w-1/4 mx-auto h-screen flex content-center flex-wrap -mt-56">
      {children}
    </div>
  </div>
)

export default GuessLayout
