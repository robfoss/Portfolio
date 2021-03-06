import React, { useState} from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from '@material-ui/core/Drawer';
import Footer from './Footer';
import { AppBar, Toolbar, ListItem, IconButton, ListItemText, Avatar, Divider, List, Typography, Box, ListItemIcon} from '@material-ui/core';
import { ArrowBack, AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';
import avatar from '../images/fox.png';

//CSS STYLES
const useStyles = makeStyles(theme=> ({
    menuSliderContainer: {
        width: 250,
        background: '#511',
        height: '100%'
    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    lItem: {
        color: 'tan'
    }
}))

const menuItems = [
    {
        listIcon: <Home />,
        listText: 'Home',
        listPath: '/'
    },
    {
        listIcon: <AssignmentInd />,
        listText: 'Resume',
        listPath: '/resume'
    },
    {
        listIcon: <Apps />,
        listText: 'Portfolio',
        listPath: '/portfolio'
    },
    {
        listIcon: <ContactMail />,
        listText: 'Contact',
        listPath: '/contact'
    }
]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })

    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open})
    }

    const classes = useStyles();

    const sideList = slider => (
        <Box 
        className={classes.menuSliderContainer}
        component='div'
        onClick={toggleSlider(slider, false)}
        >
        <Avatar className={classes.avatar} src={avatar} alt='Freaks and Geeks logo' />
        <Divider />
        <List>
            {menuItems.map((listItem, key) =>(
                <ListItem button key={key} component={Link} to={listItem.listPath}>
                <ListItemIcon className={classes.listItem}>
                    {listItem.listIcon}
                </ListItemIcon>
                <ListItemText className={classes.lItem} primary={listItem.listText}/>
                </ListItem>
          
            ))}     
        </List>
    </Box>
    )
    return (
    <>
          <Box component="nav">
            <AppBar position='static' style={{background: '#000'}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider('right', true)}>
                        <ArrowBack style={{color: "orange"}} />
                    </IconButton> 
                    <Typography variant='h5' style={{color: 'tan'}}>Portfolio</Typography>
                     <MobileRightMenuSlider anchor='right' open={state.right} onClose={toggleSlider('right', false)}>
                         {sideList('right')}
                         <Footer /> 
                     </MobileRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
    </>            
    )
}

export default Navbar
