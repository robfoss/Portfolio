import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import Navbar from './Navbar';
import project1 from '../images/bose.png'



const useStyles = makeStyles({
    mainContainer: {
        background: '#233',
        height: '100%'
    },
    cardContainer: {
        maxWidth: 345,
        margin: '5rem auto'
    }
})

const Portfolio = () => {
    const classes = useStyles();
    return (
        <Box component='div' className={classes.mainContainer}>
            <Navbar/>
            <Grid container justify='center'>
                {/* Financial Services Website */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component='img'
                                alt='Project 1' 
                                height='149' 
                                image={project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    Financial Services Website
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor sed corporis aspernatur eos perferendis 
                                    vero ratione explicabo culpa consequatur illum, impedit sunt vitae distinctio dolores ea expedita cum, illo qui!
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
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component='img'
                                alt='Project 2' 
                                height='149' 
                                image={project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    Online Store
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor sed corporis aspernatur eos perferendis 
                                    vero ratione explicabo culpa consequatur illum, impedit sunt vitae distinctio dolores ea expedita cum, illo qui!
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
                
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component='img'
                                alt='Project 1' 
                                height='149' 
                                image={project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    React App
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor sed corporis aspernatur eos perferendis 
                                    vero ratione explicabo culpa consequatur illum, impedit sunt vitae distinctio dolores ea expedita cum, illo qui!
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
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component='img'
                                alt='Project 1' 
                                height='149' 
                                image={project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    Project 4
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor sed corporis aspernatur eos perferendis 
                                    vero ratione explicabo culpa consequatur illum, impedit sunt vitae distinctio dolores ea expedita cum, illo qui!
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
    )
}

export default Portfolio
