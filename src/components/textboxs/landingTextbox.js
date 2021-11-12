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
                The NY skyline
                <hr/>
            </Typography>
            <Container 
                maxWidth="100%" 
            >
            <Typography variant="subtitle" gutterBottom component="div">
                Not very impressive I know. 
                It's just a picture with an overlapping text box.
                But I thought it might be nice to start off with where I am from.
            </Typography>
            <br/>
            </Container>
        </Grid>
   </Paper>
)

export default LandingTextBox;