import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import { DocMessage, LinkMessage, MediaMessage, ReplyMessage, TextMessage, Timeline } from "./MessageType";

const Message = (menu) => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              //timeline
              return <Timeline el={el} />;
            case "msg":
              switch (el.subtype) {
                case "img":
                  // image msg
                  return <MediaMessage el={el} menu={menu}/>
                case "doc":
                  // link ms
                  return <DocMessage el={el} menu={menu} />
                case "link":
                  // doc msg
                  return <LinkMessage el={el} menu={menu} />
                case "reply":
                  // reply msg
                  return <ReplyMessage el={el} menu={menu} />

                default:
                  return <TextMessage el={el} menu={menu} />
              }

            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
