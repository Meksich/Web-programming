import 'bootstrap/dist/css/bootstrap.min.css'
import MainTop from './MainTop.js';
import MainBottom from './MainBottom.js';


const Main = () => {
    return (
        <div>
            <MainTop />
            <MainBottom numberOfCards={3}/>
        </div>
    );
}

export default Main;