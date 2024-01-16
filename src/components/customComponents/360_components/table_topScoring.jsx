import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";

function TopScoringCall() {
  const [toggle, setToogle] = useState("top_scoring_call");
  const handleToogle = (payload) => {
    setToogle(payload);
  };

  const renderToggleSwitch = () => {
    return (
      <div className="flex text-black items-center gap-[20px]">
        <div className="w-[240px] px-2 bg-gray-200 rounded-3xl">
          <button
            className={` ${
              toggle == "top_scoring_call"
                ? "focus:outline-none w-[120px] bg-[#fff] font-medium rounded-3xl text-xs px-5 py-2 mt-2 mb-2"
                : "font-medium text-xs w-[90px]"
            } `}
            onClick={() => handleToogle("top_scoring_call")}
          >
            Top Scoring Calls
          </button>
          <button
            className={`${
              toggle == "lowest_scoring_call"
                ? "focus:outline-none w-[120px] bg-[#fff] font-medium rounded-3xl text-xs px-5 py-2 mt-2 mb-2"
                : "font-medium text-xs w-[100px]"
            } `}
            onClick={() => handleToogle("lowest_scoring_call")}
          >
            Lowest Scoring Calls
          </button>
        </div>
      </div>
    );
  };
  const topScoredata = [
    {
      title: "Demo call with ABC Corp",
      owner: "Aarav Patel",
      duration: "30 min",
      score: 89,
    },
    {
      title: "Demo call with Alpha Group",
      owner: "Megha Sharma",
      duration: "39 min",
      score: 80,
    },
    {
      title: "Demo call with Radisson Group",
      owner: "Subham Singh",
      duration: "25 min",
      score: 75,
    },
    {
      title: "Demo call with Radisson Group",
      owner: "Subham Singh",
      duration: "25 min",
      score: 75,
    },
  ];
  const lowScoredata = [
    {
      title: "Demo call with ABC Corp",
      owner: "Aarav Patel",
      duration: "30 min",
      score: 89,
    },
    {
      title: "Demo call with Alpha Group",
      owner: "Megha Sharma",
      duration: "39 min",
      score: 80,
    },
    {
      title: "Demo call with Radisson Group",
      owner: "Subham Singh",
      duration: "25 min",
      score: 75,
    },
  ];

  const topScoreColumns = [
    "Call Title",
    "Call Owner",
    "Call Duration",
    "Call Score",
  ];
  const lowScoreColumns = [
    "Call Title",
    "Call Owner",
    "Call Duration",
    "Call Score",
  ];

  return (
    <Card className="w-[auto] h-[390px] bg-[#fff] rounded-xl shrink-0 px-[19px] py-[19px]">
      <div className="flex items-center justify-between">
        <h1 className="text-[20px] font-medium text-[#3F434A] tracking-wide">
          Top Scoring Call
        </h1>
        {renderToggleSwitch()}
      </div>
      <div className="chart-container mt-6">
        {toggle == "top_scoring_call" ? (
          <TableContainer className="table">
            <Table>
              <TableHead>
                <TableRow>
                  {topScoreColumns.map((column) => (
                    <TableCell key={column}>{column}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {topScoredata.map((row) => (
                  <TableRow key={row.title}>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.owner}</TableCell>
                    <TableCell>{row.duration}</TableCell>
                    <TableCell>{row.score}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <TableContainer className="table">
            <Table>
              <TableHead>
                <TableRow>
                  {lowScoreColumns.map((column) => (
                    <TableCell key={column}>{column}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {lowScoredata.map((row) => (
                  <TableRow key={row.title}>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.owner}</TableCell>
                    <TableCell>{row.duration}</TableCell>
                    <TableCell>{row.score}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </Card>
  );
}

export default TopScoringCall;
