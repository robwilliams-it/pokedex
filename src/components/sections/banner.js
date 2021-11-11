import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Banner = () => (
    <Container 
        maxWidth="100%" 
        style={{
            padding:'0px', 
            top: '0px', 
            position: 'fixed', 
            zIndex: '1'
        }}
    >
        
        <Box 
            sx={{ 
                bgcolor: 'black', 
                height: '10vh', 
            }} 
        />

    </Container>
)

export default Banner;

