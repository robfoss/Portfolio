import React from 'react';
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Avatar, Box, Grid } from '@material-ui/core';
import avatar from '../images/fox.png'
import Typed from 'react-typed'




// CSS Styles Attempt 2
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    title: {
        color: "tomato"
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}))

const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt='Foss The Developer Logo' />
            </Grid>
            <Typography className={classes.title} variant='h4'>
                <Typed strings={["Foss_TheDeveloper"]} typeSpeed={30} />
            </Typography>
            <br />
            <Typography className={classes.subtitle} variant='h5'>
                <Typed strings={["Software Development", "Web Design", "Full Stack Development"]} typeSpeed={40} backSpeed={60} loop />
            </Typography>
        </Box>
    )
}

export default Header
