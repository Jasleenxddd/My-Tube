import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const [searchTerm, setSearchTerm]=useState('')
    const navigate = useNavigate();

    const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
        navigate(`/search/${searchTerm}`);

        setSearchTerm('');
    }
    };

  return (
    <Paper 
    
    component='form'
    onSubmit={onhandleSubmit}
    sx={{
        borderRadius: 20,
        border: '1px solid #CE78AF',
        pl: 2,
        boxShadow: 'none',
        ml:57
        
    }}>
        <input
        
        className='search-bar'
        placeholder='Search'
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
      />
      <IconButton type='submit' sx={{ p: '10px', color: '#9E3390', ml:'50px'}} aria-label='search'>
        <SearchIcon />
      </IconButton>

    </Paper>
  )
}

export default SearchBar
