// Imports
// React Imports
import React from 'react';
// Materail UI Imports
import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
// Graph QL Imports
import { useLaunchesQuery } from '../generated/graphql';
// Routers Imports
import { Link } from 'react-router-dom';
// Images Imports
import noImage from '../asserts/images/noImage.png';

// Failed Launches Page
export const Failed = () => {
    // Query to fetch data
    const { data, error, loading } = useLaunchesQuery();
    // In Case Data is Loading
    if (loading) {
        return (<div className="launchesList">
            <div className="slLoading">
                <div className="loading">
                    <div className="loader"></div>
                </div>
            </div>
        </div>
        )
    }
    // In Case of Error or no data recieved
    if (error || !data) {
        return (<div className="launchesList">
            <div className="slLoading">
                <div className="loading">
                    <h4>There is some network Error</h4>
                    <h4>Try Again Later</h4>
                </div>
            </div>
        </div>
        )
    }
    // Return when every thing is ok
    return (
        <div className="launchesList">
            <h3>Failed Space X Launches</h3>
            <div className="launchesContainer">
                <Grid container className="launchesGrid">
                    {!!data.launches && data.launches.map(
                        (launch, i) => !!launch && launch.launch_success === false && (
                            <Grid key={i} item xs={10} md={3} component={Card} className="lgCard">
                                <CardContent className="slCard">
                                    <Typography variant="h6" className="slCardText" align="center" gutterBottom >
                                        {launch.mission_name}
                                    </Typography>
                                    <div className="imageDiv">
                                        {(launch.links?.mission_patch_small)?.length && launch.links?.mission_patch_small ?
                                            <img src={launch.links?.mission_patch_small} className="cardImage" alt="failed" />
                                            : <img src={noImage} className="cardImage" alt="failed" />}
                                    </div>
                                    <div className="cardDetails">
                                        <Typography variant="h6" className="slCardText" align="center" gutterBottom >
                                            Flight No. : {launch.flight_number}
                                        </Typography>
                                    </div>
                                    <Link to={`/launches/failed/${launch?.flight_number}`} className=" buttonLink">
                                        <Button
                                            variant="contained"
                                            className="detailsButton"
                                        >
                                            Details
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Grid>
                        )
                    )}
                </Grid>
            </div>
        </div>
    )
}