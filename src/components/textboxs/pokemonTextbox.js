import Paper from '@mui/material/Card';
import Grow from '@mui/material/Grow';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const PokemonTextBox = () => (
    <Paper elevation={0}  sx={{ flexShrink: 0, mx: '10px'}} >
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        > 
            <Typography variant="h3" gutterBottom component="div">
                Gotta Cath A Few!
            </Typography>
            <Container 
                maxWidth="100%" 
            >
            <Typography variant="subtitle" gutterBottom component="div">
                Pokemon was one of my favorite games growing up. Fun fact I never beat the first one. 
                I never realized you were supposed to check the trash cans for the means to access the third gym.
                I kept backtracking looking for the pokeflut to get Snorelax to move. :-(
            </Typography>
            <br/>
            </Container>
        </Grid>
   </Paper>
)

export default PokemonTextBox;