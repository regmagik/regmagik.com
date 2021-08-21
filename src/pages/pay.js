import * as React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PaymentPage = () => (
  <Layout>
    <Seo title="Order RegmagiK" />
    <h1>Order RegmagiK</h1>
    <p>Click below to make a payment using PayPal or credit/debit card.</p>
	<PayPalScriptProvider options={{ 
		"client-id":"AUHHnRWzrEWKu2UwHwU1l3EAKL2jBzfSVN64_FsQbhaAJt0ZL3Tsge-gNa3ZMMs1b9N1KuLI79tug17I",
		}}>
		<PayPalButtons />
	</PayPalScriptProvider>
  </Layout>
)

export default PaymentPage
