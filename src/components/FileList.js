import React, { useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Input,
} from "@mui/material";

/*
  show the uploaded csv file content in Table view.
*/

const FileList = () => {
  const files = useSelector((state) => state.files.list);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortSize, setSortSize] = useState(false);
  const [list, setList] = useState(files.slice(1, files.length));

  let header = files[0];
  let index = header.findIndex((ele) =>
    ele.toLowerCase().indexOf("size") >= 0 ? 1 : 0
  );
  let rows = files.slice(1, files.length);

  // search operation on data for name and duration
  const handleSearch = () => {
    if (searchTerm && searchTerm.length) {
      const list = rows.filter((rows) =>
        rows.indexOf(searchTerm) >= 0 ? true : false
      );
      setList(list);
    } else {
      setList(rows);
    }
  };

  // sort the data based on size
  const handleSort = () => {
    if (sortSize) {
      let sortedArray = list.sort(function (a, b) {
        return b[index] - a[index];
      });
      setList(sortedArray);
    } else {
      let sortedArray = list.sort(function (a, b) {
        return a[index] - b[index];
      });
      setList(sortedArray);
    }
    setSortSize(!sortSize);
  };

  return (
    files && (
      <div>
        <div style={{ float: "right" }}>
          <Box display="flex" alignItems="center">
            <Input
              placeholder="Search"
              label="Search"
              variant="outlined"
              onChange={(e) => setSearchTerm(e.target.value)}
            />{" "}
            &nbsp;&nbsp;&nbsp;
            <Button variant="contained" color="primary" onClick={handleSearch}>
              Search
            </Button>
          </Box>
        </div>
        <br />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {header.map((ele, ind) => (
                  <th>
                    {ele}{" "}
                    {ind === index ? (
                      sortSize ? (
                        <ArrowDownwardIcon onClick={handleSort} />
                      ) : (
                        <ArrowUpwardIcon onClick={handleSort} />
                      )
                    ) : (
                      ""
                    )}{" "}
                  </th>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((file) => (
                <TableRow key={uuidv4()}>
                  {file.map((item) => (
                    <TableCell>{item}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
  );
};

export default FileList;
