import Paper from '@mui/material/Card';
import Grow from '@mui/material/Grow';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const LandingTextBox = () => (
    <Paper elevation={3}  sx={{ flexShrink: 0 }} >
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        > 
            <Typography variant="h3" gutterBottom component="div">
                Gotta Catch A Few!
                <hr/>
            </Typography>
            <Container 
                maxWidth="100%" 
            >
            <Typography variant="subtitle" gutterBottom component="div">
                So initially I started with an image of the NY skyline but I figured this image would be more appropriate since I decided to use to create this project using the pokeAPI
            </Typography>
            <br/>
            </Container>
        </Grid>
   </Paper>
)

export default LandingTextBox;