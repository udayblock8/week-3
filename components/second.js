import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles'
import dynamic from 'next/dynamic'

const DynamicPlot = dynamic(import('../components/donut'), {ssr: false})


export default function second(){
    const theme = useTheme();
    return(
            <Box sx={{paddingLeft:'20px'}}>
                    <Box sx={{display:'flex', justifyContent: 'space-between'}}>
                        <Box>
                            <Typography variant="h5">Order Time</Typography>
                            <Box mt={1}/>
                            <Typography variant="h6">From 1-6 Dec, 2020</Typography>
                        </Box>
                        <Box>
                            <Button variant="outlined" sx={{padding: '6px 16px'}}>View Report</Button>
                        </Box>
                    </Box>
                    <Box>
                    <DynamicPlot/>
                    <List sx={{display: 'flex', flexDirection: 'row', margin:'0px', padding: '0px'}}>
                            <ListItem sx={{paddingLeft: '0px'}}>
                                <ListItemAvatar sx={{minWidth:24, marginTop:'-13px'}}>
                                    <Box sx={{backgroundColor:theme.palette.blue, borderRadius: 100, width: 9, height: 9}}/>
                                </ListItemAvatar>
                                <ListItemText secondary="40%"><Typography variant="list">Afternoon</Typography></ListItemText>
                            </ListItem> 
                            <ListItem pl={0} ml={2}>
                                <ListItemAvatar sx={{minWidth:24, marginTop:'-13px'}}>
                                    <Box sx={{backgroundColor:'rgba(133, 147, 237, 1);', borderRadius: 100, width: 9, height: 9}}/>
                                </ListItemAvatar>
                                <ListItemText secondary="32%"><Typography variant="list">Evening</Typography></ListItemText>
                            </ListItem>
                            <ListItem pl={0} ml={2}>
                                <ListItemAvatar sx={{minWidth:24, marginTop:'-13px'}}>
                                    <Box sx={{backgroundColor:'rgba(199, 206, 255, 1)', borderRadius: 100, width: 9, height: 9}}/>
                                </ListItemAvatar>
                                <ListItemText secondary="28%" ><Typography variant="list">Morning</Typography></ListItemText>
                            </ListItem>
                        </List>
                    </Box>
        </Box>
    )
}