import React from 'react';
import OrderProducts from './order-products/OrderProducts';
import PriceDetails from './price-details/PriceDetails';

function OrderSummary(props) {
    return(
        <div>
            <h1>Order Summary</h1>
            <OrderProducts />
            <PriceDetails />
        </div>
    );
}
export default OrderSummary;