
import react, { createContext } from 'react';
import { Container, Typography, Grid, Box, List, Card } from "@mui/material";
import { typography } from "@mui/system";
import BaseStats from './baseStat.js';
import Divider from '@mui/material/Divider';
import Pokemon from './pokemon.js';

const PokeMoves = (props) => {
    const { pokeMoves } = props || {};

    const renderPokeMoves = () => {
        if (pokeMoves.moves && pokeMoves.moves.length > 0) {
            return (
                <Grid 
                    container
                    spacing={1}
                    sx={{
                        height: '100%', 
                        overflow: 'scroll', 
                        border: '1px solid black',
                        pb: 1
                    }}
                >
                    {pokeMoves.moves.map((atk, index)=>{
                        return (
                            <Grid item key={index}> 
                                <Card> 
                                    <Typography sx={{px:1}}>{atk}</Typography> 
                                </Card> 
                            </Grid>
                        )
                    })} 
                </Grid>
            )
        } else {
            return (
                <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx = {{ 
                    height: '100%',
                    width: '100%'
                }}
                >
                    <Typography >...Ugh, nothing to see here I guess?</Typography>
                </Grid>
            )
        }
    }

    return (
        <Container 
            sx={{ 
                height: '200px', 
                maxHeight: '100%',
                py: 1
            }}
        >
            { renderPokeMoves() }
        </Container>
    )
}

export default PokeMoves;