'use client';
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import axios from "axios";

const AddBrokerDialog = () => {
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState("");
  const [broker, setBroker] = useState("Dhan"); // Assuming "Dhan" as the broker
  const [error, setError] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setToken("");
    setError("");
    setOpen(false);
  };

  const handleSubmit = async () => {
    if (!token.trim()) {
      setError("Token is required");
      return;
    }

    try {
      const response = await axios.post("/api/userbroker", { token, broker });
      const { success, message } = response.data;

      if (success) {
        // Fetch and display user's data
        console.log("User data fetched successfully.");
        handleClose();
      } else {
        setError(message || "Failed to add the broker token.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to add the broker token. Please try again.");
    }
  };

  return (
    <>
      <div onClick={handleOpen} className="cursor-pointer">
        <FaPlus size={25} />
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter your {broker} token</DialogTitle>
        <DialogContent>
          <TextField
            label="Token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            fullWidth
            error={!!error}
            helperText={error}
            variant="outlined"
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Close
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddBrokerDialog;
