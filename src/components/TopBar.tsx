import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, Button, IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import UnivsButton from "./UnivsButton";

export default function TopBar() {
  return (
    <AppBar position="static" color="default" elevation={0} sx={{ backgroundColor: "#F0F0F3" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight="bold">
          UNIVS Guard
        </Typography>

        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", gap: 2 }}>
          <UnivsButton color="inherit" sx={{ backgroundColor: "#064073" }}>VIP</UnivsButton>
          <Button color="inherit">DATA</Button>
          <Button color="inherit">MONITORING</Button>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box sx={{ position: 'relative' }}>
            <Button
              color="inherit"
              endIcon={<span style={{ fontSize: '0.7rem' }}>▼</span>}
              onClick={() => {
                const menu = document.getElementById('language-menu');
                if (menu) {
                  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
                }
              }}
            >
              EN
            </Button>
            <Box
              id="language-menu"
              sx={{
                display: 'none',
                position: 'absolute',
                top: '100%',
                right: 0,
                backgroundColor: 'white',
                boxShadow: '0px 2px 10px rgba(0,0,0,0.1)',
                borderRadius: 1,
                zIndex: 1000,
              }}
            >
              <Button color="inherit" fullWidth sx={{ justifyContent: 'flex-start', px: 2 }}>EN</Button>
              <Button color="inherit" fullWidth sx={{ justifyContent: 'flex-start', px: 2 }}>FR</Button>
              <Button color="inherit" fullWidth sx={{ justifyContent: 'flex-start', px: 2 }}>ES</Button>
            </Box>
          </Box>
          <IconButton color="inherit" size="small">
            <PersonIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
} 