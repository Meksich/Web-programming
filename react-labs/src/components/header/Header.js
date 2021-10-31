import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import logo from '../../res/Ship-logo.svg';
import { NavLink } from 'react-router-dom';
import HeaderForm from './HeaderForm.js';
import { NavDiv } from './Header.styles';


const Header = (props) => {
    return (
        <header style={{ height: 60 }} className="d-flex bg-light justify-content-between">
            <div className="d-flex mx-4">
                <Image style={{ maxWidth: 40 }} src={logo} />
                <a className="navbar-brand my-2 mx-4 text-dark">Ship Viewer</a>
            </div>
            <NavDiv className="d-flex">
                <Nav>
                    <Nav.Item>
                        <NavLink className="nav-link bg-light border-0 text-dark py-3" to={'/'}>Home</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink className="nav-link bg-light border-0 text-dark py-3" to={'/catalog'}>Catalog</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink className="nav-link bg-light border-0 text-dark py-3" to={'/cart'}>Cart</NavLink>
                    </Nav.Item>
                </Nav>
            </NavDiv>
            <HeaderForm isSearchEnabled={props.isSearchEnabled}/>
        </header>
    );
}

export default Header;