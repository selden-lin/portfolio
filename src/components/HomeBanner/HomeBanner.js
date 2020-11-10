import React from 'react';
import backgroundImage from '../../assets/img/landing-bg.jpg';
import styles from './homeBanner.module.css';

import Grid from '@material-ui/core/Grid';

export default function HomeBanner() {
    return (
        <Grid container>
            <div className={styles.bannerImgDiv}>
                <div className={styles.bannerTextDiv}>
                    <h1 className={styles.line1}>I am Selden Lin</h1>
                </div>
                <img className={styles.bannerImg} alt="background" src={backgroundImage} />
            </div>
        </Grid>
    );
}