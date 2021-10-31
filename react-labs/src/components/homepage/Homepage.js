
import Main from './main/Main';
import Header from '../header/Header';

const Homepage = () => {
    return (
        <div>
            <Header isSearchEnabled={false} />
            <Main />
        </div>
    );
}

export default Homepage;