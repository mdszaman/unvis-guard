import { Box, List, ListItemButton, ListItemText } from "@mui/material";

const items = ["Face Data", "Face Group", "Matching Log"];

export default function SideNav() {
  return (
    <Box sx={{ width: 160, color: "black", backgroundColor: "F0F0F3", height: "100%", pt: 2 }}>
      <List dense disablePadding>
        {items.map((item) => (
          <ListItemButton
            key={item}
            selected={item === "Face Data"}
            sx={{ 
              pl: 2, 
              backgroundColor: item === "Face Data" ? "white" : "transparent",
              borderRadius: item === "Face Data" ? "8px" : "0",
              boxShadow: item === "Face Data" ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
              margin: item === "Face Data" ? "0 8px" : "0",
              "&.Mui-selected": {
                backgroundColor: "white"
              },
              "&.Mui-selected:hover": {
                backgroundColor: "white"
              }
            }}
          >
            <ListItemText 
              primary={item} 
              primaryTypographyProps={{ 
                fontSize: 14,
                fontWeight: item === "Face Data" ? 700 : 400,
                color: item === "Face Data" ? "black" : "gray"
              }} 
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
} 