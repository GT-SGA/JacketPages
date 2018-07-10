<?php
$servername = "localhost";
$username = "username";
$password = "password";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    return "error";
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
return "no error";
?>
