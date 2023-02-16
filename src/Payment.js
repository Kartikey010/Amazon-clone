import React from 'react'
import "./Payment.css"
import { useStateValue } from './StateProvider'
import CheckoutProduct from "./CheckoutProduct"
import { Link } from 'react-router-dom';
import Header from "./Header"
import GooglePayButton from "@google-pay/button-react"
import { getBasketTotal } from './reducer';

function Payment() {

  const [{basket,user},dispatch] =useStateValue();

  return (
    <>
      <Header/>
    <div className='payment'>
    <div className='payment_container'>
     <h1>
      checkout(<Link to="/checkout">{basket?.length} items</Link>)
     </h1>

     {/* payment section -- delivery address */}
     <div className='payment_section'>
        <div className='payment_title'>
          <h3>Delivey address</h3>
        </div>
        <div className='payment_address'>
          <p>{user?.email}</p>
          <p>123 React Lane</p>
          <p>Los angeles,CA</p>
        
        </div>
     </div>

     {/* payment section -- review items */}
     <div className='payment_section'>
        <div className='payment_title'>
          <h3>Review items and delivery</h3>
        </div>
        <div className='payment_items'>
          {basket.map(item=>(
            <CheckoutProduct
            id={item.title}
            image={item.image}
            title={item.title}
            price={item.price}
            rating={item.rating}
            />
          ))}
        </div>
     </div>

     {/* payment section -- payment method */}
     <div className='payment_section'>
        <div className='payment_title'>
          <h3>Payment Method</h3>
        </div>
        <div className='payment_details'>
          {/* ALL THE STRIPE WORK */}
          <GooglePayButton
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: "10",
      currencyCode: 'USD',
      countryCode: 'US',
    },
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
  }}
/>
        </div>
     </div>

    </div>
  </div>
  </>
  )
}

export default Payment