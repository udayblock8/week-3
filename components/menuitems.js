import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles'





export default function header(props)
{   
    const theme = useTheme();
    const active = {
      color: theme.palette.blue,
      backgroundColor: 'rgba(112,127,221, 0.1)',
    }
    
    const notactive = {
      color: theme.palette.grey
    }
    return(   
    <>

        <List sx={{marginTop: '20px'}}>
            <Typography sx={{ color: 'rgba(8, 36, 49, 0.5)',
                              padding: '20px 20px 10px 20px',
                              textTransform: 'uppercase',
                              fontWeight: 400,
                              fontSize: '11px'}}>
                                {props.section.name}
                              </Typography>
            {props.section.contents.map((items) => (
              <ListItem button key={items.name} sx={ (items.active == '1') ? active : notactive}>
                <ListItemIcon>
                  {<img src={items.svg} width="20" height="20"/>}
                </ListItemIcon>
                <ListItemText><Typography variant="list">{items.name}</Typography></ListItemText>
              </ListItem>
            ))}
        </List>
    </>
    );
}