import { CartItem } from "./CartItem.js";
import CatalogContext from '../../contexts/CatalogContext';
import { Pricing } from './Cart.styles';
import React, { useContext } from 'react';

const CartItems = () => {
    const { dataRender } = useContext(CatalogContext);
    const itemsList = dataRender.map((data) => (
        <CartItem data={data} />
    ));

    return (
        <>
            {dataRender.length === 0 ? <h1>There are no items in your cart</h1> :

                <div>
                    <div>{itemsList}</div>
                    <Pricing className="display-1 fs-3 fw-normal text-dark py-3">Total price: ${dataRender.reduce((cur_sum, next_item) => {
                        return cur_sum + parseInt(next_item.price);
                    }, 0)}
                    </Pricing>
                </div>
            }
        </>
    );
};

export default CartItems;