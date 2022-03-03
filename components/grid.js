import Grid from '@mui/material/Grid';
import First from './first'
import Second from './second'
import Third from './third'
import Fourth from './fourth'
import Fifth from './fifth'
export default function logo()
{
    return (
            <Grid container  mb={5}>
                <Grid item xs={8} sx={{paddingRight:'40px', paddingBottom:'20px', borderRight:'0.5px solid rgba(200, 203, 217, 1)'}}>
                    <First/>
                </Grid>
                <Grid item xs={4} sx={{paddingLeft:'20px'}}>
                    <Second />
                </Grid>
                <Grid item xs={4} sx={{paddingTop:'20px', paddingRight:'20px', borderTop:'0.5px solid rgba(200, 203, 217, 1)', borderRight:'0.5px solid rgba(200, 203, 217, 1)' }}>
                    <Third />
                </Grid>
                <Grid item xs={4} sx={{padding:'20px 20px 0px 20px', borderTop:'0.5px solid rgba(200, 203, 217, 1)', borderRight:'0.5px solid rgba(200, 203, 217, 1)' }}>
                    <Fourth />
                </Grid>
                <Grid item xs={4} sx={{paddingTop:'20px', paddingLeft: '20px', borderTop:'0.5px solid rgba(200, 203, 217, 1)'}}>
                    <Fifth />
                </Grid>
            </Grid>
    ) 
}
