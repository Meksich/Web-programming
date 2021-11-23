import 'bootstrap/dist/css/bootstrap.min.css'
import FilterArea from './filter/FilterArea';
import { StyledHeader, CardWrapper, CardDeck } from './Catalog.styles';
import CardItem from '../main/CardItem';
import CatalogContext from '../../contexts/CatalogContext';
import React, { useState, useEffect, useContext } from 'react';
import { getShipList } from '../../api/Api';
import {Loading} from "../loading/Loading";

const Catalog = () => {
    let { setDataRender } = useContext(CatalogContext);
    const { dataRender } = useContext(CatalogContext);
    const { filters } = useContext(CatalogContext);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(false);
        getShipList(filters.shipClass, filters.destination).then(res => {
            if (filters.sortOrder == "asc")
                res.sort((ship1, ship2) => ship1.price - ship2.price);
            else
                res.sort((ship1, ship2) => ship2.price - ship1.price);
            setDataRender(res);
            setIsLoaded(true);
        });
    }, [filters]);

    return (
        <div>
            <FilterArea />
            <StyledHeader className="pt-4">Best ships in our collection</StyledHeader>
            <CardDeck className="m-3">
                <CardWrapper className="flex-wrap">
                    {isLoaded ? dataRender.slice(0, dataRender.length / 2).map(({ title, tonnage, capacity, image, price, id }) => (
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
                <CardWrapper className="flex-wrap">
                    {isLoaded ? dataRender.slice(dataRender.length / 2, dataRender.length).map(({ title, tonnage, capacity, image, price, id }) => (
                        <CardItem
                            title={title}
                            tonnage={tonnage}
                            image={image}
                            capacity={capacity}
                            price={price}
                            id={id}
                        />
                    )) : <div></div>}
                </CardWrapper>
            </CardDeck>
        </div>
    )
}

export default Catalog;