import React from "react"; // Importing React library
import Card from "@mui/material/Card"; // Importing Card component from Material-UI
import CardContent from "@mui/material/CardContent"; // Importing CardContent component from Material-UI
import Button from "@mui/material/Button"; // Importing Button component from Material-UI
import Typography from "@mui/material/Typography"; // Importing Typography component from Material-UI
import styles from "../CSS/dashboard.module.css"; // Importing CSS styles

// Functional component for the Premium Card
const PremiumCard = () => {
  return (
    // Card component with custom styles
    <Card
      className={styles.roundedCard}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
    >
      {/* Left content of the card */}
      <CardContent className={styles.cardContentLeft}>
        <Typography
          fontSize={"big"}
          fontWeight={300}
          color={"white"}
          variant="h5"
        >
          Unlock Premium
        </Typography>
        <Typography
          fontSize={"small"}
          fontWeight={300}
          color={"white"}
          variant="body1"
        >
          Get upto 10Gb storage for a limited time
        </Typography>
      </CardContent>
      {/* Right content of the card */}
      <CardContent className={styles.cardContentRight}>
        {/* Button to unlock premium */}
        <Button
          className={styles.unlockButton}
          variant="contained"
          style={{ backgroundColor: "white" }}
        >
          <Typography
            fontSize={"small"}
            fontWeight={400}
            color={"black"}
            variant="body3"
          >
            Unlock
          </Typography>
        </Button>
      </CardContent>
    </Card>
  );
};

export default PremiumCard; // Exporting the PremiumCard component
