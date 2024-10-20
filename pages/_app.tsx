import "@/styles/globals.css";
import type { AppProps } from "next/app";


import { Nunito } from 'next/font/google'
// import Head from 'next/head';
// If loading a variable font, you don't need to specify the font weight
const nunito = Nunito({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={nunito.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
