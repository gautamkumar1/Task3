import { Box, Button, Link, Typography } from "@mui/material"; // Importing necessary components from Material-UI
import React, { useContext, useEffect, useState } from "react"; // Importing React, useContext, useEffect, and useState
import styles from "../CSS/dashboard.module.css"; // Importing CSS styles
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"; // Importing ArrowDownwardIcon component from Material-UI icons

// Functional component for the Left Dashboard
const LeftDashboard = () => {
  // State for controlling the dropdown visibility
  const [showDropdown, setShowDropdown] = useState(true);

  // Function to handle dashboard click and toggle dropdown visibility
  const handleDashboardClick = () => {
    setShowDropdown(!showDropdown);
  };

  // Effect to handle click outside the dropdown and close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showDropdown && event.target.closest(".dashboardbox") === null) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <>
      {/* Left Dashboard container */}
      <Box className={styles.left_dashboard}>
        <Box>
          <Box>
            {/* Logo */}
            <Link href="/" style={{ textDecoration: "none" }}>
              <Box>
                <Typography id={styles.logo} variant="h5">
                  Clonify
                </Typography>
              </Box>
            </Link>

            {/* DASHBOARD headline */}
            <Box sx={{ marginTop: 0 }} className={styles.services_header}>
              <Typography
                fontSize={"small"}
                fontWeight={600}
                color={"gray"}
                variant="body3"
              >
                D A S H B O A R D
              </Typography>
            </Box>

            {/* Tabs for master data */}
            <Box sx={{ marginBottom: 0 }} className={styles.tabs_section}>
              <Box className="dashboardbox" onClick={handleDashboardClick}>
                <Typography variant="body2">
                  Dashboard <ArrowDownwardIcon />
                </Typography>
              </Box>
              {showDropdown && (
                <>
                  <Box className={`${styles.tab} `}>
                    <Typography variant="body2">Analytics</Typography>
                  </Box>
                  <Box className={`${styles.tab} `}>
                    <Typography variant="body2">Finance</Typography>
                  </Box>
                  <Box className={`${styles.tab} `}>
                    <Typography variant="body2">Job Board</Typography>
                  </Box>
                </>
              )}
              <Box className={`${styles.tab}`}>
                <Typography variant="body2">Messages</Typography>
              </Box>
              <Box className={`${styles.tab}`}>
                <Typography variant="body2">Friends</Typography>
              </Box>
              <Box className={`${styles.tab}`}>
                <Typography variant="body2">Apps</Typography>
              </Box>
            </Box>

            {/* PAGES HEADING */}
            <Box sx={{ marginTop: 0 }} className={styles.services_header}>
              <Typography
                fontSize={"small"}
                fontWeight={600}
                color={"gray"}
                variant="body3"
              >
                P A G E S
              </Typography>
            </Box>

            {/* Tabs for pages */}
            <Box className={styles.tabs_section}>
              <Box className={`${styles.tab}`}>
                <Typography variant="body2">Help Center</Typography>
              </Box>
              <Box className={`${styles.tab}`}>
                <Typography variant="body2">File Manager</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LeftDashboard; // Exporting the LeftDashboard component
