import 'bootstrap/dist/css/bootstrap.min.css';
import { CartWrapper, StyledHeader, GoBackButton, BuyButton, Buttons } from './Cart.styles';
import { Link } from "react-router-dom";

import { useContext } from 'react';
import HeaderContext from '../../contexts/HeaderContext';
import CartItems from './CartItems';


const Cart = () => {
    const { setIsSearchEnabled } = useContext(HeaderContext);
    return (
        <CartWrapper>
            <StyledHeader className="d-flex justify-content-center my-3 mr-4">
                Shopping Cart
            </StyledHeader>
            <CartItems/>
            <Buttons className="d-flex justify-content-between">
                    <Link className="px-3" to={'/catalog'} onClick={() => {
                        setIsSearchEnabled(true)
                    }}>
                        <GoBackButton>Go back</GoBackButton>
                    </Link>
                        <BuyButton>Buy</BuyButton>
                </Buttons>
        </CartWrapper>
    )
}

export default Cart;