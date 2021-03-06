import 'bootstrap/dist/css/bootstrap.min.css'
import { StyledHeader, CardWrapper, CardDeck } from './Main.styles';
import CardItem from './CardItem.js';
import Venator from '../../res/Venator-class-Star-Ship.jpg';
import Titanic from '../../res/Titanic.jpg';
import Gunship from '../../res/Republic-gunship.jpg';

const data = [
    {
        title: "Venator Star Ship",
        tonnage: parseInt("8000000"),
        capacity: parseInt("7400"),
        image: Venator,
    },
    {
        title: "Titanic",
        tonnage: parseInt("46328"),
        capacity: parseInt("3320"),
        image: Titanic,
    },
    {
        title: "Republic Gunship",
        tonnage: parseInt("30"),
        capacity: parseInt("30"),
        image: Gunship,
    },
];

const MainBottom = () => {
    return (
        <div>
            <StyledHeader className="pt-4">Take a look at our new ships -_-</StyledHeader>
            <CardDeck className="m-3">
            <CardWrapper>
                {data.map(({ title, tonnage, capacity, image }, idx) => (
                    <CardItem
                        title={title}
                        tonnage={tonnage}
                        image={image}
                        capacity={capacity}
                        id={idx}
                    />
                ))}
            </CardWrapper>
            </CardDeck>
        </div>
    );
}

export default MainBottom;