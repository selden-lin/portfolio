import React from 'react';

import Grid from '@material-ui/core/Grid';

import ProjectItem from './ProjectItem';
import styles from './projects.module.css';

export default function Projects() {
   
    return (
        <Grid id='projects' container className={styles.grid}>
            <Grid item xs={4} />
            <Grid item xs={4} style={{ textAlign: 'center' }}>
                <h1>PROJECTS</h1>
            </Grid>
            <Grid item xs={4} />
            <Grid item xs={4}>
                <ProjectItem 
                title="Java paint"/>
            </Grid>
        </Grid>
    )
} 