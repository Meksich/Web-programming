import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import logo from '../../res/Ship-logo.svg';
import Button from 'react-bootstrap/Button';

const Header = () => {
        return (
            <header style={{ height: 60 }} className="d-flex space-between bg-light justify-content-around">
                <div className="d-flex">
                    <Image style={{ maxWidth: 40 }} src={logo} />
                    <a className="navbar-brand my-2 mx-4 text-dark">Ship Viewer</a>
                </div>
                <div className="d-flex">
                    <Nav>
                        <Nav.Item>
                            <Button className="nav-link bg-light border-0 text-dark py-3">Home</Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button className="nav-link bg-light border-0 text-dark py-3">Catalog</Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button className="nav-link bg-light border-0 text-dark py-3">Cart</Button>
                        </Nav.Item>
                    </Nav>
                </div>
                <div className="d-flex my-2" style={{ maxHeight: 40 }}>
                    <Button variant="outline-primary" className="btn btn-outline-primary mx-3">Find</Button>
                    <Button variant="outline-danger" className="btn-outline-danger mx-3">Clear</Button>
                </div>
            </header>
        );
    }

    export default Header;