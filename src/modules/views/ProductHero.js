import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

import bgImage from "../images/background-site-web-2.png";

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${bgImage})`,
        backgroundColor: '#333333', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={bgImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Sécurisez vos e-mails
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Scannez le contenu de vos mails et évitez les arnaques
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="https://github.com/WorkShop-EPSI-2021/extension-new"
        target="_blank"
        sx={{ minWidth: 200 }}
      >
        Télécharger
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Naviguez en sécurité
      </Typography>
    </ProductHeroLayout>
  );
}
