import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Typography, Box, List, ListItem } from "@material-ui/core";
import Navbar from './Navbar';
 




const useStyles = makeStyles( theme => ({
    mainContainer: {
        background: "#233"
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both",
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)",
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato"
            }
        }

    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "tomato",
        color: "white",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }

    },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "#ffff",
        padding: "0",
        textTransform: "uppercase"
    },
    wrapIcon: {
        verticalAlign: 'middle',
        display: 'inline-flex'
       }


}));


const Resume = () => {
    const classes = useStyles();
    return (
    <>
    <Navbar />
    <Box component='header' className={classes.mainContainer}>
        <Typography variant='h4' align='center' className={classes.heading}>
            Experience
        </Typography>
        <Box component='div' className={classes.timeLine}>
            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2003-2010</Typography>
            <Box component="div" className={classes.timeLineItem}>
                <Typography variant="h5" align="center" className={classes.subheading}>
                US ARMY
                </Typography>
                <Typography variant="body1" align="center" style={{color: "tomato"}}>
                    1-6 FA
                </Typography>
                <Typography variant="subtitle1" align="left" style={{color: "white"}}>
                    <List>
                    <ListItem> &#9675; Served as a Howitzer Gunner in a Army rapidly deployable Infantry Battalion Task Force that is part of the 1st Infantry Division.</ListItem>
                    <ListItem> &#9675; Assisted the Section Chief in training, health, welfare, and discipline of four Soldiers.</ListItem>
                    </List>
                </Typography>
            </Box>
            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2012-2014</Typography>
            <Box component="div" className={classes.timeLineItem}>
                <Typography variant="h5" align="center" className={classes.subheading}>
                Freeland WebDev 
                </Typography>
                <Typography variant="body1" align="center" style={{color: "tomato"}}>
                    Independent Contractor
                </Typography>
                <Typography variant="subtitle1" align="left" style={{color: "white"}}>
                <List>
                    <ListItem> &#9675; Utilized Adobe's Creative Suite to build, develop and maintain small websites for local vendors </ListItem>
                    <ListItem> &#9675; Designed and printed brochures, post cards and other print media</ListItem>
                </List>
                </Typography>
            </Box>
            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2014-2018</Typography>
            <Box component="div" className={classes.timeLineItem}>
                <Typography variant="h5" align="center" className={classes.subheading}>
                 Evening Bar Manager 
                </Typography>
                <Typography variant="body1" align="center" style={{color: "tomato"}}>
                    Miro Spanish Grille
                </Typography>
                <Typography variant="subtitle1" align="center" style={{color: "white"}}>
                <List>
                    <ListItem> &#9675; Recruited, interviewed and hired and trained bar staff</ListItem>
                    <ListItem> &#9675; Worked with liquor vendors to develop new promotions for the bar</ListItem>
                    <ListItem> &#9675; Ensured bar was profitable by analyzing liquor costs versus sales.</ListItem>
                </List>
                </Typography>
            </Box>
            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2015-2020</Typography>
            <Box component="div" className={classes.timeLineItem}>
                <Typography variant="h5" align="center" className={classes.subheading}>
                    Commercial Real Estate Broker 
                </Typography>
                <Typography variant="body1" align="center" style={{color: "tomato"}}>
                    CRCBR
                </Typography>
                <Typography variant="subtitle1" align="center" style={{color: "white"}}>
                <List>
                    <ListItem> &#9675; Developed marketing strategies in order to increase listing of commercial properties.</ListItem>
                    <ListItem> &#9675; Utilized cold calling, sales networks, telemarketing, and advertising mediums to gather buyers, sellers, and financiers.</ListItem>
                </List>
                </Typography>
            </Box>
        </Box>
    </Box>
    </>
    )
}

export default Resume
