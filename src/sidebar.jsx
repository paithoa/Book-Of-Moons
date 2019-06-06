import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { SocialIcon } from 'react-social-icons';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Facebook from '@material-ui/core/SvgIcon';
import SvgIcon from '@material-ui/core/SvgIcon';
import Logo from './static/images/logo.png'

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

class SwipeableTemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {['About','Horror', 'Personal Development','Romance','Mystery','Comedy','Short Stories','Fiction','Non-Fiction','Biography','General','Anime/Japan','History'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemLink href = {`/categories/${text}`}>
              <ListItemText primary={text}   />
              </ListItemLink>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Instagram'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemLink href = {'https://www.instagram.com/book.of.moons/'}>
              <SocialIcon url="http://instagram.com/book.of.moons"/>
              <ListItemText primary={text} style ={{marginLeft:20}}/>
              </ListItemLink>
            </ListItem>
          ))}
        </List>
      </div>
    );

    const fullList = (
      <div className={classes.fullList}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      
      <div > 
       <table style= {{height:'100%',
   width: '100%',
   margin: 0,
   padding: 0,
   border: 0,}}>
         <tr>
           <td style={{width:1}}>
        <Button onClick={this.toggleDrawer('left', true)}>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
        <MenuIcon>
                </MenuIcon>
          </IconButton>
        </Button>

        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
        </td>
        <td style={{textAlign:"center"}} >
              <a href="/">
              <img id="logo" src={Logo} style={{height:65,marginTop:10,paddingRight:50}}></img>
              </a>
            </td>
       

              </tr>
        
              </table>
      </div>
    );
  }
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwipeableTemporaryDrawer);