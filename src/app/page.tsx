"use client";

import { Box } from "@mui/material";
import TopBar from "../components/TopBar";
import SideNav from "../components/SideNav";
import TrackingList from "../components/TrackingList";
import MapSection from "../components/MapSection";

export default function Home() {
  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <TopBar />
      <Box sx={{ flexGrow: 1, display: "flex", overflow: "hidden" }}>
        <SideNav />
        <Box sx={{ width: 320, mb: 2}}>
          <TrackingList />
        </Box>
        <MapSection />
      </Box>
    </Box>
  );
}
