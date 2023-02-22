import "../styles/globals.css";
import { Comfortaa } from '@next/font/google'

const comfortaa = Comfortaa({ subsets: ['latin'] })

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={comfortaa.className}>
      <Component {...pageProps} />
    </main>
  )

}
