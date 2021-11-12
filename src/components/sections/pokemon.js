import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grow from '@mui/material/Grow';
import PokemonTextBox from '../textboxs/pokemonTextbox.js';
import Grid from '@mui/material/Grid';

// const textBoxSize = window.screen.width > 1000 ? '50%' : '100%';

const Pokemon = () => {
    const getPokemon = () => {
        
    }

    return(
        <Container 
        id='pokemon'
        maxWidth="100%" 
        style={{
            padding:'0px', 
            top: '10vh',
            position: 'relative',
            height: '100vh'
        }}
        >
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                    height: '100%',
                    width: '100%'
                }}
            >
                <Grid 
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{width: '50%', height: '100%'}} 
                > 
                    <Grid item>
                        <PokemonTextBox />
                    </Grid>
                </Grid>

                <Box sx={{width: '50%', height: '100%'}} > 
                
                </Box>
            </Grid>
        </Container>
    )
}

export default Pokemon;