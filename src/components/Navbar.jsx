import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from '@material-ui/core/Drawer';
import {
	AppBar,
	Toolbar,
  ListItem,
  ListItemIcon,
	IconButton,
	ListItemText,
	Avatar,
	Divider,
	List,
	Typography,
	Box
} from '@material-ui/core';
import { ArrowBack, AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';
import avatar from '../assets/avatar.png';
import Footer from './Footer';

// CSS Styles
const useStyles = makeStyles(theme => ({
  menuSliderContainer: {
    width: '90vw',
    background: '#2475B0',
    height: '100%'
  },
  avatar: {
    display: 'block',
    margin: '0.5rem auto',
    width: theme.spacing(13),
    height: theme.spacing(13)
  },
  listItem: {
    color: '#fff'
  }
}));

const menuItems = [
  {
    listIcon: <Home/>,
    listText: 'Home',
    listPath: '/'
  },
  {
    listIcon: <AssignmentInd/>,
    listText: 'Resume',
    listPath: '/resume'
  },
  {
    listIcon: <Apps/>,
    listText: 'Portfolio',
    listPath: '/portfolio'
  },
  {
    listIcon: <ContactMail/>,
    listText: 'Contacts',
    listPath: '/contacts'
  },
]

const Navbar = () => {
  const [state, setState] = useState({
    right: false
  })

  const togglerSlider = (slider, open) => ()=>{
    setState({...state, [slider]:open});
  };
  const classes = useStyles();

  const sideList = slider =>(
      <Box className={classes.menuSliderContainer}
      component='div'
      onClick={togglerSlider('right', false)}>
        <Avatar className={classes.avatar} src={avatar} alt='avatar' />
        <Divider />
        <List>
        {menuItems.map((listItem, key) =>(
          <ListItem button key={key} component={Link} to={listItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {listItem.listIcon}
            </ListItemIcon>
            <ListItemText className={classes.listItem} primary={listItem.listText} />
          </ListItem>
        ))}
        </List>
      </Box>
  );

	return (
    <div>
      <Box component="nav">
        <AppBar position='static' style={{background: '#2475B0'}}>
          <Toolbar>
            <IconButton onClick={togglerSlider('right', true)}>
              <ArrowBack style={{color: 'tomato'}} />
            </IconButton>
            <Typography variant='h5' style={{color: '#fff'}}>
              Portfolio
            </Typography>
            <MobileRightMenuSlider 
            anchor='right' 
            open={state.right} 
            onClose={togglerSlider('right', false)}>
              {sideList('right')}
            <Footer />
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
	);
};

export default Navbar;
