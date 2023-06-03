import React, { useState } from "react";
import Papa from "papaparse";
import { useDispatch } from "react-redux";
import { uploadFile } from "../reducers/fileReducer";

/*
 uploads the csv file
*/

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  // checks size of the file
  const handleFileChange = (event) => {
    const uploadFile = event.target.files[0];
    if (uploadFile && uploadFile.size <= 100 * 1024) {
      setFile(uploadFile);
      setError("");
    } else {
      setFile(null);
      setError("File size exceeds the limit of 100KB");
    }
  };

  // uploads the file to redux
  const handleUpload = () => {
    if (file) {
      Papa.parse(file, {
        complete: function (results) {
          dispatch(uploadFile(results.data));
        },
      });
    } else {
      setError("Please select a valid file");
    }
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default FileUpload;
