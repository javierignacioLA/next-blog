import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../src/styles/layout.module.css'
import utils from '../src/styles/utils.module.css'
const Layout = ({children, titulo, descripcion, home}) => {
  
  const name= 'web de lopo'
  return (
    <div className={styles.container}>
        <Head>
            <title>{titulo}</title>
            <meta name="description" content={descripcion}/>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/imagenes/img1.jpg"
              className={utils.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utils.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/imagenes/img1.jpg"
                className={utils.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utils.headingLg}>
              <Link href="/" className={utils.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>

        <nav> 
        <Link href="/">
          Inicio | 
        </Link>
        <Link href="/blog/home">
          home | 
        </Link>
        <Link href="/contacto">
          Contacto |
        </Link>
        <Link href="/about">
          About
        </Link>
        </nav>
        
        <main>{children}</main>

        <footer> {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
         )}
        </footer>

    </div>
  )
}

export default Layout