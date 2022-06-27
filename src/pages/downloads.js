import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Downloads" />
    <h1>RegmagiK Downloads</h1>
    <p>Download the latest version of RegmagiK Registry Editor: v.4.10.7. The new version adds ability to save and apply the last used sort column and direction in the right pane and search results pane.</p>
    <p>The latest version runs on Windows 11, 10, 8 and Windows 7. If you have Windows XP see <a href="#XP">the section for Windows XP</a> below.</p>
	<p>Trial expired? <Link to="/pay">Order RegmagiK License here...</Link></p>

	<p>
	<b>64-bit</b> <a href="/RegmagiK.x64.English.zip">RegmagiK.x64.English</a>
	<br/>
	<b>32-bit</b> <a href="/RegmagiK.Win32.English.zip">RegmagiK.Win32.English</a>
	</p>
	<p>Also available in French and German</p>

	<p>
	<b>64-bit French</b> <a href="/RegmagiK.x64.French.zip">RegmagiK.x64.French</a>
	<br/>
	<b>32-bit French</b> <a href="/RegmagiK.Win32.French.zip">RegmagiK.Win32.French</a>
	</p>
	<p>
	<b>64-bit German</b> <a href="/RegmagiK.x64.German.zip">RegmagiK.x64.German</a>
	<br/>
	<b>32-bit German</b> <a href="/RegmagiK.Win32.German.zip">RegmagiK.Win32.German</a>
	</p>

	<h2 id="XP">RegmagiK for Windows XP</h2>
	<b>64-bit Windows XP</b> <a href="/RegmagiKXP.zip">RegmagiK 64-bit for Windows XP, in English</a>
	<br/>
	<b>32-bit Windows XP</b> <a href="/RegmagiK32XP.zip">RegmagiK 32-bit for Windows XP, in English</a>
  </Layout>
)

export default SecondPage
