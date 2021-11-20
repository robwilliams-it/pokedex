
import react, { createContext } from 'react';
import { Container, Typography, Grid, Box, List } from "@mui/material";
import { typography } from "@mui/system";
import BaseStats from './baseStat.js';
import Divider from '@mui/material/Divider';

const PokeMoves = (props) => {
    const { pokeMoves } = props || {};

    const renderPokeMoves = () => {
        if (pokeMoves.moves) {
            return (
                <Box 
                    sx={{height: '100%', overflow: 'scroll'}}
                >
                    {pokeMoves.moves.map((atk, index)=>{
                        return <Box> <Typography key={index}>{atk}</Typography> <Divider/> </Box> 
                    })} 
                </Box>
            )
        } else {
            return (
                <Typography > No Moves </Typography>
            )
        }
    }

    return (
        <Container sx={{ height: '200px', maxHeight: '100%', backgroundColor:'ghostwhite'}}>
            { renderPokeMoves() }
        </Container>
    )
}

export default PokeMoves;