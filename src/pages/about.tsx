// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <Seo title="The Purpose" />
    <h1>The Purpose of the Site</h1>
    <p>
      This site was initially created to give people a way 
	  to <Link to="/downloads">download RegmagiK Registry Editor</Link>. 
	  As a nice bonus it gives me a playground to use web technologies and 
	  learn how they fit together.
    </p>
    <p>
      If you often use Google to search for words selected in the text you read on the computer, you'll want to install <em>searchcut</em>, a tiny utility that will save you a few clicks each time you search for words selected in the text you read.
    </p>
    <p>
      To learn more about searchcut, head over to our{" "}
      <a href="/searchcut/">
        Searchcut</a> page
      .
	  </p>
	<h2>Partners</h2>
    <p>
	Our software can be downloaded from software download sites like 
	<Link to="https://www.softpedia.com/publisher/Boris-Guzner-39476.html">Softpedia</Link> 
	or 
	<Link to="https://download.cnet.com/developer/Guzner%20Software/i-6265956/">
	cnet download.com</Link> as well as other shareware sites.
    </p>
	<h2>Technical information</h2>
    <p>
      You're currently on the page "{path}" which was built on{" "}
      {data.site.buildTime}.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
