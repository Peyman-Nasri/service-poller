import ServicePoller from "./components/ServicePoller";
import { Container, Box } from "@mui/material";

function App() {
  return (
    <Container maxWidth="md" style={{ padding: "3em 0" }}>
      <Box sx={{ flexGrow: 1 }}>
        <ServicePoller />
      </Box>
    </Container>
  );
}

export default App;
