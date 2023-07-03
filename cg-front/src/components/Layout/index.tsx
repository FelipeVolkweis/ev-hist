import { ReactElement } from "react";
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
import { Banner } from '../Banner';
import NavBar from "../NavBar";

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
        <Link color="inherit" href="https://mc.icmc.usp.br/" target="_blank">
          Museu ICMC - USP
        </Link>{' '}
      </Typography>
    );
  }

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

interface IProps {
    children: ReactElement
}

export const Layout = ( {children} : IProps ) => {
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
                    <a href="/">
                        <Banner/>
                    </a>
                </div>
              </div>
            </Container>
          </Box>
          <NavBar/>
          <Container sx={{ py: 6 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={2}>
              {children}
            </Grid>
          </Container>
        </main>
        {/* Footer */}
  
        <Box sx={{ bgcolor: '#74247A', p: 2, color:"white" }} component="footer">
          <Typography variant="subtitle1" align="center" gutterBottom>
          Site feito por Eduarda Almeida Garrett de Carvalho, Eduarda Tuboy Nardin, Felipe Volkweis de Oliveira e Nicolas Carreiro Rodrigues 
          </Typography>
          <Typography variant="subtitle1" align="center">
            Professor Claudio Fabiano Motta Toledo
          </Typography>
          
        </Box>
        <Box sx={{ bgcolor: '#FEC901', p: 2, color:"black" }} component="footer">
          <Copyright />
        </Box>
        {/* End footer */}
      </ThemeProvider>
    );
  }