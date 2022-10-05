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
    <p>Pay $15 and you will get an unlimited RegmagiK license to use on any number of PCs. Thank you. </p>
    <p>After making a payment, look for your license below the PayPal buttons.</p>
    <p>Click below to make a payment using PayPal or credit/debit card. </p>
	<PayPalScriptProvider options={{ 
		"client-id": "AUHHnRWzrEWKu2UwHwU1l3EAKL2jBzfSVN64_FsQbhaAJt0ZL3Tsge-gNa3ZMMs1b9N1KuLI79tug17I",//prod
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
			onApprove={async (data, actions) => {
				const details = await actions.order.capture();
				console.log('paid by', details.payer.name.given_name);
				const endpoint = `https://temp-name.azurewebsites.net`;
				const response = await fetch(endpoint, {
					method: 'POST',
					body: `${details.payer.name.given_name} ${details.payer.name.surname} ${details.payer.email_address}`
				});
				console.log('the license is...');
				const license = await response.text();
				console.log(license);
				setState({paid:true, license:license });
			}}
	    />
	</PayPalScriptProvider>
	{state.license && <div>
		Thank you for your payment. Your license code is:
		<br/>
		<br/>
		<b>{state.license}</b>
		<br/>
		<br/>
		Please, copy and paste the whole line including digits, your name and email address into RegmagiK license code input.
		<br/>
		<br/>
		Also, save it if you need it later... Enjoy your new tool.
	</div>}
	{state.paid && <div>If you don't see your license code above after making a payment or you need help using it, 
		please <a href='/contact'>contact us</a>.
	</div>}
  </Layout>
);
}
export default PaymentPage
