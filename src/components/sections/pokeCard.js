import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const PokeCard =(props)=> {
    const pokeProps = props.pokeData || {};
    const handleClick = props.handleClick;

    const renderPokemonName = () => {
        let pokeName = pokeProps.name;
        if (pokeName) {
            pokeName = pokeName[0].toUpperCase() + pokeName.slice(1);
            return (
                <Typography gutterBottom variant="h3" component="div">
                    {pokeName}
                </Typography>
            )
        } else {
            return (
                <Typography gutterBottom variant="h3" component="div">
                    Click It!
                </Typography>
            )
        }
    }

    const renderPokemonType = () => {
        if (pokeProps.type && pokeProps.type.length > 0) {
            for(var i = 0; i < pokeProps.type.length; i++) {
                let type = pokeProps.type[i];
                type = type[0].toUpperCase() + type.slice(1);
                pokeProps.type[i] = type;
            }
            return (
                pokeProps.type.map((type)=>(
                <Typography gutterBottom variant="h5" component="div">
                    { type }
                </Typography>
                ))
            )
        }
    }

    return (
        <Card
            sx={{height: '100%'}}
            onClick = {handleClick}
            elevation={0}
        >
            {/* <CardActionArea sx={{height: '100%'}}> */}
                

                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{height: '100%'}}
                >

                    <Grid
                        id='pokemonName'
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                    >
                        {renderPokemonName()}
                    </Grid>

                    <Grid
                        id='pokemonType(s)'
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                    >
                        {renderPokemonType()}
                    </Grid>
                    <CardMedia
                        component="img"
                        image= {pokeProps.image || '../images/pokeball.png'}
                    />

                </Grid>
            {/* </CardActionArea> */}
        </Card>
    );
}

export default PokeCard;