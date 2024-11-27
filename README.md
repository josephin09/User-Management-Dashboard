## **User Management Dashboard**

A simple user management application built with React.js and Material-UI. This app allows users to view a list of users, add new users, edit existing users, and delete users. The app communicates with a JSONPlaceholder API for mock user data.

---

## **Features**

- View a list of users with details like ID, name, email, and department.
- Add a new user via a form.
- Edit user details using an edit form.
- Delete users from the list.
- Responsive design using Material-UI.
- Error handling and feedback using Snackbars.

---

## **Challenges Faced**

1. API Integration:
   Problem: JSONPlaceholder API doesn’t support full CRUD operations (e.g., adding users).
   Solution: Handled mock responses locally and updated the frontend state for a better user experience.
2. Dynamic Form for Add/Edit:
   Problem: Reusing the form for both adding and editing users required handling conditional logic.
   Solution: Used props (userToEdit) and controlled inputs to prefill the form for editing.
3. Error Handling:
   Problem: Ensuring clear error messages for failed API calls.
   Solution: Implemented a centralized error message display using Material-UI’s Snackbar.
4. State Management:
   Problem: Updating user lists dynamically after add/edit/delete actions.
   Solution: Managed state using React hooks (useState, useEffect) and updated the state upon successful API responses.

---

## **Future Improvements**

- Enhance API: Use a custom backend API for actual CRUD operations.
- Pagination: Add pagination for large user lists.
- Search/Filter: Include search and filter options for easier user management.
