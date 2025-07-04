import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import UnivsButton from "./UnivsButton";

const dummyImages = [
  "/images/track-face1.png",
  "/images/track-face2.png",
  "/images/track-face3.png",
];

export default function TrackingList() {
  return (
    <Box sx={{ p: 2, mb: 2, display: "flex", flexDirection: "column", height: "100%", backgroundColor: "white", borderRadius: 2 }}>
      <Typography variant="subtitle1" fontWeight="bold" mb={2} color="black">
        Tracking List
      </Typography>

      <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
        <Grid container spacing={1} columns={1}>
          {dummyImages.map((src, i) => (
            <Grid key={i} item xs={1}>
              <Card
                sx={{
                  border: "2px solid",
                  borderColor: i === 0 ? "primary.main" : "transparent",
                  borderRadius: 1,
                  cursor: "pointer",
                  "&:hover": {
                    borderColor: "#1568F7",
                  }
                }}
              >
                <CardMedia component="img" image={src} alt={"face-" + i} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 1 }}>
        <UnivsButton fullWidth variant="contained" size="small" sx={{ backgroundColor: "#1568F7"}}>
          Edit Tracking List
        </UnivsButton>
        <UnivsButton fullWidth variant="contained" size="small" sx={{ backgroundColor: "#E0E0E6", "&:hover": { backgroundColor: "#333" } }}>
          Reset
        </UnivsButton>
      </Box>
    </Box>
  );
} 