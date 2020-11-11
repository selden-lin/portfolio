import React from 'react';
import styles from './experience.module.css';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

export default function Experience() {
    return (
        <Grid container className={styles.experienceGrid}>
            <Grid item xs={4} />
            <Grid item xs={4} style={{ textAlign: 'center' }}>
                <h1>EXPERIENCE</h1>
            </Grid>
            <Grid item xs={4} />
            <Grid item xs={12}>
                <Paper depth={3}>
                    <div className={styles.expRow}>
                        <div className={styles.expContent}>
                            <h3>Slalom Build</h3>
                            <p>Software engineer intern</p>
                            <p>June 2020 - August 2020</p>
                            <ul>
                                <li>Implemented modules for internal website such as search using PHP, JavaScript and Drupal</li>
                                <li>Implemented accessibility features using Angular for employee hackathon website</li>
                            </ul>
                        </div>
                    </div>
                    <Divider component="p" />
                </Paper>
            </Grid>
        </Grid>
    )
} 