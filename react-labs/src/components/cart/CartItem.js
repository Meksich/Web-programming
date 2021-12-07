import 'bootstrap/dist/css/bootstrap.min.css';
import { CartItemStyled, TitleStyled, IncreaseButton, Amount, DecreaseButton } from './Cart.styles';
import Image from 'react-bootstrap/Image';
import { increaseAmount, decreaseAmount, removeFromCart } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

export const CartItem = (props) => {
    const cartItems = useSelector((state) => state.cartItems.cartItems);
    let dispatch = useDispatch();



    const amountIncrease = () => {
        dispatch(increaseAmount(props.data.id, 1));
    }

    const amountDecrease = () => {
        let item = cartItems.find((cartItem) => cartItem.id === props.data.id);
        if (item.amount === 1) {
            dispatch(removeFromCart(props.data.id));
        } else {
            dispatch(decreaseAmount(props.data.id, 1));
        }
    }

    return (
        <CartItemStyled className="d-flex justify-content-between">
            <Image style={{ width: '220px' }} src={props.data.image} />
            <TitleStyled>{props.data.title}</TitleStyled>
            <div className="d-flex">
                <IncreaseButton onClick={amountIncrease}>+</IncreaseButton>
                <Amount>{props.data.amount}</Amount>
                <DecreaseButton onClick={amountDecrease}>-</DecreaseButton>
            </div>
        </CartItemStyled>
    );
};