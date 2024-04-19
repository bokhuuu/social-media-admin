<?php
include 'db_connect.php';

$sql = "SELECT * FROM social_media";
$result = $conn->query($sql);

$rows = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }
    echo json_encode($rows);
} else {
    echo json_encode(["message" => "No social media entries found"]);
}

$conn->close();
?>
