<?php
include 'db_connect.php';

// Check if data is sent in the request payload
$data = json_decode(file_get_contents("php://input"));

if (!$data || !isset($data->id) || !isset($data->social_media_name) || !isset($data->social_media_link)) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid request data"]);
    exit();
}

// Sanitize and validate input data
$socialMediaId = intval($data->id);
$socialMediaName = mysqli_real_escape_string($conn, $data->social_media_name);
$socialMediaLink = mysqli_real_escape_string($conn, $data->social_media_link);

// Update social media entry in the database
$sql = "UPDATE social_media SET Social_Media_Name='$socialMediaName', Social_Media_Link='$socialMediaLink' WHERE ID=$socialMediaId";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "Record updated successfully"]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Error updating record: " . $conn->error]);
}

$conn->close();
?>
