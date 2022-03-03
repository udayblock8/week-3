import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';   
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from './login'


const drawerWidth = 240;
export default function header(props)
{   
    return(   
        <AppBar>
          <Toolbar sx={{display: 'flex'}}>
            <Box sx={{ width:'60%', marginLeft:'40px'}}>
                  <Paper
                    component="form"
                    sx={{ p: '0px 6px', display: 'flex', alignItems: 'center', width: '100%', marginLeft: '20px', backgroundColor:"#F6F6FB", boxShadow: '0px 0px 0px 0px'  }}
                  >
                    <InputBase
                      sx={{ ml: 1, flex: 1, fontSize: '12px'}}
                      placeholder="Search"
                      inputProps={{ 'aria-label': 'Search' }}
                    />
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                      <SearchIcon />
                    </IconButton>
                  </Paper>
            </Box>
            <Box sx={{width:'40%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                  <Avatar />
            </Box>
          </Toolbar>
        </AppBar>
    )
}