import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
const Home = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("https://mern-deploy-api-tawny.vercel.app/get")
      .then((res) => {
        console.log(res);
        setdata(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div style={{ margin: "7%" }}>
      <Grid container spacing={2}>
        {data.map((val, i) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <img
                    src={val.img_url}
                    className="img-fluid rounded-start"
                    height={"200px"}
                    alt="..."
                  />
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {val.title}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {val.content}
                  </Typography>

                 
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                  >
                    Delete
                  </Button>
                  <Button
                   
                    size="small"
                    variant="contained"
                    color="secondary"
                  >
                    Update
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Home;
