
import react, { createContext } from 'react';
import { Container, Typography, Grid, Box, List } from "@mui/material";
import { typography } from "@mui/system";
import BaseStats from './baseStat.js';
import Divider from '@mui/material/Divider';

const PokeData = (props) => {
    const pokeMetaData = props.pokeMetaData || {};
    const PokeContext = createContext(pokeMetaData);

    const renderPokeMoves = () => {
        if (pokeMetaData.moves) {
            return (
                <Box 
                    sx={{width: '100%', height: '100%', overflow: 'scroll'}}
                >
                    {pokeMetaData.moves.map((atk, index)=>{
                        return <div> <Typography key={index}>{atk}</Typography> <Divider/> </div> 
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
        <Container id="data" sx={{height: '100%'}}>

            <Grid
                container
                direction="column"
                justifyContent="center"
                sx={{height: '20%'}}
            > 


                <Grid item sx={{height: '50%'}}>
                    <Grid
                        id='topRow'
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="stretch"
                        sx={{width:'100%', height: '100%'}}
                    >
                        <Grid item 
                            id='moves'
                            sx={{width:'50%', height: '80%'}}
                        >
                            <Box id='title' sx={{padding:1}}>
                                <Typography variant="h4">Moves</Typography>
                            </Box>
                            <Box 
                                id='list'
                                sx={{width: '100%', height: '100%', backgroundColor: 'ghostwhite', border: '2px solid grey'}}
                            >
                                { renderPokeMoves() }
                            </Box>
                        </Grid>


                        
                    </Grid>
                </Grid>
            

                
            </Grid>


        </Container>
    )
}

export default PokeData;