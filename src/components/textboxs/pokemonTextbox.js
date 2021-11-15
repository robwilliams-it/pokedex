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
            <Typography variant="h4" gutterBottom component="div">
                Looks like you caught something!
            </Typography>
            <Container 
                maxWidth="100%" 
            >
            <Typography variant="subtitle" gutterBottom component="div">
                <br/>
                Open it and lets find out whats inside
            </Typography>
            <br/>
            </Container>
        </Grid>
   </Paper>
)

export default PokemonTextBox;