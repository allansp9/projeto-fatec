<?php
/* Database connection settings */
$host = 'localhost';
$user = 'allansp9';
$pass = '';
$db = 'filmdb';
$mysqli = new mysqli($host,$user,$pass,$db) or die($mysqli->error);
