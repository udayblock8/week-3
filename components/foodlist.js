import * as React from 'react';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';



export default function header(props)
{   
    return(   
            <ListItem sx={{padding:'20px 0px', marginBottom: '0px', fontSize: '12px', fontWeight: 400, borderBottom: '0.5px solid rgba(219, 229, 235, 1)'}} key={props.data.itemid} secondaryAction={
                <Box edge="end">
                    <Typography variant='list' color="gray">{"IDR " + props.data.price}</Typography>
                </Box>
              }>
                <ListItemIcon>
                {<img src={props.data.img} className="listItem"/>}
                </ListItemIcon>
                <ListItemText><Typography variant="list">{props.data.name}</Typography></ListItemText>
            </ListItem>

    );
}