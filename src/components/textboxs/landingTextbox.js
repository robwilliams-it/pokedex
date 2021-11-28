import Paper from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const LandingTextBox = () => (
    <Paper elevation={3} s={12} m={8}>
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
            <Typography variant="h4" gutterBottom component="div">
                I hope you enjoy my humble little PokeDex lite.
            </Typography>
            <br/>
            </Container>
        </Grid>
   </Paper>
)


export default LandingTextBox;