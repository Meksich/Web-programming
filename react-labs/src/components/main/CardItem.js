import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'
import { CardButton } from './Card.styles';
import { Link } from "react-router-dom";
import HeaderContext from '../../contexts/HeaderContext';
import { useContext } from 'react';

const CardItem = ({ title='No title.', tonnage, image, capacity, price, id }) =>{
    const { setIsSearchEnabled } = useContext(HeaderContext);
    return(
        <Card style={{ width: '220px' }}>
            <Card.Img variant = "top" src={image} />
            <Card.Body className="">
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                Capacity: {capacity} passangers
                Tonnage: {tonnage} GRT
                <br/>
            </Card.Text>
            <Card.Text><strong>
                Price: {price} bucks
                </strong></Card.Text>
            </Card.Body>
            <small className="d-flex justify-content-around py-3">
            <Link to={"/itempage/"+ id} onClick={() => {setIsSearchEnabled(false)}}>
                <CardButton className="px-4 py-0 mr-5">Show More</CardButton>
                </Link>
            </small>
        </Card>
    );
}



export default CardItem