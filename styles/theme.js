import { createTheme } from '@mui/material/styles';
// drawerWidth is being used at many places, try to make it consistent i.e if it's being used as different value everywhere avoid
// using it as base theme

const drawerWidth = 200
// TIP: Make separte color.js file for all the colors
const blue = 'rgba(90, 106, 207, 1)'
const gray = 'rgba(39, 50, 64, 0.7)'
const graphGray = 'rgba(230, 232, 236, 1)'
const secondarytext = 'rgba(0, 0, 0, 0.5)'

const theme = createTheme({
    typography: {
        fontFamily: [
          'poppins',
          'sans-serif',
        ].join(','),
        fontSize:12,
        fontWeight:'400',

        dashboard:{
          fontSize: 18,
          fontFamily: 'poppins',
          fontWeight: 500,
          letterSpacing: 0.5
        },
        nav:{
          fontSize: 12,
          fontWeight: 400,
          color: gray
        },
        list:{
          fontSize: 12,
          fontWeight: 400
        },
        h2:{
          fontSize: 14,
          letterSpacing: 0.5,
          fontWeight: 400,
        },
        h3:{
            fontSize: 20,
            letterSpacing: 0.5,
            fontWeight: 500
        },
        h4:{
            fontSize: 12,
            color: secondarytext,
            letterSpacing: 0.5
        },
        h5:{
            fontSize: 14,
            letterSpacing: 0.5
        },
        h6:{
            fontSize: 13,
            color: secondarytext,
            letterSpacing: 0.5,
            fontWeight:400
        }
      },
        palette: {
          blue: blue,
          grey: gray,
          graphgray: graphGray
        },
    
    components: {
      MuiList: {
        styleOverrides: {
            root: {
              margin: '0px 10px',
              padding:'0px 10px',
              fontWeight: 500,
              fontSize: 12
            },
          },
      },
      MuiListItemIcon:{
          styleOverrides:{
              root:{
                  minWidth: '20px',
                  paddingLeft: '5px'
              }
          }
      },
      MuiListItemText:{
        styleOverrides:{
            root:{
                marginLeft: '10px',
                letterSpacing: 0.5,
                
            }
        }
      },
      MuiListItem:{
        styleOverrides:{
            root:{
                padding: '12px 13px',
                borderRadius: '5px',
                marginBottom: '10px'
            }
        }
      },
      MuiAppBar:{
        styleOverrides: {
            root:{
              backgroundColor: "white",
              boxShadow: "0px 0px 0px 0px",
              borderBottom: "0.5px solid #C8CBD9",
              position:"fixed",
              width: `calc(100% - ${drawerWidth}px)`, 
              marginLeft: `${drawerWidth}px`
            }
        }
      },
      MuiButton:{
        styleOverrides:{
            root:{
                border:'0.5px solid rgba(221, 228, 240, 1)',
                fontSize: 12,
                color: blue,
                textTransform: 'capitalize',
                fontFamily: 'poppins',
                fontWeight: 500,
                
            }
        }
      },
      MuiGridItem:{
        styleOverrides:{
            root:{
                paddingLeft:'0px'
                
            }
        }
      }
    },
  });

export default theme;