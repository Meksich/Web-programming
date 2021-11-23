import 'bootstrap/dist/css/bootstrap.min.css'
import FilterArea from './filter/FilterArea';
import { StyledHeader, CardWrapper, CardDeck } from './Catalog.styles';
import CardItem from '../main/CardItem';
import CatalogContext from '../../contexts/CatalogContext';
import { useContext } from 'react';

const Catalog = () => {

    const {dataRender} = useContext(CatalogContext);
    return (
        <div>
            <FilterArea />
            <StyledHeader className="pt-4">Best ships in our collection</StyledHeader>
            <CardDeck className="m-3">
                <CardWrapper className="flex-wrap">
                    {dataRender.slice(0, dataRender.length/2).map(({ title, tonnage, capacity, image,  price, id}) => (
                        <CardItem
                            title={title}
                            tonnage={tonnage}
                            image={image}
                            capacity={capacity}
                            price={price}
                            id={id}
                        />
                    ))}
                </CardWrapper>
                <CardWrapper className="flex-wrap">
                    {dataRender.slice(dataRender.length/2, dataRender.length).map(({ title, tonnage, capacity, image,  price, id}) => (
                        <CardItem
                            title={title}
                            tonnage={tonnage}
                            image={image}
                            capacity={capacity}
                            price={price}
                            id={id}
                        />
                    ))}
                </CardWrapper>
            </CardDeck>
        </div>
    )
}

export default Catalog;