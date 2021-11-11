import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { CardMedia } from '@mui/material';

const About = () => (
    <Container 
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

        <Box sx={{ bgcolor: 'red', height: '50vh', opacity: 0.5}} />

    </Container>
)

export default About;