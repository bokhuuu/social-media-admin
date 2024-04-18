<?php
include 'db_connect.php';

$socialMediaName = $_POST['social_media_name'];
$socialMediaLink = $_POST['social_media_link'];

$sql = "INSERT INTO social_media (Social_Media_Name, Social_Media_Link) VALUES ('$socialMediaName', '$socialMediaLink')";
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>
