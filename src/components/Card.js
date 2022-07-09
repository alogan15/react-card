import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import StudyDre from '/Users/andrelogan/dev/DevShop/React/first-react/src/images/studyDre.png';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';


export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <img src={StudyDre}
            height="300px" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align='center'>
            Andre Logan
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            Frontend Developer
          </Typography>
          <Stack spacing={10} direction="row">
            <Button variant="email" startIcon={<MailOutlineIcon />}>Email</Button>
            <Button variant="contained" startIcon={<MailOutlineIcon />}>LinkedIn</Button>
        </Stack>
        <h4>About</h4>
        <Typography>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididatat non ia deserunt mollit anim id est laborum."</Typography>
        <h4>Interests</h4>
        <Typography>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididatat non ia deserunt mollit anim id est laborum."</Typography>
        <footer align="center">
            {<TwitterIcon />}
            {<FacebookIcon />}
            {<InstagramIcon />}
            {<AlternateEmailIcon />}
            {<GitHubIcon />}
        </footer>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
