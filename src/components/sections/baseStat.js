import react, { useState } from 'react';
import { Grid, Card, Typography, Box, Container } from "@mui/material";
import Rating from '@mui/material/Rating';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const BaseStats = (props) => {
    const { stats } = props;

    const renderStats = () => {
        return (
            <Grid
                container
                id='stats'
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                {stats.map((stat)=>{
                    const getValue = () => {
                        return (stat.number / 17);
                    }
                    return (
                        <Grid item sx={{width: '100%'}}>
                            <Grid
                                container
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                sx={{width: '100%'}}
                            >
                                <Box
                                    sx={{width: '25%'}}
                                > 
                                    <Typography component="legend" style={{float:'left'}}>{stat.name}</Typography>
                                </Box>
                                <Rating 
                                    sx={{width: '60%'}}
                                    name={stat.name} 
                                    value={getValue()} max={15} readOnly 
                                    precision={0.25}
                                    sx={{color: '#ff6d75'}}
                                    icon={<CatchingPokemonIcon color={'red'}/>}
                                    emptyIcon={<CatchingPokemonIcon />}
                                    
                                />
                                <Box
                                    sx={{width: '5%'}}
                                > 
                                    <Typography>{stat.number}</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    )
                })}
            </Grid> 
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
            <Container>
                <Typography variant="h4"> Base Stat From 0 to 255 </Typography>
            </Container>
            {renderStats()}
        </Grid>
    )
}

export default BaseStats;