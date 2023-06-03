import React, { useRef } from "react";
import { useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import RepeatIcon from "@mui/icons-material/Repeat";

/*
  show the list of audio files available with operations of play stop and repeat
*/

const AudioList = () => {
  const files = useSelector((state) => state.audios.list);
  const audioRef = useRef(null);

  // play the audio
  const handlePlay = (audio) => {
    audioRef.current.src = URL.createObjectURL(audio);
    audioRef.current.play();
  };

  // stop the audio
  const handleStop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  // repeat the current audio
  const handleRepeat = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  return files && files.length ? (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>File Name</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {files.map((file, index) => (
              <TableRow key={file.name}>
                <TableCell>{file.name}</TableCell>
                <TableCell>
                  <PlayArrowIcon onClick={() => handlePlay(file)}>
                    Play
                  </PlayArrowIcon>

                  <StopIcon onClick={handleStop}>Stop</StopIcon>
                  <RepeatIcon onClick={handleRepeat}>Repeat</RepeatIcon>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
            <audio ref={audioRef}></audio>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  ) : null;
};

export default AudioList;
