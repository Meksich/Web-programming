import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'
import { CardButton } from './Card.styles';

const CardItem = ({ title='No title.', tonnage, image, capacity, price }) =>{
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
                <CardButton className="px-4 py-0 mr-5">Show More</CardButton>
            </small>
        </Card>
    );
}

export default CardItem