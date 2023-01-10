import Head from "next/head"

import { FC } from "react"
import { Navbar } from "../ui";

type Props = {
    children?: React.ReactNode;
    title?: string
  };

  const origin = (typeof window === 'undefined') ? '' : window.location.origin
  
  export const Layout: FC<Props> = ({children, title}) => {
    

  return (
    <>
    <Head>
        <title>{title || 'NETFLIX'}</title>
        <meta name="author" content="Javier Perez"/>
        <meta name="description" content={`Information about Movies ${title}`}/>
        <meta name="keyword" content={`${title} movie`}/>
        <meta property="og:title" content={`Information about ${title}`} />
        <meta property="og:description" content={`Web list movies ${title}`} />
       
    </Head>
   

    <Navbar/>

    <main style={{
      padding:'0 20px'
    }}>
        {children}
    </main>
    </>
  )
}
