<?php
$storedLocations = array(
    array("id" => "Tokyo", "lat" => 35.689487, "lon" => 139.691711),
    array("id" => "Yokohama", "lat" => 35.443707, "lon" => 139.638031),
    array("id" => "Kyoto", "lat" => 35.011635, "lon" => 135.768036),
    array("id" => "Osaka", "lat" => 34.693737, "lon" => 135.502167),
    array("id" => "Sapporo", "lat" => 43.066666, "lon" => 141.350006),
    array("id" => "Nagoya", "lat" => 35.183334, "lon" => 136.899994),
);

echo json_encode($storedLocations);