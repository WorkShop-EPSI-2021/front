import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed" style={{backgroundColor: "black"}}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24 }}
          >
            {`C' MAIL`}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          
          <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="#proposition"
              sx={rightLink}
            >
              {'Proposition'}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="#scoring"
              sx={rightLink}
            >
              {'Scoring'}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="#details"
              sx={rightLink}
            >
              {'Details'}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="#sanitycheck"
              sx={rightLink}
            >
              {'Sanity Checks'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="http://wikipedia.com"
              sx={{ ...rightLink, color: 'red' }}
            >
              {'Télécharger'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
