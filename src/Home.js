import * as React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
import ProductHowItWorks from './modules/views/ProductHowItWorks';
import CheckMail from "./modules/views/CheckMail";
import withRoot from './modules/withRoot';
import Textfiled from "./modules/components/Textfiled";
import "./style/textflied.css";

function Index() {
  return (
    <React.Fragment>
      <ProductHero />
      <ProductValues />
      <CheckMail />
      <h2>AJOUTER ARTICLES</h2>
        <Textfiled
         class="class-textflied"
         video="1"
         lien="https://blog.devensys.com/ameliorer-la-securite-des-emails/"
         text="Dans un premier temps, faisons un rappel des chiffres concernant la sécurité des emails.
         Grâce aux rapports constructeurs et éditeurs, tels que Cisco ou ProofPoint, nous avons pu établir un constat :
         La sécurité des emails est aujourd’hui indispensable. D’après le rapport de sécurité de Cisco, 70% des entreprises dites
         « midmarket » qui ont subi une intrusion, déclarent une perte de plus de 100K€. 20% d’entre elles déclarent des coûts de plus
         d’un million d’€. Certaines attaques peuvent également infecter les infrastructures et se propager dans les systèmes, ce qui peut
         causer des dommages irréversibles."/>

        <Textfiled
            class="class-textflied-gauche"
            video="2"
            lien=""
            text="Vous pouvez apprendre à détecter des mails frauduleux par vous même.
                Notre application est une aide, mais deux vérifications valent mieux qu’une. Ici vous verrais des astuces et de bonne pratique à
                mettre en place pour vous prémunir contre les faux mail."/>

        <Textfiled
            class="class-textflied"
            video="3"
            lien="https://actu.fr/societe/arnaques-spams-voici-top-5-mails-quil-ne-faut-surtout-pas-ouvrir_20781068.html"
            text="Le phishing par mail contient très fréquemment des défauts de payements, des reçus de colis falsifier, des offres de carte cadeau ou des victoires à des fausses loteries en ligne.
                    Souvent ils se font passer pour de grandes sociétés comme Amazon ou une banque pour passer inaperçu et gagner votre confiance."/>

      <ProductHowItWorks />
    </React.Fragment>
  );
}
export default withRoot(Index);
