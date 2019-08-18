import React from 'react';
import Navigation from './header';
import ProductItems from './products';
import ProductCheckout from './checkout';

const DoughProduct = () => {
    return (
        <section>
            <div className="topbar">
                <h2>Country Dough</h2>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-9 col-md-9 col-sm-12 left-side">
                        <Navigation />
                        <ProductItems />
                    </div>
                    <div className="col-xl-3 col-md-3 col-sm-12">
                        <ProductCheckout />
                    </div>
                </div>
            </div>
        </section>
    );
};


export default DoughProduct;
