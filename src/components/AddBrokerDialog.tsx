"use client";
import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import validateBrokerToken from "@/utils/validateBrokerToken";

interface BrokerValidationResponse {
  success: boolean;
  message?: string;
}

const AddBrokerDialog: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");
  const [broker] = useState<string>("Dhan");
  const [error, setError] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setToken("");
    setError("");
    setIsValid(false);
    setOpen(false);
  };

  const handleCheck = async () => {
    if (!token.trim()) {
      setError("Token is required");
      return;
    }
    try {
      const response: BrokerValidationResponse = await validateBrokerToken(
        token,
        broker
      );
      if (response.success) {
        setIsValid(true);
        setError("");
      } else {
        setIsValid(false);
        setError(response.message || "Invalid token.");
      }
    } catch (err) {
      console.error("Validation error:", err);
      setError("Failed to validate the token. Please try again.");
    }
  };

  const handleSubmit = async () => {
    if (!isValid) {
      setError("Please validate the token first.");
      return;
    }

    try {
      const response = await axios.post("/api/userbroker", { token, broker });
      const { success, message }: { success: boolean; message?: string } =
        response.data;

      if (success) {
        console.log("Broker token added successfully.");
        handleClose();
      } else {
        setError(message || "Failed to add the broker token.");
      }
    } catch (err) {
      console.error("Error submitting token:", err);
      setError("Failed to add the broker token. Please try again.");
    }
  };

  return (
    <>
      <div onClick={handleOpen} className="cursor-pointer">
        <FaPlus size={25} />
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogContent>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">
                  Enter your {broker} Access Token
                </h2>
                <IconButton onClick={handleClose}>
                  <FaTimes size={20} />
                </IconButton>
              </div>
              <TextField
                label="Access Token"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                multiline
                rows={4}
                fullWidth
                error={!!error}
                helperText={error}
                variant="outlined"
                margin="dense"
              />
            </DialogContent>
            <DialogActions className="flex justify-end gap-2">
              <Button
                onClick={handleCheck}
                color="primary"
                variant="outlined"
              >
                Check
              </Button>
              <Button
                onClick={handleSubmit}
                color="primary"
                variant="contained"
              >
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        </motion.div>
      )}
    </>
  );
};

export default AddBrokerDialog;
