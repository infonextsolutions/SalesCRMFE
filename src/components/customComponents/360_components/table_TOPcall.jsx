import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

function Top_Call(){
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
      

    return(
        <>
        <h1 className="text-black">Top Call</h1>
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

        </>
    )
}


export default Top_Call;