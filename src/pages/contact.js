import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => (
  <Layout>
    <Seo title="Contact RegmagiK Support" />
    <h1>Contact RegmagiK Support</h1>
    <p>
		Send me a message on WhatsApp or text 1-404-514-7980 or email <i>support at regmagik.com</i>.
	</p>
    <p>
		Connect on LinkedIn: https://linkedin.com/in/borisguzner
	</p>
    <p>
		Comment and follow RegmagiK on Facebook: https://facebook.com/RegmagiK
	</p>
    <p>
		<Link to="/pay">Order RegmagiK</Link>
	</p>
  </Layout>
)

export default ContactPage
