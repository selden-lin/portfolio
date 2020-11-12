import React from 'react';

import Grid from '@material-ui/core/Grid';

import ProjectItem from './ProjectItem';
import styles from './projects.module.css';
import data from '../../assets/data.json';

export default function Projects() {
    const projectItems = data.projects.reduce((acc, item, index) => {
        acc.push(
            <Grid item xs={12} md={6} lg={4} key={index}>
                <ProjectItem data={item} />
            </Grid>
        )
        return acc;
    }, [])
    return (
        <Grid id='projects' container className={styles.grid}>
            <Grid item xs={4} />
            <Grid item xs={4} style={{ textAlign: 'center' }}>
                <h1>PROJECTS</h1>
            </Grid>
            <Grid item xs={4} />
            {projectItems}
        </Grid>
    )
} 