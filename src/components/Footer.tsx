import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import FacebookIcon from "@mui/icons-material/GitHub";

import image from "../assets/avao_blason.png"; // adjust the path as needed

const logoStyle = {
  width: "140px",
  height: "auto",
};



export default function Footer() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: { xs: "100%", sm: "60%" },
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            <Box sx={{ ml: "-15px" }}>
              <img src={image} style={logoStyle} alt="logo of sitemark" />
            </Box>
          </Box>
          <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: "text.secondary",
          }}
        >
          <IconButton
            color="inherit"
            href="https://github.com/riri-314/avao_website"
            aria-label="GitHub"
            sx={{ alignSelf: "center" }}
          >
            <FacebookIcon />
          </IconButton>
        </Stack>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Site Map
          </Typography>
          <Link color="text.secondary" href="/">
            L'ordre
          </Link>
          <Link color="text.secondary" href="/comite">
            Le comité
          </Link>
          <Link color="text.secondary" href="/chorale">
            La Chorale
          </Link>
          <Link color="text.secondary" href="/contacts">
            Contacts
          </Link>
        </Box>
        
      </Box>
    </Container>
  );
}
