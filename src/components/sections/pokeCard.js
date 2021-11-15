import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { Box, keyframes } from '@mui/system';

const typeColors = {
    'Bug' : '#A6B91A',
    'Dark' : '#705746',
    'Dragon' : '#6F35FC',
    'Electric' : '#F7D02C',
    'Fairy' : '#D685AD',
    'Fighting' : '#C22E28',
    'Fire' : '#EE8130',
    'Flying' : '#A98FF3' ,
    'Ghost' : '#735797',
    'Grass' : '#7AC74C',
    'Ground' : '#E2BF65',
    'Ice' : '#96D9D6',
    'Normal': '#A8A77A',
    'Poison' : '#A33EA1',
    'Psychic' : '#F95587',
    'Rock' : '#B6A136',
    'Steel' : '#B7B7CE',
    'Water' : '#6390F0',
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(20deg);
  }
  75% {
    transform: rotate(-10deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

const PokeCard =(props)=> {
    const pokeProps = props.pokeData || {};
    const handleClick = props.handleClick;
    const prompt = props.prompt;

    const renderPokemonName = () => {
        let pokeName = pokeProps.name;
        if (pokeName) {
            pokeName = pokeName[0].toUpperCase() + pokeName.slice(1);
            return (
                <Typography gutterBottom variant="h3" component="div">
                    {pokeName}
                </Typography>
            )
        } 
    }

    const getCardElevation = () => {
        if (pokeProps.name) {
            return 3;
        } else {
            return 0;
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
                <Card sx={{backgroundColor: `${typeColors[type]}` }}>
                    <Container>
                        <Typography gutterBottom variant="h5" component="div" sx={{color:'white'}}>
                            { type }
                        </Typography>
                    </Container>
                </Card>
                ))
            )
        }
    }

    const renderPokeImage = () => {
        if (pokeProps.image) {
            return (
            <CardMedia
                component="img"
                image= {pokeProps.image}
                onClick = {handleClick}
            />
            )
        } else {
            return (
                <CardMedia
                    component="img"
                    image= '../images/pokeball2.png' 
                    onClick = {handleClick} 
                    sx={{
                        animation: `${spin} 1s infinite ease`
                    }}
                />
            )
        }
    }

    const renderPokeMoves = () => {
        if (pokeProps.moves) {
            return (
                pokeProps.moves.map((atk, index)=>{
                    return <Typography key={index}>{atk}</Typography>
                })
            )
        } 
    }

    return (
        <Card
            elevation={getCardElevation()}
            sx={{padding: 2, width: '500px' }}
        >
            {/* <CardActionArea sx={{height: '100%'}}> */}
                

                <Grid
                    container
                    direction="column"
                    justifyContent="space-around"
                    alignItems="center"
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

                    { renderPokeImage() }

                    <Grid
                        id='pokemonType(s)'
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                    >
                            {renderPokemonType()}
                    </Grid>
                    <Container sx={{height: '100px', overflow:'scroll'}}>
                    
                        { renderPokeMoves() }

                    </Container>

                    <br/>
                </Grid>
            {/* </CardActionArea> */}
        </Card>
    );
}

export default PokeCard;