import React from "react";
import Input from "@mui/material/Input";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

export default function CheckMail() {
  return (
    <Box component="section" sx={{ display: "flex", overflow: "hidden" }}>
      <Container
        sx={{
          mt: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyItems: "center",
        }}
        style={{ height: "40vh" }}
      >
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 8 }}>
          Sanity Check
        </Typography>

        <Typography variant="h5" marked="center" component="h2" sx={{ mb: 8 }}>
          Cliquez
          <Link
            href="https://haveibeenpwned.com/"
            sx={{ mx: 1 }}
            alt="have I been Pwned"
          >
            ici
          </Link>
          pour vérifier si votre adresse mail a été compromise
        </Typography>
        <Typography variant="h5" marked="center" component="h2" sx={{ mb: 8 }}>
          Cliquez
          <Link
            href="https://breachalarm.com/"
            sx={{ mx: 1 }}
            alt="breahalarm.com"
          >
            ici
          </Link>
          pour vérifier si votre mot de passe a été compromis
        </Typography>
        <Typography variant="h5" marked="center" component="h2" sx={{ mb: 8 }}>
          Si vous êtes une entreprise, vous serez peut-être plus intéressé par
          <Link
            href="https://www.dehashed.com/"
            sx={{ mx: 1 }}
            alt="dehashed.com"
          >
            Dehashed
          </Link>
          qui propose plus d'options et de possibilité.
        </Typography>
      </Container>
    </Box>
  );
}
