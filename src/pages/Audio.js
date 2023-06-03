import React from "react";
import AudioUpload from "../components/AudioUpload";
import AudioList from "../components/AudioList";
import { Container, Card, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { clearUser } from "../helper/localStorage";

/*
 page has two components audio upload and audio list to upload and show list
*/

const Audio = () => {
  const logout = () => {
    clearUser();
    window.location.href = "/";
  };

  return (
    <>
      <Link className="link-home" to="/">
        home
      </Link>
      <Button style={{ float: "right" }} onClick={logout}>
        Logout
      </Button>
      <Container style={{ display: "block", marginTop: "2%" }}>
        <Card style={{ minHeight: "30%", padding: "20px" }}>
          <h2>Audio Section</h2>
          <AudioUpload />
          <AudioList />
        </Card>
      </Container>
    </>
  );
};

export default Audio;
