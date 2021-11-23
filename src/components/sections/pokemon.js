import React, { useState } from 'react';
import Card from '@mui/material/Card';
import PokemonTextBox from '../textboxs/pokemonTextbox.js';
import axios from 'axios';
import PokeCard from './pokeCard.js';
import PokeMoves from './pokeMoves.js';
import PokeSearch from './pokeSearch.js';
import BaseStats from './baseStat.js';
import PreviousPokemon from '../../previousPokemon.js';
import { Container, Typography, Grid, Box } from "@mui/material";

// const textBoxSize = window.screen.width > 1000 ? '50%' : '100%';
const pokemonCount = 898;

const Pokemon = () => {
    const [pokemon, setPokemon] = useState({});
    const [promptClick, setPromptClick] = useState(true);

    const handleClick = (elementID) => {
        // if invoked with a number then 
        // run get pokemon with that number and true
        // else run get pokemon with random number and false
        let rememberPokemon = false;
        let pokeNum = 0;
        if (elementID === 'back') {
            pokeNum = PreviousPokemon.getPrevious();
        } else if (elementID === 'next') {
            pokeNum = PreviousPokemon.getNext();
        } else {
            pokeNum = Math.floor(Math.random()*pokemonCount);
            rememberPokemon = true;
        }

        getPokemon(pokeNum, rememberPokemon);
    }

    // const updatePrompt = () => {
    //     setPromptClick(!promptClick); 
    // }

    const handleSearchSubmit = (int) => {
        getPokemon(int, false);
    }

    const getPokemon = (pokeIndex, recordPokemon = false) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeIndex}`)
            .then((pokedata)=> {
                // console.log('recordPokemon: ',recordPokemon);
                if (recordPokemon) {
                    PreviousPokemon.addToPrevious(pokedata.data.id);
                    // console.log(`${pokedata.data.id} added to previous`)
                }
                setPokemon(pokedata.data);
            })
            .catch((error)=> {
                console.log(error);
            });
    }

    const renderPokemon = () => {
        if (pokemon.sprites) {
            const pokeObj = {
                image: pokemon.sprites.other['official-artwork'].front_default || 'pokemon.sprites.front_default',
                name: pokemon.name || '',
                id: pokemon.id || 0,
                type: [],
            }
            for (let i = 0; i < pokemon.types.length; i++) {
                const type = pokemon.types[i];
                pokeObj.type.push(type.type.name);
            }
            return <PokeCard pokeData = {pokeObj} handleClick={handleClick} prompt={promptClick}/>
        }
        return <PokeCard handleClick={handleClick}/>
    }

    const renderPokeMoves= () => {
        if (pokemon.moves) {
            const movesObj={moves:[]};

            pokemon.moves.map((atk)=>{
                let atkName = atk.move.name;
                atkName = atkName[0].toUpperCase() + atkName.slice(1);
                movesObj.moves.push(atkName);
            })

            return (
                <Box sx={{height:'200px'}}>
                    <Typography variant="h4">Moves</Typography>
                    <PokeMoves pokeMoves={movesObj}/>
                </Box>
            ) 

        }  else {
            return (
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item>
                        <PokemonTextBox />
                    </Grid>
                </Grid>
            )
        }
    }


    const renderPokeAbilities = () => {
        if (pokemon.abilities) {

            return (
                <Box>
                    <Box id='title'>
                        <Typography variant="h4">Abilities</Typography>
                    </Box>
                    <Container sx={{ height: '72px'}}>
                        {pokemon.abilities.map((ability, index)=>{
                            let name = ability.ability.name;
                            name = name[0].toUpperCase() + name.slice(1);
                            return <Typography key={index}> {name} </Typography>
                        })}
                    </Container>
                </Box>
            )
        } 
    }

    const renderBaseStats = () => {
        if (pokemon.stats) {

            const pokeStats = [];
            pokemon.stats.map((stat)=>{
                let statName =  stat.stat.name;
                statName = statName[0].toUpperCase() + statName.slice(1);
                pokeStats.push({name:[statName], number: stat.base_stat})
            })

            return <BaseStats  stats={ pokeStats }/>

        } else {
            return <div />
        }
    }

    return(
        <div 
            id='pokemon'
            style={{
                padding:'0px', 
                top: '10vh',
                position: 'relative',
                height: '100vh',
                overflow: 'scroll'
            }}
        >
            <Grid
                container
                direction="row-reverse"
                justifyContent="center"
                alignItems="center"
                sx={{ 
                    height: '80%', padding: 0}
                }
            >
                {/* <Box 
                    sx={{ 
                        position: 'absolute',
                        zIndex: '-1',
                        top:'40%',
                        width: '100%',
                        height: '50vh', 
                        opacity: 0.5}} 
                > 
                    <CardMedia
                        component="img"
                        height="100%"
                        image="../../images/pokemon_background.jpeg"
                    />
                </Box> */}

                <Grid 
                    item 
                    // xs={12}
                    m={4}
                    sx={{maxWidth: '50%', maxHeight: '100%'}}
                >
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        
                        sx={{ height: '75%'}}
                    >
                        {renderPokemon()}
                    </Grid>
                </Grid>

                <Grid 
                    item
                    // xs={12}
                    m={4}
                    sx={{width: '40%',maxWidth: '475px', maxHeight: '100%'}}
                >
                <Card 
                    elevation={3}
                    sx={{px: 4, py: 8}}
                >
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="stretch"
                        sx={{ height: '100%', padding: 0}}
                    >
                            <PokeSearch handleSubmit={handleSearchSubmit}/>
                            
                            { renderBaseStats() }
                            { renderPokeAbilities() }
                            { renderPokeMoves() }
                    </Grid>
                        </Card>
                </Grid>

                
                
            </Grid>



        </div>
    )
}

export default Pokemon;