import { Card, CardContent, Typography } from "@mui/material";
// import { green } from '@mui/material/colors';

function DealsCard({ label, count, percent, icon }) {
  return (
    <Card sx={{ width: 380, bgcolor: "#fff0f0 " }}>
      <CardContent>
        <Typography
          fontWeight={600}
          color="grey"
          variant="h5"
          component="div"
          gutterBottom
        >
          {label}
        </Typography>
        <Typography
          variant="h3"
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          fontWeight={600}
        >
          {count}
          <Typography
            variant="h6"
            component="span"
            sx={{ color: "green", ml: 1 }}
          >
            {icon}
            {percent}%
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default DealsCard;
