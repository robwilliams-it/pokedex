
import { Grid, Typography, Box, Container } from "@mui/material";
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
                        return (stat.number / 51);
                    }
                    return (
                        <Grid item sx={{width: '100%'}}>
                            <Grid
                                container
                                direction="row"
                                justifyContent="strech"
                                alignItems="center"
                                sx={{width: '100%'}}
                            >
                                <Box
                                    sx={{width: '125px'}}
                                > 
                                    <Typography component="legend" >{stat.name}</Typography>
                                </Box>
                                <Rating 
                                    sx={{width: '60%'}}
                                    name={stat.name} 
                                    value={getValue()} max={5} readOnly 
                                    precision={0.25}
                                    sx={{color: '#ff6d75'}}
                                    icon={<CatchingPokemonIcon color={'red'}/>}
                                    emptyIcon={<CatchingPokemonIcon />}
                                    
                                />
                                <Grid
                                    id="NUMBER"
                                    container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    sx={{width: '10%'}}
                                > 
                                    <Grid item>
                                        <Typography>{stat.number}</Typography>
                                    </Grid>
                                </Grid>
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
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ 
                width: '100%', 
                }}
        >
            <Grid item>
                <Typography variant="h4"> Base Stat: 0 to 255 </Typography>
            </Grid>

            <Grid item >
                <Container >
                    {renderStats()}
                </Container>
            </Grid>
        </Grid>
    )
}

export default BaseStats;