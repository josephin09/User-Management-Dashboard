import React, { useState, useEffect } from "react";
import { Button, TextField, Box } from "@mui/material";
import { addUser, updateUser } from "../services/userService";

const UserForm = ({ userToEdit, onFormSubmit, onError }) => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: '',
  });
  
  useEffect(() => {
    if (userToEdit) {
      setUser({
        firstName: userToEdit.name.split(' ')[0],
        lastName: userToEdit.name.split(' ')[1],
        email: userToEdit.email,
        department: userToEdit.company?.name || '',
      });
    }
  }, [userToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (userToEdit) {
        // If editing, update user
        await updateUser(userToEdit.id, user);
      } else {
        // If adding, add user
        await addUser(user);
      }
      onFormSubmit(); // After submit, notify parent to hide form
    } catch (error) {
      onError(error.message); // If error, display error message
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField
        label="First Name"
        name="firstName"
        value={user.firstName}
        onChange={handleChange}
        required
      />
      <TextField
        label="Last Name"
        name="lastName"
        value={user.lastName}
        onChange={handleChange}
        required
      />
      <TextField
        label="Email"
        name="email"
        value={user.email}
        onChange={handleChange}
        required
        type="email"
      />
      <TextField
        label="Department"
        name="department"
        value={user.department}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        {userToEdit ? "Update User" : "Add User"}
      </Button>
    </Box>
  );
};

export default UserForm;












