import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const Order = () => (

    <Container 
        maxWidth="100%" 
        style={{
            padding:'0px', 
            top: '10vh',
            position: 'relative'
        }}
    >
        <Box sx={{ height: '45vh', opacity: 0.5}} />

        <Container >
            <Button variant="contained">Contained</Button>
        </Container>
        
        <Box sx={{ bgcolor: 'green', height: '45vh', opacity: 0.5}} />
    </Container>
)

export default Order;