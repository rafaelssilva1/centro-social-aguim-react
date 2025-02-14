<?php
header("Content-Type: application/xml; charset=utf-8");

$apiUrl = getenv('SITEMAP_API_URL');

$response = file_get_contents($apiUrl);
if ($response === FALSE) {
    die("Error fetching data");
}

$pages = json_decode($response, true);
if (!$pages) {
    die("Invalid JSON response");
}

// Generate XML sitemap
echo '<?xml version="1.0" encoding="UTF-8"?>';
echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

foreach ($pages as $page) {
    echo '<url>';
    echo '<loc>' . getenv('BASE_URL') . htmlspecialchars($page['slug']) . '</loc>';
    echo '<lastmod>' . date('Y-m-d', strtotime($page['last_modified'] ?? 'now')) . '</lastmod>';
    echo '<changefreq>daily</changefreq>';
    echo '<priority>0.8</priority>';
    echo '</url>';
}

echo '</urlset>';
?>
