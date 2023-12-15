import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

function Top_Call() {
  const data = [
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

  const columns = ["Call Title", "Call Owner", "Call Duration", "Call Score"];


  return (
    <div className="w-[auto] h-[auto] bg-[#fff] rounded-xl shrink-0 px-[19px] py-[19px] ml-[50px]">
      <h1 className="text-[20px] font-medium text-[#3F434A] tracking-wide">Top Call</h1>
      <div className='chart-container'>
        <TableContainer className="table">
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column}>{column}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
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
      </div>
    </div>
  )
}


export default Top_Call;