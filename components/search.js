import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '625', marginLeft: '40px', backgroundColor:"#F6F6FB", boxShadow: '0px 0px 0px 0px'  }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, fontSize: '12px'}}
        placeholder="Search"
        inputProps={{ 'aria-label': 'Search' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon   />
      </IconButton>
    </Paper>
  );
}