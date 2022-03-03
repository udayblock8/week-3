import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import css from '../styles/bubbles.module.scss'

export default function second(){
    return(
            <Box sx={{paddingTop:'20px'}}>
                    <Box sx={{display:'flex', justifyContent: 'space-between'}}>
                        <Box>
                            <Typography variant="h5">Your Rating</Typography>
                            <Box mt={1}/>
                            <Typography variant="h6">Lorem ipsum dolor sit amet, consectetur</Typography>
                        </Box>
                    </Box>
                    <Box sx={{position:'relative', padding:'40px 40px'}}>
                        <Box className={css.circle1}>
                            <svg height="110" width="110">
                                <circle cx="55" cy="55" r="50"/>
                                <text x="50%" y="45%" textAnchor="middle" dominantBaseline="middle" >85%</text>
                                <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" className={css.small} >Hygine</text>
                                <circle cx="55" cy="55" r="54"/>
                            </svg>
                        </Box>
                        <Box className={css.circle2}>
                            <svg height="168" width="168">
                                <circle cx="84" cy="84" r="79"/>
                                <text x="50%" y="45%" textAnchor="middle" dominantBaseline="middle" >85%</text>
                                <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" className={css.small} >Food Taste</text>
                                <circle cx="84" cy="84" r="83"/>
                            </svg>
                        </Box>
                        <Box className={css.circle3}>
                            <svg height="130" width="130">
                                <circle cx="65" cy="65" r="60"/>
                                <text x="50%" y="45%" textAnchor="middle" dominantBaseline="middle" >92%</text>
                                <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" className={css.small} >Packaging</text>
                                <circle cx="65" cy="65" r="64"/>
                            </svg>
                        </Box>
                    </Box>
            </Box>
    )
}