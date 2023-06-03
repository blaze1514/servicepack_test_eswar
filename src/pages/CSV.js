import React from "react";
import FileUpload from "../components/FileUpload";
import FileList from "../components/FileList";
import { useSelector } from "react-redux";
import { clearUser } from "../helper/localStorage";
import { Link } from "react-router-dom";
import { Container, Card, Button } from "@mui/material";

/*
 page has two components CSV upload and CSV list to upload and show list
*/

const CSV = () => {
  const logout = () => {
    clearUser();
    window.location.href = "/";
  };
  const files = useSelector((state) => state.files.list);
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
          <h2>CSV Section</h2>
          <FileUpload />
          {files && <FileList />}
        </Card>
      </Container>
    </>
  );
};

export default CSV;
