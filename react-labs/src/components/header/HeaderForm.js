import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import HeaderContext from '../../contexts/HeaderContext';

const HeaderForm = () => {
    const { isSearchEnabled } = useContext(HeaderContext);
    return (
        <div className="d-flex my-2" style={{ maxHeight: 40 }}>
            {isSearchEnabled &&
                <form class="form-inline d-flex nav_form">
                    <input class="form-control border-dark rounded-pill mx-2" type="search" placeholder="Type something..." aria-label="Search"
                        id="search-input" />
                    <Button variant="outline-secondary rounded-pill" className="mx-3">Find</Button>
                    <Button variant="outline-secondary rounded-pill" className="mx-1">Clear</Button>
                </form>
            }
        </div>
    )
}

export default HeaderForm;