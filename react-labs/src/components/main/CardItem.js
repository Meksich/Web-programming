import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap'
import Republic_gunship from '../../res/Republic-gunship.jpg'

const CardItem = () =>{
    return(
        <Card style={{ width: '220px' }}>
            <Card.Img variant = "top" src={Republic_gunship} />
            <Card.Body className="">
            <Card.Title>Republic gunship</Card.Title>
            <Card.Text>
                Capacity: 30 passangers
                Tonnage: 80 GRT
            </Card.Text>
            </Card.Body>
            <small className="d-flex justify-content-around py-3">
                <Button variant="outline-info" className="px-4 py-0 mr-5">Edit</Button>
                <Button variant="outline-danger" className="px-3 py-0">Delete</Button>
            </small>
        </Card>
    );
}

export default CardItem