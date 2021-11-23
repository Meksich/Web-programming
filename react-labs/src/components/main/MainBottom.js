import 'bootstrap/dist/css/bootstrap.min.css'
import { StyledHeader, CardWrapper, CardDeck } from './Main.styles';
import CardItem from './CardItem.js';
import React, { useState, useEffect } from 'react';
import { getShipList } from '../../api/Api';
import {Loading} from "../loading/Loading";

const MainBottom = ({ numberOfCards }) => {
    const [shipList, setShipList] = useState([]);
    const [shipListSize, setShipListSize] = useState(numberOfCards ? numberOfCards : 0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() =>{
        setIsLoaded(false);
        getShipList().then(res => {
            setShipList(res.slice(0, shipListSize));
            setIsLoaded(true);
        });
    }, [shipListSize]);


    return (
        <div>
            <StyledHeader className="pt-4">Take a look at our new ships -_-</StyledHeader>
            <CardDeck className="m-3">
                <CardWrapper>
                    {isLoaded ? shipList.map(({ title, tonnage, capacity, image, price, id }) => (
                        <CardItem
                            title={title}
                            tonnage={tonnage}
                            image={image}
                            capacity={capacity}
                            price={price}
                            id={id}
                        />
                    )) : <Loading />}
                </CardWrapper>
            </CardDeck>
        </div>
    );
}

export default MainBottom;