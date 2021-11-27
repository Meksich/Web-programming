import { CartItem } from "./CartItem.js";
import CatalogContext from '../../contexts/CatalogContext';

import React, { useContext } from 'react';

const CartItems = () => {
    const { dataRender } = useContext(CatalogContext);
    const itemsList = dataRender.map((data) => (
        <CartItem data={data}/>
    ));

    return (
        <>
            {dataRender.length === 0 ? (
                <h1 className="cart_no_items_text">There are no items in your cart</h1>
            ) : (
                <div className="cart_items">
                    <div className="cart_items__items">{itemsList}</div>
                    <div className="cart_items__total_price">
                        <p className="cart_items__total_price__label">Total price:</p>
                        <p className="cart_items__total_price__value">
                            $
                            {dataRender.reduce((cur_sum, next_item) => {
                                return cur_sum + next_item.price * next_item.amount;
                            }, 0)}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default CartItems;