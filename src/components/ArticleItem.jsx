import React from "react";
import {
    CardContent,
    Typography,
    CardActions,
    Button,
  } from "@mui/material";

export const ArticleItem = ({item}) => {
  return (
    <>
      <CardContent sx={{ backgroundColor: "white" }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {item.tags[0]}
        </Typography>
        <Typography variant="h5" component="div">
        {item.title}
        </Typography>
        <Typography variant="body2">
          {
            item.body.length > 100 ? item.body.substring(0, 100) + ' ...' : item.body
          }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </>
  );
};
