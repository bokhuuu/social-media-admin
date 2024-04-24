# Social Media Admin

## Overview

The Social Media Admin is a web application built with React.js for the front-end, PHP for the back-end, and MySQL for the database. It allows users to manage social media entries by adding, editing, and deleting them. This README provides an overview of the project, installation instructions, features, and usage guidelines.

## Features

- **Add Social Media Entries:** Add new social media entries with a name and link.
- **Edit Social Media Entries:** Edit existing social media entries.
- **Delete Social Media Entries:** Delete social media entries.
- **Real-time Updates:** Changes made in the front-end are reflected in the database.
- **Validation:** Frontend and backend validation for social media links.
- **Responsive Design:** Styled with Bootstrap for responsiveness across devices.

## Initial Setup

1. **Set up XAMPP Environment:**

   - Install XAMPP and start the Apache and MySQL services.

2. **Database Setup:**

   - Create a MySQL database named 'social_media_db' with a table named 'social_media'.
   - Import the provided MySQL database schema (`social_media_db.sql`) into your local MySQL database using phpMyAdmin or a similar tool.

3. **Backend PHP Files:**

   - Place the PHP files (`create.php`, `read.php`, `update.php`, `delete.php`, `db_connect.php`) in your XAMPP `htdocs` directory or equivalent.

4. **Frontend Setup:**

   - Clone the repository to your local machine: git@github.com:bokhuuu/social-media-admin.git
   - Navigate to the project directory
   - Install dependencies for the front-end
   - Start the React development server

5. **Start Server:**
   - Start your XAMPP server or equivalent local server environment.

## Usage

1. **Access the Application:**

   - Access the application in your web browser at `http://localhost:5173` or the appropriate URL provided by the React development server.

2. **Managing Social Media Entries:**
   - Use the provided forms to add, edit, or delete social media entries.
   - Changes made in the front-end will be reflected in the database in real-time.
   - Validation messages will automatically disappear after 3 seconds upon successful submission.

## Contributing

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
