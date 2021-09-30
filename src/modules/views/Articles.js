import react, { Fragment } from "react";
import Textfiled from "../components/Textfiled";
import Box from "@mui/material/Box";
import Typography from "../components/Typography";


export default function Articles() {
  return (
    <Fragment>
            <Box
      component="section"
      sx={{ paddingTop: "5rem", paddingBottom: "5rem",  bgcolor: "secondary.light", overflow: "hidden" }}
      id="scoring"
    >
              <Typography color="inherit" align="center" variant="h4" marked="center" sx={{ mb: 15}}>
        Articles
      </Typography>
      <Textfiled
        class="class-textflied"
        video="1"
        lien="https://blog.devensys.com/ameliorer-la-securite-des-emails/"
        text="Dans un premier temps, faisons un rappel des chiffres concernant la sécurité des emails.
        Grâce aux rapports constructeurs et éditeurs, tels que Cisco ou ProofPoint, nous avons pu établir un constat :
        La sécurité des emails est aujourd’hui indispensable. D’après le rapport de sécurité de Cisco, 70% des entreprises dites
        « midmarket » qui ont subi une intrusion, déclarent une perte de plus de 100K€. 20% d’entre elles déclarent des coûts de plus
        d’un million d’€. Certaines attaques peuvent également infecter les infrastructures et se propager dans les systèmes, ce qui peut
        causer des dommages irréversibles."
      />
      <div className="border"></div>
      <Textfiled
        class="class-textflied-gauche"
        video="2"
        lien="https://www.kaspersky.fr/resource-center/preemptive-safety/phishing-prevention-tips"
        text="Vous pouvez apprendre à détecter des mails frauduleux par vous même.
               Notre application est une aide, mais deux vérifications valent mieux qu’une. Ici vous verrais des astuces et de bonne pratique à
               mettre en place pour vous prémunir contre les faux mail."
      />
            <div className="border"></div>

      <Textfiled
        class="class-textflied"
        video="3"
        lien="https://actu.fr/societe/arnaques-spams-voici-top-5-mails-quil-ne-faut-surtout-pas-ouvrir_20781068.html"
        text="Le phishing par mail contient très fréquemment des défauts de payements, des reçus de colis falsifier, des offres de carte cadeau ou des victoires à des fausses loteries en ligne.
                   Souvent ils se font passer pour de grandes sociétés comme Amazon ou une banque pour passer inaperçu et gagner votre confiance."
      />
      </Box>
    </Fragment>
  );
}
