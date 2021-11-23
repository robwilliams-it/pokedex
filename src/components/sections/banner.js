import Box from '@mui/material/Box';
import {Container, CardMedia} from '@mui/material/';

const Banner = () => (
    <Container 
        maxWidth="100%" 
        style={{
            padding:'0px', 
            top: '0vh', 
            position: 'fixed', 
            zIndex: '-1',
        }}
    >
        
        <Box
            sx={{ height: '100vh', opacity: 0.2 }}
        >
        
            <CardMedia
                component="img"
                height="100%"
                image="../../images/pokemon_background.jpeg"
            />

        </Box>
    </Container>
)

export default Banner;

