import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';



export const BasicCard = ({taskType , taskTitle , assignee , taskStatus , taskLevel , onClick}) => {
  return (
    <Card sx={{ minWidth: 275  , textAlign:'left'}}  >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {taskType }
        </Typography>
        <Typography variant="h5" component="div">
          {taskTitle}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {assignee}
        </Typography>
        
        {
            taskStatus == 'pending' ? 
            <Chip label="Pending" color="warning" /> :
            taskStatus == 'completed' ?
            <Chip label="Completed" color="success" /> :
            <Chip label="Queued" color="default" /> 
        }
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {taskLevel}
        </Typography>
      </CardContent>
      <CardActions>
        {
           taskStatus == 'pending' ?   
           <Button size="small" onClick={onClick} >Mark as Completed</Button>
           : null
        }
      </CardActions>
    </Card>
  );
}
