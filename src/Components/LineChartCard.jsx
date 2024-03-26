import * as React from "react"; // Importing React library
import {
  Card,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material"; // Importing necessary components from Material-UI
import { LineChart } from "@mui/x-charts/LineChart"; // Importing LineChart component from Material-UI
import { useTheme } from "@mui/material/styles"; // Importing useTheme hook from Material-UI

// Arrays containing data for the chart
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const firstLinePoints = [180, 250, 180, 150, 250, 130, 260];
const secondLineMarks = [200, 200, 300, 400, 250, 350, 200];
const xLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Functional component for the Dual Line Chart
export default function DualLineChart() {
  const theme = useTheme(); // Accessing the theme object using useTheme hook
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm")); // Checking if the device is small using useMediaQuery hook

  return (
    <Card
      style={{
        margin: "16px",
        width: "100vw",
        maxWidth: isSmallDevice ? "100vw" : "80vw",
      }}
    >
      {" "}
      {/* Responsive Card */}
      <CardContent>
        <Typography
          variant="h6"
          gutterBottom
          align="left"
          style={{
            fontWeight: 200,
            fontFamily:
              '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif',
          }}
        >
          Performance
        </Typography>
        {/* Line Chart Component */}
        <LineChart
          width={isSmallDevice ? 0.7 * window.innerWidth : 1080} // Adjusting width for small devices
          height={300}
          series={[
            {
              data: firstLinePoints,
              area: true,
              stack: "total",
              showMark: false,
              showLabel: false,
            }, // First line data
            {
              data: secondLineMarks,
              area: true,
              stack: "total",
              showMark: false,
              showLabel: false,
            }, // Second line data
          ]}
          xAxis={[{ scaleType: "point", data: xLabels }]} // X-axis labels
          sx={{
            ".MuiLineElement-root": {
              display: "none", // Styling to hide line elements
            },
          }}
        />
      </CardContent>
    </Card>
  );
}
