import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Features from "../components/Features";
import Footer from "../components/Footer";
import FullScreenPicture from "../components/FullScreenPicture";
import { Typography } from "@mui/material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
        <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
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
