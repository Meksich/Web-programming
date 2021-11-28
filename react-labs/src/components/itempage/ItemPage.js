import 'bootstrap/dist/css/bootstrap.min.css'
import { useParams } from 'react-router';
import { descriptions } from '../../res/data/data';
import {
    ImageBg, ItemPageContainer, ItemPageImageWraper,
    ItemPageText, ItemPageInput, InputText, Dropdown, Option,
    ItemPagePrice, GoBackButton, AddToCartButton, Buttons
} from './ItemPage.styles';
import Image from 'react-bootstrap/Image';
import port from '../../res/Port.jpg'
import { Link } from "react-router-dom";
import { useContext } from 'react';
import HeaderContext from '../../contexts/HeaderContext';
import { getShip } from '../../api/Api';
import React, { useState, useEffect } from 'react';
import { Loading } from '../loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increaseAmount } from '../../redux/actions';

const ItemPage = () => {
    const cartItems = useSelector((state) => state.cartItems.cartItems);
    let dispatch = useDispatch();

    const { id } = useParams();
    const [ship, setShip] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(false);
        getShip(id).then(res => {
            setShip(res);
            setIsLoaded(true);
        });
    }, [id]);
    const { setIsSearchEnabled } = useContext(HeaderContext);

    const handleAddToCart = () => {
        let shipsNumber;
        if (document.getElementById("amount").value != ""){
            shipsNumber = parseInt(document.getElementById("amount").value);
        } else {
            shipsNumber = 1;
        }
        if (cartItems.some(item => item.id == id)) {
            dispatch(increaseAmount(id, shipsNumber));
        } else {
            let item = ship;
            item.amount = shipsNumber;
            dispatch(addToCart(item));
        }
    }

    return (
        <ItemPageContainer>
            <div className="d-flex justify-content-around">
                <ImageBg src={port} />
                <ItemPageImageWraper>
                    {isLoaded ? <Image src={ship.image} /> : <Loading />}
                </ItemPageImageWraper>
                <ItemPageText>
                    <h3 className="display-1 fs-3 fw-normal text-dark py-3">{ship.title}</h3>
                    {descriptions[id - 1].description}
                    <div className="d-flex">
                        <div className="d-flex flex-column py-3">
                            <InputText className="font-weight-bold py-3">Enter amount of ships:</InputText>
                            <ItemPageInput id="amount" type="search" placeholder="Amount..." aria-label="Search"/>
                        </div>
                        <div className="d-flex flex-column py-3 px-5">
                            <InputText className="font-weight-bold py-3">Choose color of ship:</InputText>
                            <Dropdown>
                                <Option>Red</Option>
                                <Option>White</Option>
                                <Option>Blue</Option>
                                <Option>Black</Option>
                                <Option>Yellow</Option>
                            </Dropdown>
                        </div>
                    </div>
                </ItemPageText>
            </div>
            <div className="d-flex justify-content-between p-5 mx-5">
                <ItemPagePrice>Price: {ship.price} bucks</ItemPagePrice>
                <Buttons className="d-flex justify-content-between">
                    <Link className="px-3" to={'/catalog'} onClick={() => {
                        setIsSearchEnabled(true)
                    }}>
                        <GoBackButton>Go back</GoBackButton>
                    </Link>
                    <Link to={'/cart'}>
                        <AddToCartButton onClick={handleAddToCart}>Add to cart</AddToCartButton>
                    </Link>
                </Buttons>
            </div>
        </ItemPageContainer>
    )
}

export default ItemPage;