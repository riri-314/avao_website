import * as React from "react";
import { PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "./components/AppAppBar";
import { DataProvider } from "./providers/DataProvider";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./components/NotFound";
import WorkInProgress from "./pages/WorkInProgress";

export default function LandingPage() {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <DataProvider>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />

          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/chorale" element={<WorkInProgress/>} />
              <Route path="/comite" element={<WorkInProgress/>} />
              <Route path="/contacts" element={<WorkInProgress/>} />
              <Route path="*" element={<NotFound/>} />
          </Routes>
        </ThemeProvider>
      </DataProvider>
    </>
  );
}
