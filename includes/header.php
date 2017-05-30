<html>
<head>
    <meta charset="UTF-8">
    <title>filmDB</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/style.css" type="text/css" />
</head>
<body>
<?php session_start(); ?>
<?php require '../login/db.php'; ?>

<div class="wrapper">
  <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="../views/index.php">filmDB</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse ">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="../login/logout.php">Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>