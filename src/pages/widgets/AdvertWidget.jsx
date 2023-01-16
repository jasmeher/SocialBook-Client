import React from "react";
import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper
      sx={{
        "&:hover": {
          cursor: "pointer",
          backgroundColor: palette.neutral.light,
        },
      }}
      onClick={() => window.open("https://teckwear.onrender.com/", "_blank")}
    >
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Check this out</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/advert.png"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>TECKWEAR Ecommerce</Typography>
        <Typography color={medium}>teckwear.onrender.com</Typography>
      </FlexBetween>
      <Typography color={medium} margin="0.5rem 0">
        An Ecommerce project containing the major features of an ecommerce
        website like sorting,filtering,add to cart, buying the product etc.
      </Typography>
      <Typography color={medium} margin="0.5rem 0">
        Click on this card to navigate to the Website
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
