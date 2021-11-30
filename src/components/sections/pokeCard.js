import {useState, useEffect} from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { keyframes } from '@mui/system';
import PreviousPokemon from '../../previousPokemon.js';

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
    const [canGetNew, setCanGetNew] = useState(true);

    const getNewPokemon = (event) => {
        setCanGetNew(false);
        handleClick(event.target.id);
    }

    useEffect(()=> {
        setCanGetNew(true);
    },[props]);

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
                pokeProps.type.map((type, index)=>(
                    <Card key={index} sx={{backgroundColor: `${typeColors[type]}` }}>
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
            />
            )
        } else {
            return (
                <Button onClick = {getNewPokemon}>
                    <CardMedia
                        component="img"
                        image= '../images/pokeball2.png' 
                         
                        sx={{
                            animation: `${spin} 1s infinite ease`
                        }}
                    />
                </Button>
            )
        }
    }

    const getBorderRadius = () => {
        if (pokeProps.image) {
            return '5px';
        } else {
            return '100%';
        }
    }

    const getExtraPadding = () => {
        if (pokeProps.image) {
            return 2;
        } else {
            return 0;
        }
    }

    const renderPokeID = () => {
        if (pokeProps.id) {
            return <Typography variant="h5" sx={{px: 1}}>#<b>{pokeProps.id}</b></Typography>
        } else {
            return <div></div>
        }
    }

    const renderBackupBall =() => {
        if (pokeProps.image) {
            return (
                <Button 
                    onClick = {getNewPokemon} 
                    disabled={!canGetNew}
                    sx={{opacity: ()=>{
                        return canGetNew ? 1 : .5;
                    }}}
                >
                    <CardMedia
                        component="img"
                        image= '../images/pokeball2.png'
                        sx={{height: '4m', width: '4em', padding: 1}}
                    />
                </Button>
            )
        } else {
            return <div></div>
        }
    }

    const renderBackButton =() => {
        // console.log(PreviousPokemon.collection.length);
        if (PreviousPokemon.hasPreviousPokemon()) {
            return (
                <Button 
                    disabled={!canGetNew}
                    onClick = {getNewPokemon}
                >
                    <Typography id="back">Back</Typography>
                </Button>

            )
        }
    }

    const renderNextButton =() => {
        if (PreviousPokemon.hasNextPokemon()) {
            return (
                <Button 
                    disabled={!canGetNew}
                    onClick = {getNewPokemon}
                >
                    <Typography id="next">Next</Typography>
                </Button>
            )
        }
    }

    return (
        <Card
            elevation={getCardElevation()}
            sx={{width: '475px', borderRadius: getBorderRadius()}}
        >
            {/* <CardActionArea sx={{height: '100%'}}> */}
            {/* <img id='test' src="../images/pokeball.gif" style={{width:'100px', height:'100px', backgroundColor: 'black'}}/> */}

                <Grid
                    container
                    direction="column"
                    justifyContent="space-around"
                    alignItems="center"
                    sx={{pb: getExtraPadding()}}
                >

                    <Grid
                        id='pokemonName'
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        {renderPokeID()}
                        {renderBackButton()}
                        {renderNextButton()}
                        {renderBackupBall()}
                    </Grid>

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

                </Grid>
            {/* </CardActionArea> */}
        </Card>
    );
}

export default PokeCard;