import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SeearchcutPage = () => (
  <Layout>
    <Seo title="Searchcut" />
    <h1>Searchcut</h1>
    <p>Searchcut is a tiny tool that helps running web search for text selected in (almost) any window.</p>
    <p>Just select text you want to search for and press <code>Control+C+C</code> (hold control and press C twice quickly).</p>
    <p>Download the latest version of Searchcut: v.1.5</p>
    <a className='btn' href="/searchcut.zip">Download Searchcut</a>

    <p>Searchcut is also available for Mac OS, currently in beta. <Link to="/contact">Contact us</Link>. </p>
  </Layout>
)

export default SeearchcutPage
