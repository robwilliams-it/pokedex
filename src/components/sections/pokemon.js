import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grow from '@mui/material/Grow';
import PokemonTextBox from '../textboxs/pokemonTextbox.js';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import Button from '@mui/material/Button';
import PokeCard from './pokeCard.js';

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
                image: pokemon.sprites.other['official-artwork'].front_default || '',
                name: pokemon.name || '',
                id: pokemon.id || 0,
                type: [],
                moves: []
            }
            for (let i = 0; i < pokemon.types.length; i++) {
                const type = pokemon.types[i];
                pokeObj.type.push(type.type.name);
            }
            pokemon.moves.map((atk)=>{
                pokeObj.moves.push(atk.move.name);
            })
            return <PokeCard pokeData = {pokeObj} handleClick={handleClick} prompt={promptClick}/>
        }
        return <PokeCard handleClick={handleClick}/>
    }

    return(
        <Container 
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
                sx={{
                    height: '100%',
                    width: '100%'
                }}
            >
                <Grid 
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{width: '50%', height: '100%'}} 
                > 
                    <Grid item>
                        <PokemonTextBox />
                    </Grid>
                </Grid>

                <Grid 
                    id='pokemonAPI'
                    container
                    justifyContent="center"
                    alignItems="center"
                    sx={{width: '50%', height: '100%'}} 
                > 
                    <Grid item>
                        {renderPokemon()}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Pokemon;