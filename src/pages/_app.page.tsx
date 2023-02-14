import type { AppProps } from "next/app"
import { globalStyles } from "@/styles/global"
import { Roboto } from "@next/font/google"

globalStyles()

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  )
}
