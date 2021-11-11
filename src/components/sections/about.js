import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const About = () => (
    <Container 
        maxWidth="100%" 
        style={{
            padding:'0px', 
            top: '10vh',
            position: 'relative',
        }}
    >

        <Box sx={{ height: '50vh', opacity: 0.5}} />
        <Box sx={{ bgcolor: 'red', height: '50vh', opacity: 0.5}} />

    </Container>
)

export default About;