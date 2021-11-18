import react, { useState } from 'react';
import { Grid, Card, Typography, Box } from "@mui/material";
import Rating from '@mui/material/Rating';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const BaseStats = (props) => {
    const { stats } = props;

    const renderStats = () => {
        return (
            <Box>
                {stats.map((stat)=>{
                    const getValue = () => {
                        return (stat.number / 17);
                    }

                    return (
                        <Box>
                            <Typography component="legend">{stat.name}</Typography>
                            <Rating 
                                name={stat.name} 
                                value={getValue()} max={15} readOnly 
                                precision={0.5}
                                sx={{color: '#ff6d75'}}
                                icon={<CatchingPokemonIcon color={'red'}/>}
                                emptyIcon={<CatchingPokemonIcon />}
                                
                            />
                        </Box>
                    )
                })}
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