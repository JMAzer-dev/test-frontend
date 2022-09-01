import React, { useState } from 'react';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    if (query !== '') {
      navigate(`/search?q=${query}`);
      setQuery('');
    }
  };
  return (
    <Paper
      component="form"
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        boxShadow: 'none',
        mb: { xs: 2, md: 0 },
        mr: { md: 5 },
      }}
      onSubmit={handleSearch}
    >
      <input
        type="text"
        className="search-bar ml-3"
        required
        placeholder="Pesquisar..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: '8px', color: 'red' }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
