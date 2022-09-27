import React from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { useState } from 'react';

export default function PaypaleCheckOutButton(props) {
    const item = props.product;
    const [paidFor, setPaidFor] = useState(false);
    const handleApprove = (orderId) => {
        // Call backend function to fulfill order
    
        // if response is success
        setPaidFor(true);
        // Refresh user's account or subscription status
    
        // if response is error
        // alert("Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at support@designcode.io for assistance.");
      };
    
      if (paidFor) {
        // Display success message, modal or redirect user to success page
        console.log("Thank you for your purchase!");
        }
    
    const [error, setError] = useState(null);

    if (error) {
    // Display error message, modal or redirect user to error page
    console.log(error);
    }    
  return (
    <>
        <PayPalButtons 
         style = {{
          layout: 'horizontal'
      }}
            createOrder={(data,actions) =>
            {
                return actions.order.create({
                    purchase_units : [
                        {
                            description : item.product.title,
                            amount : {
                                value : item.product.price * item.qty
                            }
                        }
                    ]
                })
            }} 

            onApprove={async (data, actions) => {
                const order = await actions.order.capture(); 
                console.log("order", order);
              
                handleApprove(data.orderID);
            }}

            onError={(err) => {
                setError(err);
                console.error("PayPal Checkout onError", err);
            }}
            
            onClick={(data, actions) => {
                // Validate on button click, client or server side
                const hasAlreadyBoughtCourse = false;
              
                if (hasAlreadyBoughtCourse) {
                  setError(
                    "You already bought this course. Go to your account to view your list of courses."
                  );
              
                  return actions.reject();
                } else {
                  return actions.resolve();
                }
              }}
        />
    </>
  )
}
