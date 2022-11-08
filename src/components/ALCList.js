import React from "react";
import { Avatar, Box, Divider, Grid, Stack, Typography } from "@mui/material";
import {
  BadgeOutlined,
  EmojiEventsOutlined,
  MilitaryTechOutlined,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";
import { faAward, faMedal, faTrophy } from "@fortawesome/free-solid-svg-icons";

function ALCList() {
  return (
    <Grid
      item
      sm={4}
      xs={12}
      sx={{
        "&:hover": { backgroundColor: "black" },
      }}
    >
      <Box ml={{ sm: 4, xs: 2 }} mt={{ sm: 8, xs: 2 }}>
        <Stack direction="row" mb={{ sm: 8, xs: 3 }}>
          <Avatar
            sx={{
              bgcolor: "#D9D9D9",
              width: { sm: 70, xs: 35 },
              height: { sm: 70, xs: 35 },
            }}
          >
            <Typography sx={{ fontSize: { sm: "30px", xs: "15px" } }}>
              <FontAwesomeIcon icon={faTrophy} style={{ color: "black" }} />
            </Typography>
          </Avatar>
        </Stack>
        <Typography
          sx={{ fontSize: { sm: "20px", xs: "13px" }, mb: { sm: 1, xs: 0.5 } }}
        >
          <b>국경 없는 과학자 기술자 회장상</b>
        </Typography>
        <Box color="#959595" sx={{ mb: 2 }}>
          <Typography sx={{ fontSize: { sm: "13px", xs: "10px" } }}>
            제 10회 소외된 90%를 위한 창의설계 경진대회
          </Typography>
          <Typography sx={{ fontSize: { sm: "13px", xs: "10px" } }}>
            과학기술정보통신부
          </Typography>
        </Box>
        <Box className="smallTitle" sx={{ mb: { sm: 5, xs: 2.5 } }}>
          <Divider
            color="white"
            sx={{
              borderBottomWidth: { sm: 3, xs: 1.5 },
              width: { sm: 30, xs: 20 },
              mr: { sm: 3, xs: 1.5 },
            }}
          />
          <Typography
            color="white"
            sx={{ fontSize: { sm: "13px", xs: "10px" } }}
          >
            더보기
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}

export default ALCList;
