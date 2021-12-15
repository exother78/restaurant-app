import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import success from './icons/check.png'
import celeb from './icons/celebration.png'
import './OrderSuccess.css'

const OrderSuccess = () => {


    const [order, setOrder] = useState({})
    const [error, setError] = useState(null)



    const params = useParams()


    const getOrder = useCallback(async () => {
        try {
            const orderr = await axios.get(`/api/findorder/${params.orderID}`)
            setOrder(orderr.data.order)
            return orderr
        } catch (error) {
            setError('No Order found')
        }
    }, [params.orderID])

    useEffect(() => {
        getOrder()
    }, [getOrder])

    if (error) {
        setTimeout(() => {
            setError(null);
        }, 2000);
    }
    return (
        <div className='order__success'>
            {error && <div className="error__box">{error}</div>}


            <a href="/" className='order__success-back-link'>Go back to home page</a>



            <div className="order__success-container">
                <img src={success} alt="" width='58' height='58' />
                <div className="order__success-confirm">
                    <h2>Order Confirmed</h2>
                    <img src={celeb} alt="" width='35' height='35' />
                </div>


                <p className='order__success-success-text'>Your order has been successfully placed. The Items may arrive at your given destination in 45 minutes </p>

                <p className='order__success-ordnum-text'>Your Order Number is: {order?.orderNumber}</p>


                <span className='order__success-warning-text' >(*Please remember this order number)</span>
                {order?.total && <p className='order__success-total-text'>Total Amount Received: <span> {order?.total + order?.deliveryCharges} €</span></p>}

                <p className='order__success-inconv-text'>Please call on this number for any kind of inconvenience: +39 059 3968633</p>

            </div>


        </div>
    )
}

export default OrderSuccess
