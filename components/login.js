import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';


const MyComponent = styled('div')({
    width: '32px',
    height: '32px',
    backgroundColor: 'rgba(255, 230, 204, 1)',
    borderRadius: '55px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  });



export default function avatar(){
    return(
        <>
        <MyComponent>
            <Avatar
                alt="Delicious Burger"
                src="bugrir.svg"
                sx={{ width: 16, height: 16 }}
            />
        </MyComponent>
        <Box sx={{fontSize: '12px', fontFamily:'Poppins', paddingLeft: '12px', color:'rgba(31, 56, 76, 1)'}}>
            Delicious Burger 
        </Box>
        <KeyboardArrowDownIcon sx={{color: 'rgba(31, 56, 76, 0.7)'}}/>
        <Box mt={-1} ml={2} mr={4}>
            <Badge color="error" variant="dot">
                <NotificationsIcon sx={{fontSize:"18px"}} color="disabled" />
            </Badge>
        </Box>
        </>
    )
}



