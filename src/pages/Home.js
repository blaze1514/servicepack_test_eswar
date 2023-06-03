import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { AUDIO_PATH, CSV_PATH } from "../constants/routingPaths";
import { Link } from "react-router-dom";
import { clearUser } from "../helper/localStorage";

/*
 Home page after logging in to show Audio and CSV components
*/

const Home = () => {
  const logout = () => {
    clearUser();
    window.location.href = "/";
  };
  return (
    <>
      <Button style={{ float: "right" }} onClick={logout}>
        Logout
      </Button>
      <Container
        maxWidth="md"
        style={{ display: "flex", marginTop: "10%", justifyContent: "center" }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid xs={12} sm={6} style={{ padding: "10px" }}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  <Link to={AUDIO_PATH}>Audio</Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} style={{ padding: "10px" }}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  <Link to={CSV_PATH}>CSV</Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
