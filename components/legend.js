import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography'
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'

export default function list(){
                    const theme = useTheme(); 
                    return(
                        <List sx={{display: 'flex', flexDirection: 'row'}}>
                            <ListItem pl={0} sx={{width: '190px', paddingLeft: '0px'}}>
                                <ListItemAvatar sx={{minWidth:24}}>
                                    <Box sx={{backgroundColor:theme.palette.blue, borderRadius: 100, width: 9, height: 9}}/>
                                </ListItemAvatar>
                                <ListItemText><Typography variant="list">Last 6 days</Typography></ListItemText>
                            </ListItem>
                            <ListItem pl={0} ml={2}>
                                <ListItemAvatar sx={{minWidth:4}}>
                                    <Box sx={{backgroundColor:'rgba(216, 217, 219, 1)', borderRadius: 100, width: 9, height: 9}}/>
                                </ListItemAvatar>
                                <ListItemText><Typography variant="list">Last Week</Typography></ListItemText>
                            </ListItem>
                        </List>
                    )};