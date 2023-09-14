import React from "react";
import { Box, Stack } from "@mui/material";
import Message from "../../components/Conversations/Message";
import Header from "./Header";
import Footer from "./Footer";

const Conversation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      
      {/* Chat header */}
      <Header />
      
      {/* Messages */}
      <Box width={"100%"} sx={{ flexGrow: 1, height: "100%", overflowY: "scroll" }}>
        <Message menu={true}/>
      </Box>
      
      {/* Chat Footer */}
      <Footer />

    </Stack>
  );
};

export default Conversation;
