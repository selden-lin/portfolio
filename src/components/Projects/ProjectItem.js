import React from 'react';

import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

import styles from './projects.module.css';
import CloudIcon from '@material-ui/icons/Cloud';

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
    },
    root: {
        margin: '10px'
    },
    link: {
        marginRight: '10px'
    },
    tag: {
        margin: '0 5px 5px 0'
    }
}));

export default function ProjectItem(props) {
    const classes = useStyles();

    const makeLinks = (links) => {
        if (links.length == 1) {
            return (
                <a className={classes.link} href={links[0]} target="_blank">
                    <Button size="small" variant="contained" color="primary">
                        <GitHubIcon className={styles.github} />Github</Button>
                </a>

            )
        } else {
            return (
                <span>
                    <a className={classes.link} href={links[0]} target="_blank">
                        <Button size="small" variant="contained" color="primary">
                            <GitHubIcon className={styles.github} />Github</Button>
                    </a>
                    <a className={classes.link} href={links[1]} target="_blank">
                        <Button size="small" variant="contained" color="secondary">
                            <CloudIcon className={styles.heroku} />Heroku</Button>
                    </a>
                </span>
            )
        }
    }

    const makeTags = props.data.tags.reduce((acc, item) => {
        acc.push(
            <Chip label={item} color="primary" variant="outline" className={classes.tag} onClick={()=>{}}/>
        )
        return acc;
    }, []);

    return (
        <Card className={classes.root}>
            <CardMedia image={props.data.img} className={classes.media}></CardMedia>
            <CardContent>
                <h2>{props.data.title}</h2>
                {makeTags}
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.data.description}
                </Typography>
                
            </CardContent>
            <CardActions>
                {makeLinks(props.data.links)}
            </CardActions>
        </Card>
    );
}