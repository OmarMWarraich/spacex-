// Imports
// React Imports
import React from 'react';
// Material Ui Imports
import { Button, Card, CardContent, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// Routers Imports
import { Link } from 'react-router-dom';
// Images Imports
import succeeded from '../asserts/images/succeeded.png';
import failed from '../asserts/images/failed.png';
import upComming from '../asserts/images/upcomming.png';

// Button Styling
const useStyles = makeStyles((theme) => ({
    catButton: {
        marginTop:"10px",
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        textDecoration: "none",
        width: "100%" 
    },
}));

// Launches Page
export const Launches = () => {
    // use Styles
    const classes = useStyles();
    return (
        <div className="launchesContainer">
            <Grid container className="launchesGrid">
                {/* Succeeded */}
                <Grid item xs={10} md={3} component={Card} className="lgCard lgSucceeded">
                    <CardContent className="launchesCard">
                        <img src={succeeded} className="launchesImage" alt="succeeded" />
                        <Link to="succeeded" className=" buttonLink">
                            <Button
                                variant="contained"
                                className={classes.catButton}
                            >
                                Succeeded
                            </Button>
                        </Link>
                    </CardContent>
                </Grid>
                {/* Failed */}
                <Grid item xs={10} md={3} component={Card} className="lgCard lgFailed">
                    <CardContent className="launchesCard">
                        <img src={failed} className="launchesImage" alt="failed" />
                        <Link to="failed" className=" buttonLink">
                            <Button
                                variant="contained"
                                className={classes.catButton}
                            >
                                Failed
                            </Button>
                        </Link>
                    </CardContent>
                </Grid>
                {/* UpComming */}
                <Grid item xs={10} md={3} component={Card} className="lgCard lgUpComming">
                    <CardContent className="launchesCard">
                        <img src={upComming} className="launchesImage" alt="upcomming" />
                        <Link to="upcomming" className=" buttonLink">
                            <Button
                                variant="contained"
                                className={classes.catButton}
                            >
                                Up-Comming
                            </Button>
                        </Link>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}