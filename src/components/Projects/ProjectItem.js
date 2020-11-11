import React from 'react';

import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import modalImg from '../../assets/img/bg3.jpg';
import styles from './projects.module.css';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    media: {
        height: 140,
    }
}));

export default function ProjectItem(props) {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardMedia image={modalImg} className={classes.media}></CardMedia>
                <CardContent>
                    <h2>{props.title}</h2>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="contained" color="primary">
                        <GitHubIcon className={styles.github} />Github</Button>
                </CardActions>
            </Card>
        </div>
    );
}