import { Card, CardContent, Typography } from '@mui/material';
// import { green } from '@mui/material/colors';


function DealsCard() {
  


  

  
  return (
    <Card sx={{ maxWidth: 300, border: 2, borderColor: 'pink' }}>  
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Open Deals
        </Typography>
        <Typography variant="h3" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
          100
          <Typography variant="h6" component="span" sx={{ color: "green", ml: 1 }}>
          ↑50.8%
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}


export default DealsCard;