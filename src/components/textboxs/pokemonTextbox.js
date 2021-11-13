import Paper from '@mui/material/Card';
import Grow from '@mui/material/Grow';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const PokemonTextBox = () => (
    <Paper elevation={0}  sx={{ flexShrink: 0}} >
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        > 
            <Typography variant="h3" gutterBottom component="div">
                Gotta Catch A Few!
            </Typography>
            <Container 
                maxWidth="100%" 
            >
            <Typography variant="subtitle" gutterBottom component="div">
                Why is there a pokeball here you may ask.
                The answer is simply, just because!
                <br/><br/>
                Click it and see what happens!
            </Typography>
            <br/>
            </Container>
        </Grid>
   </Paper>
)

export default PokemonTextBox;