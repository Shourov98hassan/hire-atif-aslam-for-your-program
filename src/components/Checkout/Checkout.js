
import React from 'react';

import { Link, useParams } from 'react-router-dom';

const Checkout = () => {
    const { checkoutId } = useParams();
    return (
        <div>
            <h1 className='text-center mt-2'>This is checkout of: {checkoutId}</h1>
            <hr />
         

            <div className='text-center'>
               <h5>Are you sure check out this?</h5> <input type="text" placeholder="write Yes / No" /><br />

                <Link to='/proceedcheckout'>
                    <button className='btn btn-primary mt-2'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default Checkout;