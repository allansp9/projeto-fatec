<?php
/* Pagina utilizada para mostrar as mensagens de sucesso */
session_start();
?>
<!DOCTYPE html>
<html>
<head>
  <title>Success</title>
  <?php require_once 'css/css.html'; ?>
</head>
<body>
<div class="form">
    <h1><?= 'Success'; ?></h1>
    <p>
    <?php
    if( isset($_SESSION['message']) AND !empty($_SESSION['message']) ):
        echo $_SESSION['message'];
    else:
        header( "location: index.php" );
    endif;
    ?>
    </p>
    <a href="../views/index.php"><button class="button button-block"/>Home</button></a>
</div>
</body>
</html>
