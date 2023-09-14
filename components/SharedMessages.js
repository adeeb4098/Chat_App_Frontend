import { Box, Grid, IconButton, Stack, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { UpdateSidebarType } from "../redux/slices/app";
import { useDispatch } from "react-redux";
import { CaretLeft } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { SHARED_DOCS, SHARED_LINKS } from "../data";
import { DocMessage, LinkMessage } from "./Conversations/MessageType";

const SharedMessages = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  return (
    <Box
      sx={{ width: 320, height: "100vh" }}
    >
      <Stack sx={{ height: "100%" }}>
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
          }}
        >
          <Stack
            sx={{ height: "100%", p: 2 }}
            direction="row"
            alignItems={"center"}
            spacing={3}
          >
            <IconButton
              onClick={() => {
                dispatch(UpdateSidebarType("CONTACT"));
              }}
            >
              <CaretLeft />
            </IconButton>
            <Typography variant="subtitle2">Shared Messages</Typography>
          </Stack>
        </Box>

        <Tabs sx={{px: 2, py: 2}} value={value} onChange={handleChange} centered>
          <Tab label="Media" />
          <Tab label="Links" />
          <Tab label="Docs" />
        </Tabs>

        {/* Body */}

        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflow: "scroll",
          }} 
          spacing={value === 1 ? 1 : 3}
          padding={3}
        >
          {/* <Conversation starred={true} /> */}
          {(() => {
            switch (value) {
              case 0:
                return (
                  <Grid container spacing={2}>
                    {[0, 1, 2, 3, 4, 5, 6].map((el) => (
                      <Grid item xs={4}>
                        <img
                          src={faker.image.avatar()}
                          alt={faker.name.fullName()}
                        />
                      </Grid>
                    ))}
                  </Grid>
                );
              case 1:
                return SHARED_LINKS.map((el) => <LinkMessage el={el} />);

              case 2:
                return SHARED_DOCS.map((el) => <DocMessage el={el} />);

              default:
                break;
            }
          })()}
        </Stack>
      </Stack>
    </Box>
  );
};

export default SharedMessages;
