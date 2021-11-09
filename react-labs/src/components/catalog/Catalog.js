import 'bootstrap/dist/css/bootstrap.min.css'
import FilterArea from './filter/FilterArea';
import { StyledHeader, CardWrapper, CardDeck } from './Catalog.styles';
import CardItem from '../main/CardItem';
import Venator from '../../res/Venator-class-Star-Ship.jpg';
import Titanic from '../../res/Titanic.jpg';
import Gunship from '../../res/Republic-gunship.jpg';
import OxenfurtTretogor from '../../res/Redanian-oxenfurt-tretogor.jpg';
import Evergreen from '../../res/Evergreen.jpg';
import CosacksSubmarine from '../../res/Cosacks_submarine.jpg';


export const data = [
    {
        title: "Venator Star Ship",
        tonnage: parseInt("8000000"),
        capacity: parseInt("7400"),
        image: Venator,
        price: "3000000",
    },
    {
        title: "Titanic",
        tonnage: parseInt("46328"),
        capacity: parseInt("3320"),
        image: Titanic,
        price: "5000",
    },
    {
        title: "Republic Gunship",
        tonnage: parseInt("30"),
        capacity: parseInt("30"),
        image: Gunship,
        price: "30",
    },
    {
        title: "Oxenfurt Tretogor",
        tonnage: parseInt("1258"),
        capacity: parseInt("82"),
        image: OxenfurtTretogor,
        price: "500",
    },
    {
        title: "Evergreen",
        tonnage: parseInt("100000"),
        capacity: parseInt("120"),
        image: Evergreen,
        price: "20000",
    },
    {
        title: "Cosacks Submarine",
        tonnage: parseInt("0"),
        capacity: parseInt("5"),
        image: CosacksSubmarine,
        price: "300",
    },
];

const Catalog = () => {
    return (
        <div>
            <FilterArea />
            <StyledHeader className="pt-4">Best ships in our collection</StyledHeader>
            <CardDeck className="m-3">
                <CardWrapper className="flex-wrap">
                    {data.slice(0, data.length/2).map(({ title, tonnage, capacity, image,  price}, idx) => (
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
                <CardWrapper className="flex-wrap">
                    {data.slice(data.length/2, data.length).map(({ title, tonnage, capacity, image,  price}, idx) => (
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
    )
}

export default Catalog;