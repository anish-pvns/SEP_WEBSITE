<?php
// Start a session (if not already started)
session_start();

// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sih";

// Create a database connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to sanitize user input
function sanitizeInput($input) {
    return htmlspecialchars(stripslashes(trim($input)));
}

// Check if the form is submitted
if (isset($_POST['signin'])) {
    // Get username and password from the form
    $name = sanitizeInput($_POST['name']);
    $password = sanitizeInput($_POST['pass']);

    // Query to check if the username and password match
    $sql = "SELECT * FROM login_users WHERE name = '$name' AND pass= '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        // User is authenticated; set session variables
        $_SESSION['username'] = $name;
        $_SESSION['loggedin'] = true;

        // Redirect to the new page after successful login
        header("Location: welcome.php");
        exit();
    } else {
        // Display an error message and redirect back to the login page
        echo "<script>alert('Invalid username or password. Please try again.');</script>";
        header("Location: jhttps://www.google.com/"); // Change this to your login page URL
        exit();
    }
}

// Close the database connection
$conn->close();
?>



