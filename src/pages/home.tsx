import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Features from "../components/Features";
import Footer from "../components/Footer";
import FullScreenPicture from "../components/FullScreenPicture";
import { Typography } from "@mui/material";

export default function Homme() {
  return (
    <>
      <FullScreenPicture />

      <Box sx={{ bgcolor: "background.default" }}>
        <Box sx={{ py: 4 }}>
          <Typography
            component="p"
            variant="h2"
            align="center"
            color="text.secondary"
          >
            Academicus Victoria Athena Ordo
          </Typography>
        </Box>
        <Divider />
        <Features />
        <Divider />
        <Footer />
      </Box>
    </>
  );
}

//avao c'est un ordre qui a plusieurs buts, chorale, inclusivité et bien d'autres

// histoire

// projets

// future
