import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import styles from './navbar.module.css'
import resume from '../../assets/resumeSeldenLin.pdf'

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
                    <a onClick={this.props.introScroll} >
                        <Button color="inherit">Intro</Button>
                    </a>
                    <a onClick={this.props.experienceScroll} >
                        <Button color="inherit">Experience</Button>
                    </a>
                    <a onClick={this.props.projectsScroll}>
                        <Button color="inherit">Projects</Button>
                    </a>
                    <a href={resume} target="_blanks">
                        <Button color="inherit">Resume</Button>
                    </a>
                </Toolbar>
            </AppBar>
        );
    }

}