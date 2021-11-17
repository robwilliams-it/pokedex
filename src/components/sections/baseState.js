import react, { useContext } from 'react';
import { Grid, Card, Typography, Box } from "@mui/material";
import Rating from '@mui/material/Rating';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { PokeContext } from './pokeData.js';




const BaseStats = () => {
    // const stats = useContext(PokeContext);
    {console.log('--------');}
    {console.log(stats);}
    const renderStats = () => {
        return (
            <Box>
                <Typography component="legend">Read only</Typography>
                <Rating 
                    name="read-only" 
                    value={5.5} max={15} readOnly 
                    precision={0.5}
                    sx={{color: '#ff6d75'}}
                    icon={<CatchingPokemonIcon color={'red'}/>}
                    emptyIcon={<CatchingPokemonIcon />}
                    
                />
            </Box> 
        )
    }

    return (
        <Grid 
            id='out' 
            sx={{
                height: '100%', 
                width: '100%', 
                }}
        >
            {renderStats()}
        </Grid>
    )
}

export default BaseStats;