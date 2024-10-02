import Head from 'next/head';
import Link from 'next/link';

export default function Layout({children, home}) {
  return (
    <>
      <Head>
        <title>Next.js App Practice</title>
      </Head>
      <header>
        <nav className='m-3'>
          <Link href="/">Food.com</Link>
        </nav>
      </header>
      <main>
        {children}
      </main>
      {!home && (
          <Link href="/" className='btn btn-primary mt-3'>
            ← Back to home
          </Link>
        )
      }
      <footer>
        <p className='text-center m-3'><em>where foodies meet foods</em></p>
      </footer>
    </>
  )
}