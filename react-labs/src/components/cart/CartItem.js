import 'bootstrap/dist/css/bootstrap.min.css';
import { CartItemStyled, TitleStyled, IncreaseButton, Amount, DecreaseButton } from './Cart.styles';
import Image from 'react-bootstrap/Image';

export const CartItem = (props) => {

    return (
        <CartItemStyled className="d-flex justify-content-between">
            <Image style={{ width: '220px' }} src={props.data.image} />
            <TitleStyled>{props.data.title}</TitleStyled>
            <div className="d-flex">
                <IncreaseButton className="cart_item__amount__change_button">+</IncreaseButton>
                <Amount className="cart_item__amount__value">0</Amount>
                <DecreaseButton className="cart_item__amount__change_button">-</DecreaseButton>
            </div>
        </CartItemStyled>
    );
};