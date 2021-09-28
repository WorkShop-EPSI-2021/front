import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
      id="details"
    >
      <Container sx={{ mt: 15, mb: 15, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://www.mymagic.ch/wp-content/uploads/2020/09/download-logo-png-image-77292.png"
                alt="download"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Téléchargez
              </Typography>
              <Typography variant="h5">
                {
                  "Téléchargez notre application pour votre navigateur sur le lien ci-dessus."
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/OOjs_UI_icon_search-ltr.svg/1200px-OOjs_UI_icon_search-ltr.svg.png"
                alt="scan"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Scannez
              </Typography>
              <Typography variant="h5">
                {
                  "Ouvrez un mail et lancez le scan via l'extension, vous aurez un résultat sur 100 représentant la fiabilité du mail."  
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://w7.pngwing.com/pngs/937/777/png-transparent-black-shield-logo-computer-icons-symbol-black-shield-miscellaneous-emblem-logo-thumbnail.png"
                alt="protect"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Vous êtes protégés
              </Typography>
              <Typography variant="h5">
                {"Grâce aux informations reçues, vous apprendrez à identifier de mieux en mieux les mails frauduleux et éviterez de vous faire arnaquer. "}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
