<?php
// Database configuration (replace with your own values)
$servername = "localhost"; // Your MySQL server address
$username = "root"; // Your MySQL username
$password = ""; // Your MySQL password
$dbname = ""; // Your MySQL database name

// Create a database connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process the form data when the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $rawPassword = $_POST["pass"]; // Get the raw (unhashed) password

    // Hash the password
    $hashedPassword = password_hash($rawPassword, PASSWORD_DEFAULT);

    // Insert the user data into the database (you may want to add more validation and security measures)
    $sql = "INSERT INTO login_users (name, email, pass) VALUES ('$name', '$email', '$hashedPassword')";
    
    if ($conn->query($sql) === TRUE) {
        echo "Registration successful!";
        header("Location: lms/project/");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the database connection
    $conn->close();
}
?>
