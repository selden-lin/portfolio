import React from 'react';

import Grid from '@material-ui/core/Grid';
import Particles from 'react-particles-js';

import styles from './intro.module.css'

export default function Intro() {
    return (
        <Grid container className={styles.gridContainer}>
            <Grid item xs={6}>Intro</Grid>
            <Grid item xs={6} style={{backgroundColor: "black"}}>
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 50
                            },
                            "size": {
                                "value": 3
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }}
                    height="100vh" />
            </Grid>
        </Grid>
    )
} 