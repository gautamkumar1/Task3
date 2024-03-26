import { React, useContext, useEffect, useRef, useState } from "react"; // Importing necessary hooks and React from 'react' library
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Snackbar,
  Typography,
} from "@mui/material"; // Importing components from Material-UI library
import styles from "../CSS/dashboard.module.css"; // Importing CSS module for styling

import PrimarySearchAppBar from "./PrimarySearchAppBar"; // Importing the PrimarySearchAppBar component
import PremiumCard from "../Components/PremiumCard"; // Importing the PremiumCard component
import Cards from "../Components/Cards"; // Importing the Cards component
import LineChartCard from "../Components/LineChartCard"; // Importing the LineChartCard component

// Defining the RightDashboard component
const RightDashboard = () => {
  return (
    <>
      {" "}
      {/* Fragment shorthand for wrapping adjacent JSX elements */}
      <Box className={styles.right_dashboard}>
        {" "}
        {/* Main container for the right dashboard */}
        {/* Navigation bar component */}
        <Box className={styles.dashboard_nav}>
          <PrimarySearchAppBar />
        </Box>
        {/* PremiumCard component */}
        <PremiumCard />
        {/* Cards component */}
        <Cards />
        {/* LineChartCard component */}
        <LineChartCard />
      </Box>
    </>
  );
};

export default RightDashboard; // Exporting the RightDashboard component
