import '../sass/main.scss'
import 'tailwindcss/dist/tailwind.css'

import { makeServer } from "../mirage"
import withRedux from "next-redux-wrapper";
import { store } from "../store/index";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" })
}

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default withRedux(store)(MyApp)
