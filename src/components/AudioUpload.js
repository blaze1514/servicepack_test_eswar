import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { uploadAudio } from "../reducers/audioReducer";

/* 
  uploads single and bulk audio files
*/

const AudioUpload = ({}) => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const singleInputRef = useRef(null);
  const multiInputRef = useRef(null);

  // checks the size of the file
  const checkSize = (files) => {
    Array.from(files).map((file) => {
      if (file.size > 3 * 1000 * 1024) {
        setError("please select files less than 3MB");
        return false;
      }
    });
    return true;
  };

  // upload the file to redux store
  const handleFileChange = (event) => {
    let uploadFiles = event.target.files;
    let a = checkSize(uploadFiles);
    if (a) {
      dispatch(uploadAudio(uploadFiles));
      setError("")
    }
  };

  // upload single file
  const handleSingleUpload = () => {
    singleInputRef.current.click();
  };

  // uploads multiple files
  const handleBulkUpload = () => {
    multiInputRef.current.click();
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleFileChange}
        accept=".mp3, .wav"
        ref={singleInputRef}
        style={{ display: "none" }}
      />
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        accept=".mp3, .wav"
        ref={multiInputRef}
        style={{ display: "none" }}
      />
      <Button
        variant="contained"
        style={{ marginRight: "20px" }}
        color="primary"
        onClick={handleSingleUpload}
      >
        Upload Single File
      </Button>
      <Button variant="contained" color="primary" onClick={handleBulkUpload}>
        Upload Multiple Files
      </Button>
      {error && error.trim() && <p>{error}</p>}
    </div>
  );
};

export default AudioUpload;
