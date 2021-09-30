import * as React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
import ProductHowItWorks from './modules/views/ProductHowItWorks';
import CheckMail from "./modules/views/CheckMail";
import withRoot from './modules/withRoot';
import Articles from "./modules/views/Articles";
import "./style/textflied.css";

function Index() {
  return (
    <React.Fragment>
      <ProductHero />
      <ProductValues />
      <CheckMail />
      <Articles />
      <ProductHowItWorks />
    </React.Fragment>
  );
}
export default withRoot(Index);
