import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

import styles from './navbar.module.css'

export default function Navbar() {
    return (
        <AppBar className={styles.navBlock} position="fixed">
            <Toolbar className={styles.navToolBar} variant="dense">
                <Button color="inherit">Intro</Button>
                <Button color="inherit">Experience</Button>
                <Button color="inherit">Projects</Button>
                <Button color="inherit">Resume</Button>
            </Toolbar>
        </AppBar>
    )
}