import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SeearchcutPage = () => (
  <Layout>
    <Seo title="Searchcut" />
    <h1>Searchcut</h1>
    <p>Download the latest version of Searchcut: v.1.5</p>
    <a className='btn' href="/searchcut.zip">Download Searchcut</a>
  </Layout>
)

export default SeearchcutPage
