import 'bootstrap/dist/css/bootstrap.min.css'
import { StyledHeader, CardWrapper, CardDeck } from './Main.styles';
import CardItem from './CardItem.js';
import {data} from '../../res/data/data';


const MainBottom = () => {
    return (
        <div>
            <StyledHeader className="pt-4">Take a look at our new ships -_-</StyledHeader>
            <CardDeck className="m-3">
            <CardWrapper>
                {data.slice(0, data.length/2).map(({ title, tonnage, capacity, image, price }, idx) => (
                    <CardItem
                        title={title}
                        tonnage={tonnage}
                        image={image}
                        capacity={capacity}
                        price={price}
                        id={idx}
                    />
                ))}
            </CardWrapper>
            </CardDeck>
        </div>
    );
}

export default MainBottom;