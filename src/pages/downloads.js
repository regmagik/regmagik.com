import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Downloads" />
    <h1>RegmagiK Downloads</h1>
    <p>Download the latest version of RegmagiK Registry Editor: v.4.10.5</p>
    <p>Windows 10 versions also run on Windows 8 and Windows 7. If you have Windows XP see <a href="#XP">the section for Windows XP</a> below.</p>
	
	<h2>64-bit Windows 10</h2>
    <a href="/RegmagiK.x64.English.zip">RegmagiK.x64.English</a>
	<h2>32-bit Windows 10</h2>
    <a href="/RegmagiK.Win32.English.zip">RegmagiK.Win32.English</a>
	
	<p>Also available in French and German</p>

	<h3>64-bit Windows 10 French</h3>
    <a href="/RegmagiK.x64.French.zip">RegmagiK.x64.French</a>
	<h3>32-bit Windows 10 French</h3>
    <a href="/RegmagiK.Win32.French.zip">RegmagiK.Win32.French</a>
	
	<h3>64-bit Windows 10 German</h3>
    <a href="/RegmagiK.x64.German.zip">RegmagiK.x64.German</a>
	<h3>32-bit Windows 10 German</h3>
    <a href="/RegmagiK.Win32.German.zip">RegmagiK.Win32.German</a>


	<h2 id="XP">RegmagiK for Windows XP</h2>
	<h3>64-bit Windows XP</h3>
    <a href="/RegmagiKXP.zip">RegmagiK 64-bit for Windows XP, in English</a>
	<h3>32-bit Windows 10</h3>
    <a href="/RegmagiK32XP.zip">RegmagiK 32-bit for Windows XP, in English</a>
  </Layout>
)

export default SecondPage
