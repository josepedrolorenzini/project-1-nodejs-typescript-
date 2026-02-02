<?php 
header("Content-Type: application/json") ;

// PHP Chunk 👇
$rawBody = file_get_contents("http://localhost:4040/users");

// Read the body 
// $rawBody = file_get_contents("php://input");


//  convertir JSON → array
$data = json_decode($rawBody, true);

if (!$data) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "error" => "Invalid JSON"
    ]);
    exit;
}

// Debug
error_log(print_r($data, true));

// Respuesta
http_response_code(201);
echo json_encode([
    "success" => true,
    "message" => "User received ✅",
    "user" => $data
]);