"use client";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const UnivsButton = styled(Button)(({ theme }) => ({
  borderRadius: "15px",
  padding: "10px 50px",
  color: "white",
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export default function CustomButton(props) {
  return <UnivsButton variant="contained" {...props} />;
} 