import { Card, CardContent, Typography } from '@mui/material';
// import { green } from '@mui/material/colors';


function DealsCard({ label, count, percent, icon }) {






  return (
    <Card sx={{ maxWidth: 300, border: 2, borderColor: 'pink' }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {label}
        </Typography>
        <Typography variant="h3" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
          {count}
          <Typography variant="h6" component="span" sx={{ color: "green", ml: 1 }}>
            {icon}{percent}%
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}


export default DealsCard;