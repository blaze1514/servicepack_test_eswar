import React from "react";
import { Container, Card, CardContent, Typography, Grid } from "@mui/material";
import { LOGIN_PATH, REGISTER_PATH } from "../constants/routingPaths";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { setUser } from "../helper/localStorage";

// Main page to load
const Main = () => {
  return (
    <>
      <Container
        maxWidth="md"
        style={{ display: "flex", marginTop: "10%", justifyContent: "center" }}
      >
        <Grid container spacing={3} justifyContent="center">
          {/* {cardData.map((card, index) => ( */}
          <Grid xs={12} sm={6} style={{ padding: "10px" }}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  <Link to={REGISTER_PATH}>Register</Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} style={{ padding: "10px" }}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  <Link to={LOGIN_PATH}>Login</Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} style={{ padding: "10px" }}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {/* <Link to={LOGIN_PATH}>Gmail</Link> */}
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      setUser(credentialResponse);
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                    useOneTap
                  />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} style={{ padding: "10px" }}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  <Link to={LOGIN_PATH}>Facebook</Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Main;
