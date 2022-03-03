import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Legend from './legend'
import dynamic from 'next/dynamic'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

const DynamicPlot = dynamic(import('../components/bargraph'), {ssr: false})


export default function first(){
    return(
            <>
                    <Box sx={{display:'flex', justifyContent: 'space-between'}}>
                        <Box>
                            <Typography variant="h2">Revenue</Typography>
                            <Box mt={2}/>
                            <Typography variant="h3">IDR 7.852.000</Typography>
                            <Box mt={2}/>
                            <Typography variant="h4"><Box component="span" sx={{ color:'green', fontWeight: 600 }}><ArrowUpwardIcon fontSize='24px'/>2.1%</Box> vs last week.</Typography>
                        </Box>
                        <Box>
                            <Button variant="outlined" sx={{padding: '6px 16px'}}>View Report</Button>
                        </Box>
                    </Box>
                    <Box sx={{marginTop: '20px'}}>
                        <Typography variant="h6">Sales From 1-12 Dec, 2020</Typography>
                        <DynamicPlot />
                        <Legend/>
                    </Box>
            </>
    )
}