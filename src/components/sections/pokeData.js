
import { Container, Typography, Grid, Box } from "@mui/material";
import { typography } from "@mui/system";

const PokeData = (props) => {
    const pokeMetaData = props.pokeMetaData || {};

    const renderPokeMoves = () => {
        if (pokeMetaData.moves) {
            return (
                <Box sx={{height: '100%', overflow: 'scroll'}}>
                    {pokeMetaData.moves.map((atk, index)=>{
                        return <Typography key={index}>{atk}</Typography>
                    })}
                </Box>
            )
        } else {
            return (
                <Typography > No Moves </Typography>
            )
        }
    }

    const renderPokeAbilities = () => {
        if (pokeMetaData.abilities) {
            return (
                <Container sx={{height: '100%', overflow: 'scroll'}}>
                    {pokeMetaData.abilities.map((atk, index)=>{
                        return <Typography key={index}>{atk}</Typography>
                    })}
                </Container>
            )
        } 
    }

    return (
        <Container sx={{height: '100%'}}>

            <Grid
                id='topRow'
                container
                direction="row"
                sx={{width:'100%', height: '50%'}}
            >
                <Grid item 
                    id='moves'
                    sx={{width:'50%', height: '100%'}}
                >
                    <Box id='title' sx={{padding:1}}>
                        <Typography>Moves</Typography>
                    </Box>
                    <Container 
                        id='list'
                        sx={{width: '100%', height: '90%', backgroundColor:'ghostWhite'}}
                    >
                        { renderPokeMoves() }
                    </Container>
                </Grid>


                <Grid item
                    id='abilities'
                    sx={{width:'50%', height: '100%'}}
                >  
                    <Box id='title' sx={{padding:1}}>
                        <Typography>Abilities</Typography>
                    </Box>
                    <Container sx={{height: '90%'}}>
                        { renderPokeAbilities() }
                    </Container>
                </Grid>
            </Grid>

            <Grid
                container
                id='bottom'
                direction="row"
                sx={{width:'100%', height: '50%'}}
            >
                <Box id='title' sx={{padding:1}}>
                    <Typography> No Evolutions </Typography>
                </Box>
            </Grid>

        </Container>
    )
}

export default PokeData;