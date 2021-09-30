import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import WarningIcon from "@mui/icons-material/Warning";
import CheckIcon from "@mui/icons-material/Check";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: "default",
  color: "secondary.main",
  fontWeight: "medium",
};

const image = {
  height: 55,
  my: 4,
};

function ProductHowItWorks() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden" }}
      id="scoring"
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: "none",
            position: "absolute",
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 8 }}>
          Le scoring, comment ça marche ?
        </Typography>
        <div>
          <Typography sx={{ mb: 6 }} variant="h5">
            Pour scanner vos mails, nous nous basons sur plusieurs critères:
          </Typography>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1. L'orthographe</Box>
                <Box
                  component="img"
                  src="https://www.pngkey.com/png/detail/104-1046603_one-star-ratings-have-worse-grammar-and-spelling.png"
                  alt="Grammar and spelling"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  {
                    " Nous analysons vos mails pour détecter les fautes d'orthographes et la syntaxe."
                  }
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2. Les sentiments</Box>
                <Box
                  component="img"
                  src="https://www.pngfind.com/pngs/m/6-60080_smiley-coloring-book-emoticon-emotion-emoji-emotions-black.png"
                  alt="emotion"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  {
                    "Nous cherchons à comprendre les sentiments transmis dans le mail pour mieux détecter les fraudes."
                  }
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3. Le ton</Box>
                <Box
                  component="img"
                  src="https://www.pikpng.com/pngl/m/179-1793096_980-x-922-1-exclamation-mark-logo-png.png"
                  alt="Imperative"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  {
                    "Nous cherchons l'usage de l'impératif, caractéristique d'un mail frauduleux."
                  }
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Typography
            variant="h5"
            align="center"
            sx={{ mt: 6 }}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {"Plus le score est élevé plus le mail est sûr !"}
            <CheckIcon style={{ color: "green" }} sx={{ ml: 4 }} />
          </Typography>
        </div>
        <Typography
          variant="h5"
          align="center"
          color="red"
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
          sx={{ mt: 8 }}
        >
          <WarningIcon />
          {
            "Important: nous ne gardons aucune trace du contenu de vos emails, nous cherchons juste à vous protéger."
          }
        </Typography>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;
