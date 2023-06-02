import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box component="header">
      <Typography variant="h4" component="h1" gutterBottom>
        Home
      </Typography>
      <Box component="section">
        <Typography variant="subtitle1" component="h2" gutterBottom>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely.
        </Typography>
        <Typography>Paragrafo 1</Typography>
        <Typography>Paragrafo 2</Typography>
      </Box>
    </Box>
  );
}
