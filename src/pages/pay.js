import * as React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PaymentPage = () => {
	const [state, setState] = React.useState({});
	return (
  <Layout>
    <Seo title="Order RegmagiK" />
    <h1>Order RegmagiK</h1>
    <p>Your payment of $15 will grant you unlimited RegmagiK license to use on any number of PCs. Thank you. </p>
    <p>Click below to make a payment using PayPal or credit/debit card.</p>
	<PayPalScriptProvider options={{ 
		"client-id":"AUHHnRWzrEWKu2UwHwU1l3EAKL2jBzfSVN64_FsQbhaAJt0ZL3Tsge-gNa3ZMMs1b9N1KuLI79tug17I",
		}}>
		<PayPalButtons 
			createOrder={(data, actions) => {
				return actions.order.create({
					purchase_units: [
						{
							amount: {
								value: "15.00",
							},
						},
					],
			});
		}}
		onApprove={(data, actions) => {
			return actions.order.capture().then(function(details) {
				const endpoint = 'https://digital-river.azurewebsites.net/api/Key?code=Wy8JVCdvKaR3WaOjluMMmbYln72IJoobyYNKDRmHXvOxVWatbjvwhQ==';
				fetch(endpoint, {
					method: 'POST',
					body: `FIRSTNAME=${details.payer.name.given_name}&LASTNAME=${details.payer.name.surname}&EMAIL=${details.payer.email_address}` 
				}).then((response)=>setState({paid: true, license: response.text()}));
				
			});
		  }}
	    />
	</PayPalScriptProvider>
	{state.paid && <div>
		Thank you for your payment. Your license code is:
		<b>{state.license}</b>
		</div>}
  </Layout>
);
}
export default PaymentPage
