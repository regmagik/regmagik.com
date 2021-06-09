import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Downloads" />
    <h1>RegmagiK Downloads</h1>
    <p>Download the latest version of RegmagiK Registry Editor: v.4.10.5</p>
    <Link to="/RegmagiK.Win32.English.zip">RegmagiK.Win32.English</Link>
    <a href="RegmagiK.x64.English.zip">RegmagiK.x64.English</a>
  </Layout>
)

export default SecondPage
