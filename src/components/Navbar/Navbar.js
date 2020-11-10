import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

import styles from './navbar.module.css'

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navBlockStyle: styles.navBlockTop
        }
        this.navScroll = this.navScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.navScroll)
    }

    navScroll (e) {
        if(window.scrollY > window.innerHeight-70) {
            this.setState({navBlockStyle: styles.navBlockBottom})
        } else {
            this.setState({navBlockStyle: styles.navBlockTop})
        }
    }
    
    render () {
        return (
            <AppBar className={this.state.navBlockStyle} position="fixed">
                <Toolbar className={styles.navToolBar} variant="dense">
                    <Button color="inherit">Intro</Button>
                    <Button color="inherit">Experience</Button>
                    <Button color="inherit">Projects</Button>
                    <Button color="inherit">Resume</Button>
                </Toolbar>
            </AppBar>
        );
    }
    
}