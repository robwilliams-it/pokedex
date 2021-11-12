import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grow from '@mui/material/Grow';
import LandingTextBox from '../textboxs/landingTextbox.js';

// const textBoxSize = window.screen.width > 1000 ? '50%' : '100%';

const Landing = () => {
    const getWidth = () => {
        if (window.screen.width > 1000) {
            return '500px' ;
        } else {
            return window.screen.width.toString();
        }
    }

    return(
        <Container 
            id='landing'
            maxWidth="100%" 
            style={{
                padding:'0px', 
                top: '10vh',
                position: 'relative',
            }}
        >
            <Box sx={{ height: '50vh', opacity: 0.5}} > 
                <CardMedia
                    component="img"
                    height="100%"
                    image="../../images/sunset-ny.jpg"
                />
            </Box>

            <Box 
                sx={{ height: '50vh'}} 
            >
                <Container  
                    style={{
                        position: 'relative',
                        maxWidth: getWidth(),
                        top: '-5em'
                    }}
                >
                <LandingTextBox />
                </Container>
            </Box>

        </Container>
    )
}

export default Landing;