import { Box, Grid, useTheme, useMediaQuery } from "@mui/material"; // Importing necessary components from Material-UI
import React, { useContext } from "react"; // Importing React and useContext hook
import LeftDashboard from "./LeftDashboard"; // Importing LeftDashboard component
import styles from "../CSS/dashboard.module.css"; // Importing CSS styles
import PrimarySearchAppBar from "./PrimarySearchAppBar"; // Importing PrimarySearchAppBar component
import RightDashboard from "./RightDashboard"; // Importing RightDashboard component

// Functional component for the Dashboard
const Dashboard = () => {
  const theme = useTheme(); // Accessing the theme object using useTheme hook
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm")); // Checking if the device is small using useMediaQuery hook

  return (
    <>
      {/* Main grid container for the dashboard */}
      <Grid container className={styles.main_dashboard}>
        {/* Conditionally rendering LeftDashboard component based on device size */}
        {!isSmallDevice && (
          <Grid item sx={{ width: `${"17.5%"}` }}>
            {" "}
            {/* Setting width for the left panel */}
            <LeftDashboard /> {/* Rendering LeftDashboard component */}
          </Grid>
        )}

        {/* Right panel for the dashboard */}
        <Grid
          item
          sx={{ width: isSmallDevice ? "100%" : "82.5%" }} // Setting width for the right panel based on device size
          className={styles.rightPanel} // Applying CSS class for styling
        >
          <RightDashboard /> {/* Rendering RightDashboard component */}
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard; // Exporting the Dashboard component
