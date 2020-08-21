import React from 'react';
import Navbar from './Navbar';
import {makeStyles} from '@material-ui/core/styles';
import {Box,
  Grid, 
  Card, 
  CardActionArea, 
  CardActions, 
  CardMedia, 
  Button, 
  Typography,
  CardContent
} from '@material-ui/core';
import Project1 from '../assets/images/p1.jpg';
import Project2 from '../assets/images/p2.jpg';
import Project3 from '../assets/images/p3.png';
import Project4 from '../assets/images/p4.png';
import Project5 from '../assets/images/p5.png';
import Project6 from '../assets/images/p6.jpg';
import Project7 from '../assets/images/p7.jpg';

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer:{
    maxWidth: "90%",
    margin: "5rem auto"
  }
});

function Portfolio() {
  const classes = useStyles()
  return (
    <div>
      <Box component='div' className={classes.mainContainer}>
        <Navbar />
        <Grid container justify='center'>
        {/* Project-1 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia component='img' alt='Project-1' width='100%' image={Project7} />
                <CardContent>
                  <Typography gutterBottom variant='h5'>
                    Project 1
                  </Typography>
                  <Typography variant='body2' color='textSecondary' component='p'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus soluta tempora dolore possimus eaque temporibus! Excepturi cum tempore facere possimus fuga nihil pariatur minus magnam illo nostrum minima, neque assumenda.
                  </Typography>
                </CardContent>
              </CardActionArea>
                <CardActions>
                  <Button size='small' color='primary'>
                    Share
                  </Button>
                  <Button size='small' color='primary'>
                    Live Demo
                  </Button>
                </CardActions>
            </Card>
          </Grid>
        {/* Project-2 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia component='img' alt='Project-2' width='100%' image={Project2} />
                <CardContent>
                  <Typography gutterBottom variant='h5'>
                    Project 2
                  </Typography>
                  <Typography variant='body2' color='textSecondary' component='p'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus soluta tempora dolore possimus eaque temporibus! Excepturi cum tempore facere possimus fuga nihil pariatur minus magnam illo nostrum minima, neque assumenda.
                  </Typography>
                </CardContent>
              </CardActionArea>
                <CardActions>
                  <Button size='small' color='primary'>
                    Share
                  </Button>
                  <Button size='small' color='primary'>
                    Live Demo
                  </Button>
                </CardActions>
            </Card>
          </Grid>
        {/* Project-3 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia component='img' alt='Project-3' width='100%' image={Project3} />
                <CardContent>
                  <Typography gutterBottom variant='h5'>
                    Project 3
                  </Typography>
                  <Typography variant='body2' color='textSecondary' component='p'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus soluta tempora dolore possimus eaque temporibus! Excepturi cum tempore facere possimus fuga nihil pariatur minus magnam illo nostrum minima, neque assumenda.
                  </Typography>
                </CardContent>
              </CardActionArea>
                <CardActions>
                  <Button size='small' color='primary'>
                    Share
                  </Button>
                  <Button size='small' color='primary'>
                    Live Demo
                  </Button>
                </CardActions>
            </Card>
          </Grid>
        {/* Project-4 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia component='img' alt='Project-4' width='100%' image={Project4} />
                <CardContent>
                  <Typography gutterBottom variant='h5'>
                    Project 4
                  </Typography>
                  <Typography variant='body2' color='textSecondary' component='p'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus soluta tempora dolore possimus eaque temporibus! Excepturi cum tempore facere possimus fuga nihil pariatur minus magnam illo nostrum minima, neque assumenda.
                  </Typography>
                </CardContent>
              </CardActionArea>
                <CardActions>
                  <Button size='small' color='primary'>
                    Share
                  </Button>
                  <Button size='small' color='primary'>
                    Live Demo
                  </Button>
                </CardActions>
            </Card>
          </Grid>
        {/* Project-5 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia component='img' alt='Project-5' width='100%' image={Project5} />
                <CardContent>
                  <Typography gutterBottom variant='h5'>
                    Project 5
                  </Typography>
                  <Typography variant='body2' color='textSecondary' component='p'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus soluta tempora dolore possimus eaque temporibus! Excepturi cum tempore facere possimus fuga nihil pariatur minus magnam illo nostrum minima, neque assumenda.
                  </Typography>
                </CardContent>
              </CardActionArea>
                <CardActions>
                  <Button size='small' color='primary'>
                    Share
                  </Button>
                  <Button size='small' color='primary'>
                    Live Demo
                  </Button>
                </CardActions>
            </Card>
          </Grid>
        {/* Project-6 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia component='img' alt='Project-6' width='100%' image={Project6} />
                <CardContent>
                  <Typography gutterBottom variant='h5'>
                    Project 6
                  </Typography>
                  <Typography variant='body2' color='textSecondary' component='p'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus soluta tempora dolore possimus eaque temporibus! Excepturi cum tempore facere possimus fuga nihil pariatur minus magnam illo nostrum minima, neque assumenda.
                  </Typography>
                </CardContent>
              </CardActionArea>
                <CardActions>
                  <Button size='small' color='primary'>
                    Share
                  </Button>
                  <Button size='small' color='primary'>
                    Live Demo
                  </Button>
                </CardActions>
            </Card>
          </Grid>
        {/* Project-7 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia component='img' alt='Project-7' width='100%' image={Project1} />
                <CardContent>
                  <Typography gutterBottom variant='h5'>
                    Project 7
                  </Typography>
                  <Typography variant='body2' color='textSecondary' component='p'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus soluta tempora dolore possimus eaque temporibus! Excepturi cum tempore facere possimus fuga nihil pariatur minus magnam illo nostrum minima, neque assumenda.
                  </Typography>
                </CardContent>
              </CardActionArea>
                <CardActions>
                  <Button size='small' color='primary'>
                    Share
                  </Button>
                  <Button size='small' color='primary'>
                    Live Demo
                  </Button>
                </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
};

export default Portfolio
