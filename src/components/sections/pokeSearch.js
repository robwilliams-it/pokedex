import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import PokemonList from '../../pokemonMasterList.js';

// const options = ['Option 1', 'Option 2'];

const Search = (props) => {
    const { handleSubmit } = props;
    const [value, setValue] = React.useState("");
    const [inputValue, setInputValue] = React.useState('');

    useEffect(()=>{
        setValue("");
    },[props])

    const handleChange =(event, newValue) =>{
        setValue(newValue);
        if (newValue !== "") {
            const pokeIndex = PokemonList.indexOf(newValue) + 1;
            handleSubmit(pokeIndex);
        }
    }

    const handleInputChange = (event, newInputValue) => {
        setInputValue(newInputValue);
    }

    // const clearSearch = () => {
    //     setValue("");
    // }

    return (
        <div>
        <Autocomplete
            value={value}
            onChange={handleChange}
            inputValue={inputValue}
            onInputChange={handleInputChange}
            id="Pokesearch"
            options={PokemonList}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Search" />}
        />
        </div>
    );
}

export default Search; 