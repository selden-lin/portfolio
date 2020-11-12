import React from 'react';
import styles from './experience.module.css';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

import data from '../../assets/data.json';

export default function Experience() {
    const makeList = (items) => {
        return items.reduce((acc, item, index) => {
            acc.push(<li key={index}>{item}</li>)
            return acc;
        }, [])
    }
    const experienceItems = data["experience"].reduce((acc, item, index) => {
        if (index == data.experience.length - 1) {
            acc.push(
                <div className={styles.expRow} key={index}>
                    <div className={styles.expContent}>
                        <h3>{item.company}</h3>
                        <p>{item.date}</p>
                        <p>{item.title}</p>
                        <p>{item.location}</p>
                        <ul>
                            {makeList(item.description)}
                        </ul>
                    </div>
                </div>

            )
        } else {
            acc.push(
                <div className={styles.expRow} key={index}>
                    <div className={styles.expContent}>
                        <h3>{item.company}</h3>
                        <p>{item.date}</p>
                        <p>{item.title}</p>
                        <p>{item.location}</p>
                        <ul>
                            {makeList(item.description)}
                        </ul>
                    </div>
                    <Divider component="p" />
                </div>

            )
        }
        return acc;
    }, [])
    return (
        <Grid id="experience" container className={styles.experienceGrid}>
            <Grid item xs={4} />
            <Grid item xs={4} style={{ textAlign: 'center' }}>
                <h1>EXPERIENCE</h1>
            </Grid>
            <Grid item xs={4} />
            <Grid item xs={12}>
                <Paper depth={3} >
                    {experienceItems}
                </Paper>
            </Grid>
        </Grid>
    )
} 