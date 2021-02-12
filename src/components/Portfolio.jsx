import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import Navbar from './Navbar';
import project1 from '../images/bose.png'
import sea from '../images/sea.png'
import tesla from '../images/teslapage.png'
import bartinder from '../images/btlogo2.png'


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
            <Navbar />
            <Grid container justify='center'>
                {/* Financial Services Website */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component='img'
                                alt='Project 1'
                                height='149'
                                image={sea}
                                onClick={() => window.location = 'https://southeastannuities.com/'}
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    Financial Services Website
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    SouthEastAnnuities.com is a mock financial services website. Made with HTML, CSS, JS, ExpressJS, NodeMailer
                                    and Sequelize. I edited the stock photos in Adobe Photoshop and designed the logo in Adobe Illustrator.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        {/* <CardActions>
                            <Button size='small' color='primary'>
                                Share
                                </Button>
                            <Button size='small' color='primary'>
                                Live Demo
                                </Button>
                        </CardActions> */}
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component='img'
                                alt='Project 2'
                                height='149'
                                image={project1}
                                onClick={() => window.location = 'https://github.com/robfoss/backendproject1.0'}
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    Online Ecommerce Site
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    This is a mock e-commerce website developed in React Native, CommerceJS and StripeJs.
                                    This is a full stack application that can make real transactions. Products can be uploaded via CommerceJS dashboad. Inventory can be updated there as well.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        {/* <CardActions>
                            <Button size='small' color='primary'>
                                Share
                                </Button>
                            <Button size='small' color='primary'>
                                Live Demo
                                </Button>
                        </CardActions> */}
                    </Card>
                </Grid>

                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component='img'
                                alt='Project 1'
                                height='149'
                                image={tesla}
                                onClick={() => window.location = 'https://github.com/robfoss/Tesla-Homepage'}
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    Tesla Home Page
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    My attempt at recreating the iconic Tesla homepage. Developed in React JS and CSS3. The photos were duplicated from the official Tesla website.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        {/* <CardActions>
                            <Button size='small' color='primary'>
                                Share
                                </Button>
                            <Button size='small' color='primary'>
                                Live Demo
                                </Button>
                        </CardActions> */}
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component='img'
                                alt='Project 1'
                                height='149'
                                image={bartinder}
                                onClick={() => window.location = 'https://github.com/robfoss/BarTinder'}

                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    BarTinder
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Is a fun Full Stack mobile application that provides users with cocktail recipes, storage of Favorite
                                    cocktails, and locations of nearby cocktail bars. This application was developed in React Native w/ Expo, ExpressJS, NodeJS, and Sequelize.
                                    I designed the BarTinder logo in Adobe Illustrator.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        {/* <CardActions>
                            <Button size='small' color='primary'>
                                Share
                                </Button>
                            <Button size='small' color='primary'>
                                Live Demo
                                </Button>
                        </CardActions> */}
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Portfolio
