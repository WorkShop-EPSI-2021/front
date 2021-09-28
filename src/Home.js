import * as React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
import ProductHowItWorks from './modules/views/ProductHowItWorks';
import AppAppBar from './modules/views/AppAppBar';
import CheckMail from "./modules/views/CheckMail";
import withRoot from './modules/withRoot';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <CheckMail />
      {/* <ProductCategories /> */}
      <h2>AJOUTER ARTICLES</h2> 
      <ProductHowItWorks />


    </React.Fragment>
  );
}

export default withRoot(Index);
