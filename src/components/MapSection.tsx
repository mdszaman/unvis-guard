"use client";

import { Box } from "@mui/material";
import Timeline from "./Timeline";
import { useEffect, useRef } from "react";
import maplibregl, { Map } from "maplibre-gl";

const cameraIconPath = "/images/camera-icon.png";

const cameraPoints = [
  { label: "Camera 1", position: [90.3982, 23.7510] },
  { label: "Camera 2", position: [90.4082, 23.7510] },
  { label: "Camera 3", position: [90.3982, 23.7610] },
  { label: "Camera 4", position: [90.3882, 23.7510] },
] as const;

export default function MapSection() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    (async () => {
      const map = new maplibregl.Map({
        container: mapContainer.current as HTMLElement,
        style: "https://api.maptiler.com/maps/hybrid/style.json?key=6uH8bAZlGb2Uq2CQjMAQ",
        center: [90.3982, 23.7510],
        zoom: 14,
      });

      mapRef.current = map;

      map.addControl(new maplibregl.NavigationControl({ showCompass: false, showZoom: false }));

      map.on("load", () => {
        setTimeout(() => map.resize(), 100);

        cameraPoints.forEach((cam) => {
          const el = document.createElement("img");
          el.src = cameraIconPath;
          el.alt = cam.label;
          el.style.width = "40px";
          el.style.height = "40px";

          new maplibregl.Marker({ element: el })
            .setLngLat(cam.position as [number, number])
            .addTo(map);
        });

        map.addSource("camera-path", {
          type: "geojson",
          data: {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: cameraPoints.map((c) => c.position as [number, number]),
            },
            properties: {},
          },
        } as any);

        map.addLayer({
          id: "camera-path-layer",
          type: "line",
          source: "camera-path",
          paint: {
            "line-color": "#0039cb",
            "line-width": 4,
          },
        });
      });
    })();

    return () => {
      if (mapRef.current) mapRef.current.remove();
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1, pl: 2, pb: 2, display: "flex", flexDirection: "column", height: "100%" }}>
      <Box
        sx={{
          position: "relative",
          flexGrow: 1,
          borderRadius: 2,
          border: 1,
          borderColor: "divider",
          height: "100%",
        }}
      >
        <Box ref={mapContainer} sx={{ position: "absolute", inset: 0, height: "100%", width: "100%" }} />

        <Box
          sx={{
            position: "absolute",
            bottom: 16,
            left: "50%",
            transform: "translateX(-50%)",
            width: "90%",
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 3,
            p: 2,
            zIndex: 10,
          }}
        >
          <Timeline />
        </Box>
      </Box>
    </Box>
  );
} 