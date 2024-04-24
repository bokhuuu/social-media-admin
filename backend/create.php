<?php
include 'db_connect.php';

// Get data from JSON payload
$data = json_decode(file_get_contents("php://input"));

$socialMediaName = $data->social_media_name;
$socialMediaLink = $data->social_media_link;


$sql = "INSERT INTO social_media (Social_Media_Name, Social_Media_Link) VALUES ('$socialMediaName', '$socialMediaLink')";
if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "New record created successfully"]);
} else {
    echo json_encode(["error" => "Error: " . $sql . "<br>" . $conn->error]);
}

$conn->close();
?>
