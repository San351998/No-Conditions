import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import headerstyle from './header.module.css'

const drawerWidth = 240;

function Header(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      {/* <img width={70} height={70} src="./images/mainlogo.png" alt='mainlogo' /> */}
      <Divider />
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemText>link</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemText>link</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemText>link</ListItemText>
          </ListItemButton>
        </ListItem>

      </List>
    </Box>
  );

  return (
    <>
      <div className={headerstyle.header_main}>
        <Toolbar className={headerstyle.header_inner}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <img className={headerstyle.logo_img} width={70} height={70} alt="mainlogo" src="./images/mainlogo.png" alt='mainlogo' />
          <div className={headerstyle.links_wrapper}>
            <div className={headerstyle.links_main} sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button className={headerstyle.link}>
                Docs
              </Button>
              <Button className={headerstyle.link}>
                Blog
              </Button>
              <Button className={headerstyle.link}>
                Job
              </Button>
            </div>
            <div className={headerstyle.header_social}>
               <img alt='instagram' src="./images/instagram.png" />
               <img alt='youtube' src="./images/youtube.png" />
            </div>
          </div>
        </Toolbar>

      </div>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}


export default Header;
