import React, { Fragment } from 'react';

const ProductCheckout = () => {
    return (
        <Fragment>
            <div className="order">
                <h3>Your Order</h3>
            </div>
            <hr />
            <div className="order-body">
                <h5 className="text-center">Your Order is empty now!</h5>
                <hr />
                <div className="order-items">
                    <dl className="dl-horizontal">
                        <dt>Mango:</dt>
                        <dd>1</dd>
                    </dl>
                    <dl className="dl-horizontal">
                        <dt>Tax:</dt>
                        <dd>$1.00</dd>
                    </dl>
                    <hr />
                    <dl className="dl-horizontal">
                        <dt>Total:</dt>
                        <dd>$1.00</dd>
                    </dl>
                </div>
            </div>
            <a className="btn btn-info checkout" href="/">Go To CheckOut</a>
        </Fragment>

    );
};


export default ProductCheckout;
