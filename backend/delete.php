<?php
include 'db_connect.php';

// Check if data is sent in the request payload
$data = json_decode(file_get_contents("php://input"));

if (!$data || !isset($data->id)) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid request data"]);
    exit();
}

// Sanitize and validate input data
$socialMediaId = intval($data->id);

// Delete social media entry from the database
$sql = "DELETE FROM social_media WHERE ID=$socialMediaId";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "Record deleted successfully"]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Error deleting record: " . $conn->error]);
}

$conn->close();
?>
