import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import foodlist from '../public/foodlist.json'
import Foodlist from './foodlist'

export default function second(){
    return(
            <Box sx={{padding:'20px 20px 0px 20px'}}>
                    <Box sx={{display:'flex', justifyContent: 'space-between'}}>
                        <Box>
                            <Typography variant="h5">Most Ordered Food</Typography>
                            <Box mt={1}/>
                            <Typography variant="h6">Adipiscing elit, sed do eiusmod tempor</Typography>
                        </Box>
                    </Box>
                    <Box>
                        <List sx={{margin: '20px 0px 0px 0px', padding:'0px'}}>   
                            {foodlist.map((data) => (
                                <Foodlist data={data}/>
                            ))}
                        </List>
                    </Box>
            </Box>
    )
}