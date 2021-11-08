import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, ImageBg, StyledButton, StyledText } from './Main.styles';
import ship_background from '../../res/ship-background.png'

const MainTop = () => {
    return (
        <Container>
            <ImageBg src={ship_background}/>
            <div className="d-flex flex-column align-items-end px-4">
                <h3 className="display-1 fs-3 fw-normal text-dark text-end px-5 py-3">Buy our best Ships!</h3>
                <StyledText>
                    Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not.
                    It’s not a story the Jedi would tell you. It’s a Sith legend.
                    Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise
                    he could use the Force to influence the midichlorians to create life…
                    He had such a knowledge of the dark side that he could even keep the ones
                    he cared about from dying. The dark side of the Force is a pathway to
                    many abilities some consider to be unnatural.
                    He became so powerful… the only thing he was afraid of was losing his power,
                    which eventually, of course, he did. Unfortunately, he taught
                    his apprentice everything he knew, then his apprentice killed him in his sleep.
                    Ironic. He could save others from death, but not himself.
                </StyledText>
                <StyledButton className="btn btn-outline-secondary text-dark border-3">Learn More!</StyledButton>
            </div>
        </Container>
    );
}

export default MainTop;