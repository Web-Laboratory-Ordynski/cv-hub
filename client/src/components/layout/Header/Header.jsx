import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    }
}));

export const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        CV-Hub
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {/* News */}
                    </Typography>
                    <Button color="inherit"><Link className={classes.link} to='/about'>About</Link></Button>
                    <Button color="inherit"><Link className={classes.link} to='/home'>Home</Link></Button>
                    <Button color="inherit"><Link className={classes.link} to='/user/profile'>Profile</Link></Button>
                    <Button color="inherit"><Link className={classes.link} to='/user/profile/edit'>Edit profile</Link></Button>
                    <Button color="inherit"><Link className={classes.link} to='/resume/create'>Create Resume</Link></Button>
                    <Button color="inherit"><Link className={classes.link} to='/resume/resumes'>Resumes</Link></Button>
                    <Button color="inherit"><Link className={classes.link} to='/login'>Login</Link></Button>
                    <Button color="inherit"><Link className={classes.link} to='/signup'>Sign Up</Link></Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}