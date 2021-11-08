import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap'

const CardItem = ({ title='No title.', tonnage, image, capacity }) =>{
    return(
        <Card style={{ width: '220px' }}>
            <Card.Img variant = "top" src={image} />
            <Card.Body className="">
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                Capacity: {capacity} passangers
                Tonnage: {tonnage} GRT
            </Card.Text>
            </Card.Body>
            <small className="d-flex justify-content-around py-3">
                <Button variant="outline-info" className="px-4 py-0 mr-5">Show More</Button>
            </small>
        </Card>
    );
}

export default CardItem