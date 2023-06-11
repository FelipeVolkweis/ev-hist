import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// When using TypeScript 4.x and above
import type {} from '@mui/lab/themeAugmentation';
// When using TypeScript 3.x and below
import '@mui/lab/themeAugmentation';
import { TimeLine } from './components/TimeLine';
import { timelineData } from './components/TimeLine/timeline-content';
import { Banner } from './components/Banner';

function Copyright() {
  return (
    <Typography variant="h6" color="black" sx={{backgroundColor:"#FEC901"}} align="center">
      <Typography
          variant="h6"
          align="center"
          color="black"
          component="p"
      >
          Acesse o link do museu!
      </Typography>
      <Link color="inherit" href="https://mui.com/">
        Museu
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#74247A',
    },
  },
  components: {
    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          backgroundColor: '#74247A',
          width: "30%"
        },
      },
    },
  },
});

export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            backgroundColor: "#74247A",
            backgroundImage: "radial-gradient(black .2em, transparent 0)",
            backgroundSize: "2em 2em",
            backgroundPosition: "-2em -2em",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md" sx={{width: "80%"}}>
            <div style={{
              marginTop: "-5%",
              marginBottom: "-10%",
              position: "relative"
            }}>
              <div style={{marginLeft: "15%"}}>
                <Banner/>
              </div>
              <div style={{
                  width: "35%", 
                  position:"absolute", 
                  zIndex: 10,
                  marginLeft: "70%",
                  top: "63%",
                  backgroundColor: "#FEC901",
                  color:"black",
                  fontSize:"100%",
                  padding: "2.5%",
                  border: ".2rem solid black",
                  borderRadius: ".4rem",
                  boxShadow: ".2rem .2rem #000000",
                  fontFamily: "sans-serif",
                  fontWeight: "600"
              }}>
                Que tal conhecer um pouco sobre a história da computação gráfica?
              </div>
            </div>
          </Container>
        </Box>
        <Container sx={{ py: 14 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={2}>
            <TimeLine content={timelineData}></TimeLine>
          </Grid>
        </Container>
      </main>
      {/* Footer */}

      <Box sx={{ bgcolor: '#74247A', p: 3, color:"white" }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
        Site feito por Eduarda1, Eduarda2, Felipe e Nicolas
        </Typography>
        <Typography variant="h6" align="center">
          Professor Claudio
        </Typography>
        
      </Box>
      <Box sx={{ bgcolor: '#FEC901', p: 2, color:"black" }} component="footer">
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}