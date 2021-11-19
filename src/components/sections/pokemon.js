import React, { useState } from 'react';
import { CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import Grow from '@mui/material/Grow';
import PokemonTextBox from '../textboxs/pokemonTextbox.js';
import axios from 'axios';
import Button from '@mui/material/Button';
import PokeCard from './pokeCard.js';
import PokeData from './pokeData.js';
import BaseStats from './baseStat.js';
import { Container, Typography, Grid, Box, List } from "@mui/material";

// const textBoxSize = window.screen.width > 1000 ? '50%' : '100%';
const pokemonCount = 898;

const Pokemon = () => {
    const [pokemon, setPokemon] = useState({});
    const [promptClick, setPromptClick] = useState(true);

    const handleClick = (event) => {
        const randomNum = Math.floor(Math.random()*pokemonCount);
        getPokemon(randomNum);
    }

    const updatePrompt = () => {
        setPromptClick(!promptClick); 
    }

    const getPokemon = (pokeIndex) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeIndex}`)
            .then((pokedata)=> {
                setPokemon(pokedata.data);
            })
            .catch((error)=> {
                console.log(pokeIndex);
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
            const moves=[];

            pokemon.moves.map((atk)=>{
                let atkName = atk.move.name;
                atkName = atkName[0].toUpperCase() + atkName.slice(1);
                moves.push(atkName);
            })

            return (<PokeData pokeMetaData={moves}/>) 

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
                <Container>
                    <Box id='title' sx={{padding:1}}>
                        <Typography variant="h4">Abilities</Typography>
                    </Box>
                    {pokemon.abilities.map((ability, index)=>{
                        let name = ability.ability.name;
                        name = name[0].toUpperCase() + name.slice(1);
                        return <Typography key={index}> {name} </Typography>
                    })}
                </Container>
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
        maxWidth="100%" 
        style={{
            padding:'0px', 
            top: '10vh',
            position: 'relative',
            height: '100vh'
        }}
        >
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                sx={{ height: '100%', padding: 0}}
            >
                <Grid 
                    item 
                    m={3}
                    sx={{padding:0, margin:0}}
                >
                    <Card
                        sx={{height:'3em'}}
                    >
                        Search Bar
                    </Card>
                    <br/>
                    { renderBaseStats() }
                    <br/>
                    { renderPokeAbilities() }

                </Grid>

                <Grid item m={4}>
                    {renderPokemon()}
                </Grid>
                <Grid item sx={{height: '100%'}} m={5} s={12} xs={12}>
                    {renderPokeMoves()}
                </Grid>
            </Grid>



        </div>
    )
}

export default Pokemon;