import React, { useState } from "react";
import { Button, Container, Typography, Box, Snackbar, Alert } from "@mui/material";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

const App = () => {
  const [editingUser, setEditingUser] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formError, setFormError] = useState(null);

  const handleAddUser = () => {
    setEditingUser(null); // Reset the form
    setIsFormVisible(true); // Show the form
  };

  const handleEditUser = (user) => {
    setEditingUser(user); // Set user to edit
    setIsFormVisible(true); // Show the form
  };

  const handleFormSubmit = () => {
    setIsFormVisible(false); // Hide the form
    setEditingUser(null); // Clear the editing user
  };

  const handleFormError = (message) => {
    setFormError(message);
  };

  const handleCloseSnackbar = () => {
    setFormError(null);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      {/* Header Section */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" component="h1" color="primary">
          User Management Dashboard
        </Typography>
        <Button variant="contained" color="primary" onClick={handleAddUser}>
          Add User
        </Button>
      </Box>

      {/* Snackbar for Error Messages */}
      {formError && (
        <Snackbar
          open={!!formError}
          autoHideDuration={4000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: "100%" }}>
            {formError}
          </Alert>
        </Snackbar>
      )}

      {/* Form or User List */}
      {isFormVisible ? (
        <UserForm
          userToEdit={editingUser}
          onFormSubmit={handleFormSubmit}
          onError={handleFormError}
        />
      ) : (
        <UserList onEdit={handleEditUser} />
      )}
    </Container>
  );
};

export default App;






