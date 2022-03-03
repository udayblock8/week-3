import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Button from '@mui/material/Button'
import Legend from './legend'
import dynamic from 'next/dynamic'

const DynamicPlot = dynamic(import('../components/linegraph'), {ssr: false})

export default function first(){
    return(
            <Box sx={{padding:'20px 0px 0px 20px'}}>
                    <Box sx={{display:'flex', justifyContent: 'space-between'}}>
                        <Box>
                            <Typography variant="h2">Order</Typography>
                            <Box mt={2}/>
                            <Typography variant="h3">2.568</Typography>
                            <Box mt={2}/>
                            <Typography variant="h4"><Box component="span" sx={{ color:'red', fontWeight: 600 }}><ArrowDownwardIcon/>2.1%</Box> vs last week.</Typography>
                        </Box>
                        <Box>
                            <Button variant="outlined" sx={{padding: '6px 16px'}}>View Report</Button>
                        </Box>
                    </Box>
                    <Box sx={{marginTop:'20px'}}>
                        <Typography variant="h6">Sales From 1-12 Dec, 2020</Typography>
                            <DynamicPlot />
                        <Legend/>
                    </Box>
            </Box>
    )
}