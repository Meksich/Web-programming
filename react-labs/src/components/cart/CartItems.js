import { CartItem } from "./CartItem.js";
import { NoItems, Pricing } from './Cart.styles';
import { useSelector } from 'react-redux';


const CartItems = () => {
    const cartItems = useSelector((state) => state.cartItems.cartItems);

    const itemsList = cartItems.map((data) => (
        <CartItem data={data} />
    ));

    return (
        <>
            {cartItems.length === 0 ? <NoItems>There are no items in your cart, so go back and order some ships immediately</NoItems> :

                <div>
                    <div>{itemsList}</div>
                    <Pricing className="display-1 fs-3 fw-normal text-dark py-3">Total price: ${cartItems.reduce((cur_sum, next_item) => {
                        return cur_sum + parseInt(next_item.price)*next_item.amount;
                    }, 0)}
                    </Pricing>
                </div>
            }
        </>
    );
};

export default CartItems;