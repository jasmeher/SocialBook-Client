import React, { useEffect, useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "pages/navbar/Navbar";
import FriendListWidget from "pages/widgets/FriendListWidget";
import PostsWidget from "pages/widgets/PostsWidget";
import UserWidget from "pages/widgets/UserWidget";

const Profile = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const getUser = async () => {
    const response = await fetch(
      `https://socialbook-api-xwvp.onrender.com/users/${userId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  if (!user) {
    return null;
  }

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="2rem"
        justifyContent={"center"}
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={userId} picturePath={user.picturePath} />
          <Box margin="2rem 0" />
          <FriendListWidget userId={userId} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <Typography
            color={palette.neutral.dark}
            variant="h5"
            fontWeight="500"
            sx={{ marginBottom: "1.5rem" }}
          >
            {user.firstName}'s Posts
          </Typography>
          <PostsWidget userId={userId} isProfile={true} />
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
