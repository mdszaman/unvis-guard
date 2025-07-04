import { Box, Card, CardMedia, Typography } from "@mui/material";

const timelineItems = [
  { src: "/images/sample-face1.png", camera: "Camera 1", time: "3m 55s" },
  { src: "/images/sample-face2.png", camera: "Camera 1", time: "55s" },
  { src: "/images/sample-face3.png", camera: "Camera 2", time: "8m 17s" },
  { src: "/images/sample-face4.png", camera: "Camera 3", time: "21m 17s" },
  { src: "/images/sample-face5.png", camera: "Camera 3", time: "5m 22s" },
  { src: "/images/sample-face6.png", camera: "Camera 3", time: "29s" },
  { src: "/images/sample-face1.png", camera: "Camera 4", time: "17m" },
  { src: "/images/sample-face2.png", camera: "Camera 4", time: "" },
];

export default function Timeline() {
  return (
    <Box sx={{ display: "flex", overflowX: "auto", alignItems: "flex-start", pb: 1 }}>
      {timelineItems.map((item, idx) => {
        const isLast = idx === timelineItems.length - 1;
        return (
          <Box key={idx} sx={{ display: "flex", alignItems: "flex-start", position: "relative" }}>
            <Box sx={{ textAlign: "center", mx: 4 }}>
              <Card
                sx={{
                  minWidth: 90,
                  border: "2px solid",
                  borderColor: idx === 0 ? "primary.main" : "transparent",
                  cursor: "pointer",
                  "&:hover": {
                    borderColor: "#1568F7",
                  }
                }}
              >
                <CardMedia component="img" image={item.src} alt={"timeline-" + idx} />
              </Card>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  border: "2px solid",
                  borderColor: "#1568F7",
                  borderRadius: "50%",
                  mx: "auto",
                  mt: 1,
                }}
              />
              <Typography variant="caption" display="block" color="black" sx={{ mt: 0.5, fontWeight: "bold" }}>
                {item.camera}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ 
                  position: "absolute", 
                  bottom: 28, 
                  left: 75,
                  width: "100%",
                }}
              >
                {item.time}
              </Typography>
            </Box>

            {!isLast && (
              <Box
                sx={{
                  minWidth: 145,
                  position: "absolute",
                  bottom: 28,
                  left: 82,
                  height: 2,
                  bgcolor: "#1568F7",
                }}
              />
            )}
          </Box>
        );
      })}
    </Box>
  );
} 