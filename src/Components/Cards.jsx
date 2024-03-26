
import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material'; // Importing necessary components from Material-UI
import Chip from '@mui/material/Chip'; // Importing Chip component from Material-UI

// Styles for the cards
const styles = {
    card: {
        minWidth: 250,
        maxWidth: 300,
        borderRadius: 16,
        boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
        margin: '16px',
        minHeight: 150,
        maxHeight: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    cardContent: {
        padding: '16px',
        color: "black",
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',  // Fill the full height of the CardContent
    },
    title: {
        fontSize: 20,
        marginBottom: '10px',
        margin: "2px"
    },
};

// Functional component to render the cards
const Cards = () => {
    return (
        <Grid container spacing={2} style={styles.cardContainer}>
            {/* First Card */}
            <Grid item xs={12} sm={6} md={3}> {/* Adjust Grid item based on your needs */}
                <Card style={{ ...styles.card }} >
                    <CardContent style={styles.cardContent}>
                        <Typography fontSize={"small"} fontWeight={300} color={"grey"} variant="h5">Revenue</Typography>
                        <CardContent>
                            <Typography variant="h5">$56,945</Typography>
                        </CardContent>
                        {/* Chip and accompanying text */}
                        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center' }}>
                            <Chip label="+45%" style={{ backgroundColor: 'green', color: 'white', marginRight: '8px' }} />
                            <Typography variant="body2" color="textSecondary">From 4.6%</Typography>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            {/* Second Card */}
            <Grid item xs={12} sm={6} md={3}>
                <Card style={{ ...styles.card }}>
                    <CardContent style={styles.cardContent}>
                        <Typography fontSize={"small"} fontWeight={300} color={"grey"} variant="h5">Users</Typography>
                        <CardContent>
                            <Typography variant="h5">76.8 %</Typography>
                        </CardContent>
                        {/* Chip and accompanying text */}
                        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center' }}>
                            <Chip label="-1.7%" style={{ backgroundColor: 'red', color: 'white', marginRight: '8px' }} />
                            <Typography variant="body2" color="textSecondary">From 4.6%</Typography>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            {/* Third Card */}
            <Grid item xs={12} sm={6} md={3}>
                <Card style={{ ...styles.card }}>
                    <CardContent style={styles.cardContent}>
                        <Typography fontSize={"small"} fontWeight={300} color={"grey"} variant="h5">New Signups</Typography>
                        <CardContent>
                            <Typography variant="h5">116</Typography>
                        </CardContent>
                        {/* Chip */}
                        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center' }}>
                            <Chip label="0.0" style={{ backgroundColor: 'grey', color: 'white', marginRight: '8px' }} />
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            {/* Fourth Card */}
            <Grid item xs={12} sm={6} md={3}>
                <Card style={{ ...styles.card }}>
                    <CardContent style={styles.cardContent}>
                        <Typography fontSize={"small"} fontWeight={300} color={"grey"} variant="h5">Retention</Typography>
                        <CardContent>
                            <Typography variant="h5">12.67 %</Typography>
                        </CardContent>
                        {/* Chip and accompanying text */}
                        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center' }}>
                            <Chip label="0.6%" style={{ backgroundColor: 'red', color: 'white', marginRight: '8px' }} />
                            <Typography variant="body2" color="textSecondary">From 4.6%</Typography>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Cards; // Exporting the Cards component

