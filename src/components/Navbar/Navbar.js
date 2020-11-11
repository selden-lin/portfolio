import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
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

    navScroll(e) {
        if (window.scrollY > window.innerHeight - 70) {
            this.setState({ navBlockStyle: styles.navBlockBottom })
        } else {
            this.setState({ navBlockStyle: styles.navBlockTop })
        }
    }

    render() {
        return (
            <AppBar className={this.state.navBlockStyle} position="fixed">
                <Toolbar className={styles.navToolBar} variant="dense">
                    <a href="#intro" >
                        <Button color="inherit">Intro</Button>
                    </a>
                    <a href="#experience" >
                        <Button color="inherit">Experience</Button>
                    </a>
                    <a href="#projects" >
                        <Button color="inherit">Projects</Button>
                    </a>
                    <Button color="inherit">Resume</Button>
                </Toolbar>
            </AppBar>
        );
    }

}