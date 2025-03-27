import React, { useState } from "react";
import { Button, TextField, Typography, Paper } from "@mui/material";

const FreelanceOnboarding = () => {
  const [serviceType, setServiceType] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle onboarding submission (e.g., send data to the server)
    console.log("Service Information Submitted:", {
      serviceType,
      description,
      rate,
    });
    // Reset the form after submission (optional)
    setServiceType("");
    setDescription("");
    setRate("");
  };

  return (
    <Paper elevation={3} className="p-8 max-w-md mx-auto">
      <Typography variant="h4" className="text-center mb-4">
        Freelance Service Onboarding
      </Typography>

      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField
          label="Service Type"
          variant="outlined"
          fullWidth
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
          required
        />
        <TextField
          label="Description of Service"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <TextField
          label="Hourly Rate"
          variant="outlined"
          fullWidth
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          required
        />
        
        <Button variant="contained" color="primary" type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default FreelanceOnboarding;