import '../styles/globals.css'
import NextApp from 'next/app'
import { Client } from "../utils/prismicHelpers";
import Prismic from 'prismic-javascript'
import {client } from '../prismicConfiguration'

class MyApp extends NextApp {
  static async getInitialProps(appCtx) {
    const articles = await client.query(
      Prismic.Predicates.at('document.type', 'dashboard')
    )

    return {
      props: {
        menu: articles
      },
    };
  }

  

  render() {
    const { Component, pageProps, props } = this.props
    console.log(props.menu)
    return (
      <Component {...pageProps} menu={props.menu} />
    )
  }
}

export default MyApp
